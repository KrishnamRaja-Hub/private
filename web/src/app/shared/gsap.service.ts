import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type MotionConditions = { motion: boolean; reduce: boolean };

/**
 * One place for GSAP in the app (gsap-frameworks guidance):
 *  - plugins registered once, browser only;
 *  - animations created after the view exists, outside Angular's zone so scroll
 *    callbacks never trigger change detection;
 *  - every setup is scoped to its component root and reverted on destroy;
 *  - gsap.matchMedia() gives each setup a reduced-motion branch.
 */
@Injectable({ providedIn: 'root' })
export class GsapService {
  private readonly zone = inject(NgZone);
  readonly enabled = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.enabled) gsap.registerPlugin(ScrollTrigger);
  }

  /**
   * Run `setup` scoped to `scope`. Returns a cleanup that reverts every tween and
   * ScrollTrigger it created. Call it from the component's DestroyRef.
   */
  animate(scope: Element, setup: (c: MotionConditions) => void | (() => void)): () => void {
    if (!this.enabled) return () => {};
    return this.zone.runOutsideAngular(() => {
      const mm = gsap.matchMedia(scope);
      mm.add(
        { motion: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' },
        ctx => setup(ctx.conditions as MotionConditions),
        scope,
      );
      return () => mm.revert();
    });
  }

  refresh(): void {
    if (this.enabled) this.zone.runOutsideAngular(() => ScrollTrigger.refresh());
  }
}

export { gsap, ScrollTrigger };
