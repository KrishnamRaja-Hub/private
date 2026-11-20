import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { GsapService } from '../../../shared/gsap.service';
import { CONTROL_PHASES, PRINCIPLES } from '../governance.data';

/** Lucide icons (24×24, stroke) for the seven Sutras, in the live site's icon style. */
const ICONS: Record<number, readonly string[]> = {
  1: ['M11 17a1 1 0 0 1-1-1V5a3 3 0 0 1 6 0v3', 'M15 8h4a2 2 0 0 1 2 2v1a7 7 0 0 1-7 7h-1', 'M3 21v-4a4 4 0 0 1 4-4h3'],
  2: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 0-.01', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  3: ['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4'],
  4: ['m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', 'M7 21h10', 'M12 3v18', 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'],
  5: ['M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'm9 14 2 2 4-4'],
  6: ['M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0', 'M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6'],
  7: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'],
};

/**
 * The /our-story "Timeline of Growth" pattern for RBI's seven FREE-AI Sutras.
 * GSAP ScrollTrigger replaces the live site's scroll listener: each row gets the
 * site's `.animated` class (rail dot pops, line grows) as it enters, and the centre
 * progress rail fills with the scroll.
 */
@Component({
  selector: 'app-principles-timeline',
  styleUrls: ['./story-patterns.css', './principles-timeline.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="timeline-section" id="free-ai" aria-labelledby="free-ai-title">
      <div class="timeline-container">
        <div class="timeline-header">
          <span class="timeline-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            RBI FREE-AI Framework
          </span>
          <h2 class="timeline-heading" id="free-ai-title">Responsible AI in Practice</h2>
          <p class="timeline-subheading">The seven Sutras of RBI's FREE-AI framework, and what they expect of us.</p>
        </div>

        <div class="timeline-progress-rail" aria-hidden="true">
          <div class="progress-rail-track"><div class="progress-rail-fill"></div></div>
        </div>

        <ol class="timeline-grid">
          @for (p of principles; track p.index; let odd = $odd) {
            <li class="timeline-row" [class.timeline-row-left]="!odd" [class.timeline-row-right]="odd">
              <div class="rail-column" aria-hidden="true">
                <div class="rail-spacer"></div>
                <div class="rail-dot" [style.background]="p.color"
                  [style.box-shadow]="'0 0 0 3px ' + p.color + '30, 0 2px 8px ' + p.color + '40'"></div>
                <div class="rail-line"></div>
              </div>
              <div class="milestone-card">
                <div class="milestone-header">
                  <div class="milestone-icon" [style.background]="p.color + '20'">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [attr.stroke]="p.color" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      @for (d of icons[p.index]; track $index) { <path [attr.d]="d"></path> }
                    </svg>
                  </div>
                  <span class="milestone-year" [style.color]="p.textColor">Sutra {{ p.index }}</span>
                </div>
                <h3 class="milestone-title">{{ p.title }}</h3>
              </div>
            </li>
          }
        </ol>

        <div class="timeline-end">
          <div class="end-circle" aria-hidden="true">{{ controlCount }}</div>
          <h3 class="end-title">{{ controlCount }} controls, each traceable to FREE-AI</h3>
          <p class="end-desc">What responsible delivery looks like across the lifecycle.</p>
        </div>
      </div>
    </section>
  `,
})
export class PrinciplesTimeline {
  protected readonly principles = PRINCIPLES;
  protected readonly icons = ICONS;
  protected readonly controlCount = CONTROL_PHASES.reduce((n, p) => n + p.controls.length, 0);

  constructor() {
    const gs = inject(GsapService);
    const host = inject(ElementRef<HTMLElement>);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const root = host.nativeElement as HTMLElement;
      const revert = gs.animate(root, ({ motion, gsap, ScrollTrigger }) => {
        const rows = gsap.utils.toArray<HTMLElement>('.timeline-row', root);
        const fill = root.querySelector<HTMLElement>('.progress-rail-fill');

        if (!motion) {
          rows.forEach(r => r.classList.add('animated'));
          gsap.set(fill, { scaleY: 1 });
          return;
        }

        gsap.set(fill, { scaleY: 0, transformOrigin: 'top center' });
        gsap.to(fill, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.querySelector('.timeline-grid'), start: 'top 60%', end: 'bottom 60%', scrub: true },
        });
        ScrollTrigger.batch(rows, {
          start: 'top 80%',
          once: true,
          onEnter: batch => batch.forEach(r => r.classList.add('animated')),
        });
        return () => rows.forEach(r => r.classList.remove('animated'));
      });
      destroyRef.onDestroy(revert);
    });
  }
}
