import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteUrlPipe } from '../site-url.pipe';

export interface PageLink { readonly title: string; readonly url: string; }

@Component({
  selector: 'app-page-navigation',
  imports: [SiteUrlPipe],
  styleUrl: './page-navigation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav aria-label="Page navigation" class="page-nav-wrapper">
      <div class="page-nav-border">
        <div class="page-nav-grid" [class.single]="!previous() || !next()">
          @if (previous(); as prev) {
            <a class="nav-card" [attr.aria-label]="'Previous: ' + prev.title" [href]="prev.url | site">
              <div aria-hidden="true" class="nav-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
              </div>
              <div class="nav-text"><span class="nav-label">Previous</span><span class="nav-title">{{ prev.title }}</span></div>
            </a>
          }
          @if (next(); as nxt) {
            <a class="nav-card nav-card-next" [attr.aria-label]="'Next: ' + nxt.title" [href]="nxt.url | site">
              <div class="nav-text text-right"><span class="nav-label">Next</span><span class="nav-title">{{ nxt.title }}</span></div>
              <div aria-hidden="true" class="nav-icon-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </a>
          }
        </div>
      </div>
    </nav>
  `,
})
export class PageNavigation {
  readonly previous = input<PageLink | null>(null);
  readonly next = input<PageLink | null>(null);
}
