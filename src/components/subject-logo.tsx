import type { CSSProperties } from "react";

export type SubjectKey =
  | "lectura"
  | "matematicas"
  | "sociales"
  | "ciencias"
  | "ingles"
  | "rutina";

type SubjectLogoProps = {
  subject: SubjectKey;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

const subjectMeta: Record<
  SubjectKey,
  { label: string; short: string; accent: string; bg: string }
> = {
  lectura: {
    label: "Lectura crítica",
    short: "LC",
    accent: "#ff4d5d",
    bg: "rgba(255, 77, 93, 0.12)",
  },
  matematicas: {
    label: "Matemáticas",
    short: "MT",
    accent: "#25d366",
    bg: "rgba(37, 211, 102, 0.12)",
  },
  sociales: {
    label: "Sociales",
    short: "SC",
    accent: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.13)",
  },
  ciencias: {
    label: "Ciencias naturales",
    short: "CN",
    accent: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.13)",
  },
  ingles: {
    label: "Inglés",
    short: "IN",
    accent: "#a78bfa",
    bg: "rgba(167, 139, 250, 0.13)",
  },
  rutina: {
    label: "Rutina de estudio",
    short: "RT",
    accent: "#f8fafc",
    bg: "rgba(248, 250, 252, 0.1)",
  },
};

export function getSubjectMeta(subject: SubjectKey) {
  return subjectMeta[subject];
}

export function SubjectLogo({
  subject,
  size = "md",
  showLabel = false,
  className = "",
}: SubjectLogoProps) {
  const meta = subjectMeta[subject];

  return (
    <span
      className={`subject-logo subject-logo-${size} ${className}`}
      style={
        {
          "--subject-accent": meta.accent,
          "--subject-bg": meta.bg,
        } as CSSProperties
      }
      aria-label={meta.label}
    >
      <span className="subject-logo-mark">
        <SubjectGlyph subject={subject} />
      </span>
      {showLabel ? (
        <span className="subject-logo-text">
          <span>{meta.short}</span>
          <strong>{meta.label}</strong>
        </span>
      ) : null}
    </span>
  );
}

function SubjectGlyph({ subject }: { subject: SubjectKey }) {
  if (subject === "lectura") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M13 14h11c4 0 7 3 7 7v13H20c-4 0-7-3-7-7V14Z" />
        <path d="M35 14h-4c-4 0-7 3-7 7v13h4c4 0 7-3 7-7V14Z" />
        <path d="M18 20h7M18 25h6M29 20h3M29 25h3" />
      </svg>
    );
  }

  if (subject === "matematicas") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M14 32 24 12l10 20" />
        <path d="M18 25h12" />
        <path d="M12 36h24" />
        <path d="M34 13v7M30.5 16.5h7" />
      </svg>
    );
  }

  if (subject === "sociales") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 12a12 12 0 1 0 0 24 12 12 0 0 0 0-24Z" />
        <path d="M12 24h24M24 12c4 4 6 8 6 12s-2 8-6 12M24 12c-4 4-6 8-6 12s2 8 6 12" />
        <path d="M17 17c3 2 11 2 14 0M17 31c3-2 11-2 14 0" />
      </svg>
    );
  }

  if (subject === "ciencias") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M20 12h8M24 12v11l9 14H15l9-14V12Z" />
        <path d="M19 30h10" />
        <path d="M18 35c4-3 8 3 12 0" />
      </svg>
    );
  }

  if (subject === "ingles") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M14 15h20v14H23l-7 5v-5h-2V15Z" />
        <path d="M19 22h10M19 26h6" />
        <path d="M31 32h3v3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M15 16h18v20H15z" />
      <path d="M20 12v7M28 12v7M19 25h10M19 30h7" />
      <path d="m31 29 3 3 5-7" />
    </svg>
  );
}
