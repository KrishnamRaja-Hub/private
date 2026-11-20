import { Routes } from '@angular/router';
import { CsAiGovernance } from './pages/cs-ai-governance/cs-ai-governance';

export const routes: Routes = [
  {
    path: 'committee-members/cs-ai-governance',
    title: 'CS & AI Governance Sub Committee | ReBIT',
    component: CsAiGovernance, // eager: a lazy chunk lets the footer paint at the top, then jump (CLS 1.0)
  },
  { path: '**', redirectTo: 'committee-members/cs-ai-governance' },
];
