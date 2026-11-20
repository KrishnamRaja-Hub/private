import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Gsap = typeof import('gsap').gsap;
export type ScrollTriggerPlugin = typeof import('gsap/ScrollTrigger').ScrollTrigger;
export type MotionConditions = { motion: boolean; reduce: boolean; gsap: Gsap; ScrollTrigger: ScrollTriggerPlugin };

// Loaded on first use so GSAP stays off the critical path; registered once.
let libs: Promise<{ gsap: Gsap; ScrollTrigger: ScrollTriggerPlugin }> | undefined;
const load = () =>
  (libs ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([g, s]) => {
    g.gsap.registerPlugin(s.ScrollTrigger);
    return { gsap: g.gsap, ScrollTrigger: s.ScrollTrigger };
  }));

/**
 * One place for GSAP in the app (gsap-frameworks guidance):
 *  - plugins loaded lazily and registered once, browser only;
 *  - animations created after the view exists, outside Angular's zone so scroll
 *    callbacks never trigger change detection;
 *  - every setup is scoped to its component root and reverted on destroy;
 *  - gsap.matchMedia() gives each setup a reduced-motion branch.
 */
@Injectable({ providedIn: 'root' })
export class GsapService {
  private readonly zone = inject(NgZone);
  readonly enabled = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * Run `setup` scoped to `scope`. Returns a cleanup that reverts every tween and
   * ScrollTrigger it created. Call it from the component's DestroyRef.
   */
  animate(scope: Element, setup: (c: MotionConditions) => void | (() => void)): () => void {
    if (!this.enabled) return () => {};
    let revert = () => {};
    let destroyed = false;
    load().then(({ gsap, ScrollTrigger }) => {
      if (destroyed) return; // component died before the import resolved
      this.zone.runOutsideAngular(() => {
        const mm = gsap.matchMedia(scope);
        mm.add(
          { motion: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' },
          ctx => setup({ ...(ctx.conditions as Pick<MotionConditions, 'motion' | 'reduce'>), gsap, ScrollTrigger }),
          scope,
        );
        revert = () => mm.revert();
      });
    });
    return () => {
      destroyed = true;
      revert();
    };
  }
}
