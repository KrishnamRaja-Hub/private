export type CommitteeRole = 'CHAIR' | 'MEMBER';

export interface CommitteeMember {
  readonly id: string;
  readonly name: string;
  readonly committeeRole: CommitteeRole;
  /** Designation exactly as rebit.org.in shows it. */
  readonly title: string;
  /** Same initials convention as /committee-members (honorific + name). */
  readonly initials: string;
  readonly photo: string | null;
  readonly banner: string | null;
  readonly bio: readonly string[];
}

export interface Responsibility {
  readonly text: string;
  readonly items?: readonly string[];
}

export interface Principle {
  readonly index: number;
  readonly title: string;
  readonly color: string;
  /** Darker shade of `color` for small text (4.5:1 or better on white). */
  readonly textColor: string;
}

export interface Control {
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly reference: string;
}

export interface ControlPhase {
  readonly index: number;
  readonly title: string;
  readonly color: string;
  /** Darker shade of `color` for small text (4.5:1 or better on white). */
  readonly textColor: string;
  /** Lucide-style icon paths (24×24 viewBox, stroke icons), as the live site uses. */
  readonly iconPaths: readonly string[];
  readonly controls: readonly Control[];
}
