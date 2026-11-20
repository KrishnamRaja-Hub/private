import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
} from '@angular/core';
import { GsapService, gsap } from '../../../shared/gsap.service';

const UNLIT = '#c8d3e0'; // /our-story unlit word colour
const INK = '#0a1628';

/**
 * The /our-story "what is" statement: a sticky paragraph whose words darken as the
 * reader scrolls, with the brand phrase lighting up in the site gradient and the
 * accent rule filling underneath. The live site drives this from a scroll listener;
 * here GSAP ScrollTrigger scrubs the same values.
 */
@Component({
  selector: 'app-mandate-statement',
  styleUrls: ['./story-patterns.css', './mandate-statement.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="what-is-section" aria-labelledby="mandate-title">
      <div class="what-is-sticky">
        <div class="what-is-container">
          <h2 id="mandate-title" class="visually-hidden">Mandate</h2>
          <div class="what-is-paragraphs">
            <p class="what-is-para">
              @for (w of before(); track $index) {<span class="word">{{ w }}</span>}
              @if (phrase()) {<span class="brand-phrase">{{ phrase() }}</span>}
              @for (w of after(); track $index) {<span class="word">{{ w }}</span>}
            </p>
          </div>
          <div class="accent-rule"></div>
        </div>
      </div>
    </section>
  `,
})
export class MandateStatement {
  readonly text = input.required<string>();
  readonly brandPhrase = input<string>('');

  private readonly split = computed(() => {
    const t = this.text();
    const p = this.brandPhrase();
    const at = p ? t.indexOf(p) : -1;
    if (at < 0) return { before: t.split(/\s+/), phrase: '', after: [] as string[] };
    return {
      before: t.slice(0, at).trim().split(/\s+/).filter(Boolean),
      phrase: p,
      after: t.slice(at + p.length).trim().split(/\s+/).filter(Boolean),
    };
  });
  protected readonly before = computed(() => this.split().before);
  protected readonly phrase = computed(() => this.split().phrase);
  protected readonly after = computed(() => this.split().after);

  constructor() {
    const gs = inject(GsapService);
    const host = inject(ElementRef<HTMLElement>);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const root = host.nativeElement as HTMLElement;
      const revert = gs.animate(root, ({ motion }) => {
        const words = gsap.utils.toArray<HTMLElement>('.word, .brand-phrase', root);
        const phrase = root.querySelector<HTMLElement>('.brand-phrase');
        const phraseAt = phrase ? words.indexOf(phrase) / words.length : 1;

        if (!motion) {
          gsap.set(words, { color: INK });
          phrase?.classList.add('lit');
          gsap.set('.accent-rule', { scaleX: 1 });
          return;
        }

        gsap.set(words, { color: UNLIT });
        gsap.set('.accent-rule', { scaleX: 0, transformOrigin: 'left center' });
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.querySelector('.what-is-section'),
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: self => phrase?.classList.toggle('lit', self.progress >= phraseAt * 0.9),
          },
        });
        tl.to(words, { color: INK, duration: 0.3, stagger: 0.7 / words.length }, 0)
          .to('.accent-rule', { scaleX: 1, duration: 0.3 }, 0.7);
        return () => phrase?.classList.remove('lit');
      });
      destroyRef.onDestroy(revert);
    });
  }
}
