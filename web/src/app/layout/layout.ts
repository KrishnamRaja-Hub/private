import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

/**
 * Preview shell mirroring rebit.org.in's app-layout (skip link, header, main, footer).
 * When the page is merged into the site, only the route component is needed.
 */
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="layout-wrapper">
      <a class="skip-to-content" href="#main-content">Skip to main content</a>
      <app-header />
      <main id="main-content" class="main-content" tabindex="-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class Layout {}
