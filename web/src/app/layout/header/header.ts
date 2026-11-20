import { ChangeDetectionStrategy, Component, HostListener, computed, signal } from '@angular/core';
import { SiteUrlPipe } from '../../shared/site-url.pipe';
import { PRIMARY_MENU } from '../menu.data';

@Component({
  selector: 'app-header',
  imports: [SiteUrlPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly menu = PRIMARY_MENU;
  protected readonly scrolled = signal(false);
  protected readonly open = signal<number | null>(null);
  protected readonly activeGroup = signal(0);
  protected readonly mobileOpen = signal(false);
  protected readonly mobileExpanded = signal<number | null>(null);
  protected readonly openSection = computed(() => {
    const i = this.open();
    return i === null ? null : this.menu[i];
  });

  @HostListener('window:scroll')
  protected onScroll(): void {
    const s = window.scrollY > 20;
    if (s !== this.scrolled()) this.scrolled.set(s);
  }

  @HostListener('document:keydown.escape')
  protected close(): void {
    this.open.set(null);
  }

  protected show(i: number): void {
    if (this.open() !== i) this.activeGroup.set(0);
    this.open.set(i);
  }

  protected toggle(i: number): void {
    this.open() === i ? this.close() : this.show(i);
  }

  protected toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  protected toggleMobileSection(i: number): void {
    this.mobileExpanded.update(v => (v === i ? null : i));
  }

  protected panelId(title: string): string {
    return 'dropdown-' + title;
  }
}
