import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RESPONSIBILITIES } from '../governance.data';

/** /services/ai-enterprise "overview" pattern: copy on the left, check-point cards on the right. */
@Component({
  selector: 'app-responsibilities',
  styleUrls: ['./ai-patterns.css', './responsibilities.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="overview-section" id="scope" aria-labelledby="scope-title">
      <div class="content-container">
        <div class="overview-grid">
          <div class="overview-left">
            <span class="section-badge section-badge-violet"><span class="badge-dot"></span><span>SCOPE</span></span>
            <h2 class="section-title" id="scope-title">Scope of Responsibilities</h2>
            <p class="overview-text">
              The sub committee is the governing authority for ReBIT's AI Adoption Policy. It approves policy updates,
              reviews AI incidents and usage, and grants exceptions where a project needs one.
            </p>
          </div>
          <ol class="overview-right">
            @for (r of items; track $index) {
              <li class="why-point">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="why-point-icon" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <div>
                  <p class="why-point-text">{{ r.text }}</p>
                  @if (r.items) {
                    <ol class="why-sublist">
                      @for (s of r.items; track $index) { <li>{{ s }}</li> }
                    </ol>
                  }
                </div>
              </li>
            }
          </ol>
        </div>
      </div>
    </section>
  `,
})
export class Responsibilities {
  protected readonly items = RESPONSIBILITIES;
}
