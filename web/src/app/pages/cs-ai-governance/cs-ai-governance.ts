import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Breadcrumb, Crumb } from '../../shared/breadcrumb/breadcrumb';
import { PageNavigation } from '../../shared/page-navigation/page-navigation';
import { COMMITTEE_MEMBERS } from './committee-members.data';
import { CONTROL_PHASES, MANDATE, PRINCIPLES } from './governance.data';
import { MandateStatement } from './sections/mandate-statement';
import { Responsibilities } from './sections/responsibilities';
import { PrinciplesTimeline } from './sections/principles-timeline';
import { ControlsPortfolio } from './sections/controls-portfolio';

const ACCENT = '#7C3AED'; // the card accent every /leadership and /executive-team card uses

@Component({
  selector: 'app-cs-ai-governance',
  imports: [Breadcrumb, PageNavigation, MandateStatement, Responsibilities, PrinciplesTimeline, ControlsPortfolio],
  templateUrl: './cs-ai-governance.html',
  styleUrl: './cs-ai-governance.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsAiGovernance {
  private readonly doc = inject(DOCUMENT);

  protected readonly crumbs: readonly Crumb[] = [
    { label: 'Who We Are', url: '/leadership' },
    { label: 'Committee Members', url: '/committee-members' },
    { label: 'CS & AI Governance Sub Committee' },
  ];
  protected readonly members = COMMITTEE_MEMBERS;
  protected readonly mandate = MANDATE;
  protected readonly accent = ACCENT;
  protected readonly kpis = [
    { value: String(COMMITTEE_MEMBERS.length), label: 'Members', icon: '/assets/images/icons/user-icon.svg', tint: 'rgba(124, 58, 237, 0.133)' },
    { value: '4', label: 'Meetings a year, plus on need', icon: '/assets/images/icons/calender-Icon.svg', tint: 'rgba(43, 196, 190, 0.133)' },
    { value: String(PRINCIPLES.length), label: 'FREE-AI Sutras', icon: '/assets/images/icons/lightbulb-Icon.svg', tint: 'rgba(200, 34, 204, 0.133)' },
    { value: String(CONTROL_PHASES.reduce((n, p) => n + p.controls.length, 0)), label: 'Traceable controls', icon: null, tint: 'rgba(5, 150, 105, 0.133)' },
  ] as const;

  /** Index of the member whose profile is open, or null. */
  protected readonly openIndex = signal<number | null>(null);
  protected readonly openMember = computed(() => {
    const i = this.openIndex();
    return i === null ? null : this.members[i];
  });
  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');
  private lastTrigger: HTMLElement | null = null;

  constructor() {
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => this.unlockScroll());
  }

  protected open(i: number, trigger: HTMLElement): void {
    this.lastTrigger = trigger;
    this.openIndex.set(i);
    this.doc.body.style.overflow = 'hidden';
    queueMicrotask(() => setTimeout(() => this.closeBtn()?.nativeElement.focus()));
  }

  protected close(): void {
    this.openIndex.set(null);
    this.unlockScroll();
    this.lastTrigger?.focus();
  }

  protected step(delta: number): void {
    const i = this.openIndex();
    if (i === null) return;
    this.openIndex.set((i + delta + this.members.length) % this.members.length);
  }

  @HostListener('document:keydown', ['$event'])
  protected onModalKey(e: KeyboardEvent): void {
    if (this.openIndex() === null) return;
    if (e.key === 'Escape') this.close();
    else if (e.key === 'ArrowRight') this.step(1);
    else if (e.key === 'ArrowLeft') this.step(-1);
  }

  private unlockScroll(): void {
    this.doc.body.style.overflow = '';
  }
}
