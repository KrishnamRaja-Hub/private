import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteUrlPipe } from '../site-url.pipe';

export interface Crumb { readonly label: string; readonly url?: string; }

@Component({
  selector: 'app-breadcrumb',
  imports: [SiteUrlPipe],
  styleUrl: './breadcrumb.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav aria-label="Breadcrumb" class="breadcrumb-nav">
      <ol role="list" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; list-style: none; margin: 0; padding: 0;">
        <li>
          <a class="breadcrumb-link" [href]="'/' | site">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Home</span>
          </a>
        </li>
        @for (crumb of items(); track crumb.label; let last = $last) {
          <li style="display: flex; align-items: center; gap: 6px;">
            <span aria-hidden="true" class="breadcrumb-separator">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"></path></svg>
            </span>
            @if (crumb.url && !last) {
              <a class="breadcrumb-link" [href]="crumb.url | site">{{ crumb.label }}</a>
            } @else {
              <span class="breadcrumb-current" [attr.aria-current]="last ? 'page' : null">{{ crumb.label }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
})
export class Breadcrumb {
  readonly items = input.required<readonly Crumb[]>();
}
