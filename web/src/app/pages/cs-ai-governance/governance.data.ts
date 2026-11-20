/**
 * Committee content, transcribed from the CS & AI Governance Sub Committee agenda deck
 * (slides 5, 6, 21 and 23). Wording is kept as in the deck; only capitalisation and
 * punctuation are normalised to the site's house style.
 */
import { ControlPhase, Principle, Responsibility } from './committee.model';

export const MANDATE =
  'All AI-related decisions are routed through the CS & AI Governance Sub Committee. ' +
  'The committee provides strategic direction, approves policy, and owns AI risk across the organisation.';

export const MEETING_FACTS = {
  cadence: 'Quarterly / on-need basis',
  quorum: 'Chair + majority of members',
} as const;

export const RESPONSIBILITIES: readonly Responsibility[] = [
  {
    text: 'Review and approve AI adoption policy updates periodically, covering:',
    items: [
      'AI as an enabler: operational governance setup',
      'AI cost budgeting and monitoring strategy',
      'Governance strategy for AI and AI agents in ReBIT projects',
      'Governance strategy for AI and AI agents in RBI and its subsidiaries’ projects',
      'Acceptable use of AI',
      'Cyber security controls for AI as an enabler in ReBIT',
      'Cyber security controls for AI use case development in ReBIT and RBI projects',
      'Acceptable use of AI tools and their governance, including approval of new models and tools',
    ],
  },
  { text: 'Review incidents related to the AI setup' },
  { text: 'Review AI usage metrics in ReBIT and recommend improvements' },
  { text: 'Grant time-bound exceptions on a need basis' },
];

/** RBI FREE-AI framework: the seven Sutras (deck slide 21). Colours follow the site's accent set. */
export const PRINCIPLES: readonly Principle[] = [
  { index: 1, title: 'Trust is the Foundation', description: 'Trust is non-negotiable and must never be put at risk.', color: '#7C3AED', textColor: '#6D28D9' },
  { index: 2, title: 'People First', description: 'AI supports people; human judgement has the final say.', color: '#0891B2', textColor: '#0E7490' },
  { index: 3, title: 'Innovation over Restraint', description: 'Back responsible innovation instead of holding AI back.', color: '#059669', textColor: '#047857' },
  { index: 4, title: 'Fairness and Equity', description: 'AI outcomes must be fair and free of discrimination.', color: '#A840D8', textColor: '#9333EA' },
  { index: 5, title: 'Accountability', description: 'The entity deploying AI stays accountable for it.', color: '#5B7EE8', textColor: '#4058C4' },
  { index: 6, title: 'Understandable by Design', description: 'AI decisions must be explainable to those they affect.', color: '#2BC4BE', textColor: '#0F766E' },
  { index: 7, title: 'Safety, Resilience and Sustainability', description: 'AI must be secure, resilient and energy-efficient.', color: '#E85C0D', textColor: '#C2410C' },
];

/** Twelve controls traceable to FREE-AI (deck slide 23). */
export const CONTROL_PHASES: readonly ControlPhase[] = [
  {
    index: 1,
    title: 'Data & Design',
    color: '#7C3AED', textColor: '#6D28D9',
    iconPaths: [
      'M3 5a9 3 0 1 0 18 0a9 3 0 1 0 -18 0',
      'M3 5V19A9 3 0 0 0 21 19V5',
      'M3 12A9 3 0 0 0 21 12',
    ],
    controls: [
      { code: 'C1', title: 'Bias testing', description: 'Bias metrics and pass thresholds defined per use case.', reference: 'Sutra 4' },
      { code: 'C2', title: 'PII protection', description: 'Mask personal data in source documents and user input.', reference: 'Rec 15 · Ch. 12 PS1' },
      { code: 'C3', title: 'On-prem hosting', description: 'Models run inside our perimeter, so data never leaves.', reference: 'Rec 19 · Ch. 12 Privacy & Security' },
    ],
  },
  {
    index: 2,
    title: 'Build & Evaluate',
    color: '#2BC4BE', textColor: '#0F766E',
    iconPaths: ['M12 20V10', 'M18 20V4', 'M6 20v-4'],
    controls: [
      { code: 'C4', title: 'Harmful-content filter', description: 'Screen user input for malicious or unethical content.', reference: 'Sutra 2 · Ch. 12 E1' },
      { code: 'C5', title: 'Human evaluation', description: 'Human-rated outputs against a documented acceptable error rate.', reference: 'Rec 16 · Ch. 12 SR1–SR2' },
      { code: 'C6', title: 'Hallucination scoring', description: 'Quantify how far GenAI answers stray from the source.', reference: 'FREE-AI §2.2.3 · Ch. 12 Controllability' },
    ],
  },
  {
    index: 3,
    title: 'Deploy & Operate',
    color: '#059669', textColor: '#047857',
    iconPaths: [
      'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2',
    ],
    controls: [
      { code: 'C7', title: 'Versioning & logging', description: 'Version models, prompts and embeddings; log health metrics.', reference: 'Rec 16 · Ch. 12 C1.2–C1.3' },
      { code: 'C8', title: 'Continuous monitoring', description: 'Track answer quality release by release, with alerts.', reference: 'Rec 16' },
      { code: 'C9', title: 'Fallback & kill switch', description: 'A tested way to stop the model and fall back safely.', reference: 'Rec 21 · Controllability' },
    ],
  },
  {
    index: 4,
    title: 'Assure & Answer',
    color: '#A840D8', textColor: '#9333EA',
    iconPaths: [
      'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
      'm9 12 2 2 4-4',
    ],
    controls: [
      { code: 'C10', title: 'Red teaming', description: 'Structured attack testing, scaled to the risk tier.', reference: 'Rec 20' },
      { code: 'C11', title: 'Feedback & recourse', description: 'User ratings, escalation to a human, grievance redressal.', reference: 'Rec 18' },
      { code: 'C12', title: 'AI inventory & audit', description: 'A register of every model, with risk-based internal audits.', reference: 'Rec 23–24 · Ch. 12 A3' },
    ],
  },
];
