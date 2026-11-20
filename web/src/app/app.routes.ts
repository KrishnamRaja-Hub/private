import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'committee-members/cs-ai-governance',
    title: 'CS & AI Governance Sub Committee | ReBIT',
    loadComponent: () =>
      import('./pages/cs-ai-governance/cs-ai-governance').then(m => m.CsAiGovernance),
  },
  { path: '**', redirectTo: 'committee-members/cs-ai-governance' },
];
