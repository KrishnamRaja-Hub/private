import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTROL_PHASES } from '../governance.data';

/** /services/ai-enterprise "AI Service Portfolio" pattern: one card per lifecycle phase. */
@Component({
  selector: 'app-controls-portfolio',
  styleUrls: ['./ai-patterns.css', './controls-portfolio.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="services-section" id="controls" aria-labelledby="controls-title">
      <div class="content-container">
        <div class="services-header">
          <span class="section-badge section-badge-violet"><span class="badge-dot"></span><span>CONTROLS</span></span>
          <h2 class="section-title" id="controls-title">{{ total }} Controls Traceable to FREE-AI</h2>
          <p class="services-lead">What responsible delivery looks like across the lifecycle, from data and design to assurance.</p>
        </div>
        <div class="services-grid">
          @for (phase of phases; track phase.index) {
            <div class="service-group-card">
              <div class="service-group-header" [style.background-color]="rgba(phase.color, 0.024)">
                <div class="service-group-icon" [style.background-color]="rgba(phase.color, 0.082)" [style.border-color]="rgba(phase.color, 0.19)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    [attr.stroke]="phase.color" aria-hidden="true">
                    @for (d of phase.iconPaths; track $index) { <path [attr.d]="d"></path> }
                  </svg>
                </div>
                <div class="service-group-title-wrap">
                  <h3 class="service-group-title">{{ phase.title }}</h3>
                  <span class="service-group-count" [style.background-color]="rgba(phase.color, 0.082)" [style.color]="phase.textColor">
                    {{ phase.controls[0].code }}–{{ phase.controls[phase.controls.length - 1].code }}
                  </span>
                </div>
              </div>
              @for (c of phase.controls; track c.code) {
                <div class="service-item">
                  <div class="service-item-icon" [style.background-color]="rgba(phase.color, 0.07)" [style.border-color]="rgba(phase.color, 0.145)">
                    <span class="control-code" [style.color]="phase.textColor">{{ c.code }}</span>
                  </div>
                  <div class="service-item-content">
                    <p class="service-item-title">{{ c.title }}</p>
                    <p class="service-item-desc">{{ c.description }}</p>
                    <p class="service-item-ref">{{ c.reference }}</p>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ControlsPortfolio {
  protected readonly phases = CONTROL_PHASES;
  protected readonly total = CONTROL_PHASES.reduce((n, p) => n + p.controls.length, 0);

  protected rgba(hex: string, a: number): string {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
  }
}
