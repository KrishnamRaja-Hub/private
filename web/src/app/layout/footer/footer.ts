import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { SiteUrlPipe } from '../../shared/site-url.pipe';
import { FOOTER_MENU } from '../menu.data';

@Component({
  selector: 'app-footer',
  imports: [SiteUrlPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly groups = FOOTER_MENU;
  protected readonly year = new Date().getFullYear();
  protected readonly showTop = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    const s = window.scrollY > 400;
    if (s !== this.showTop()) this.showTop.set(s);
  }

  protected toTop(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
}
