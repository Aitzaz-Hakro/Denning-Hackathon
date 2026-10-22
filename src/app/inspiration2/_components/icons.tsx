type IconProps = {
  className?: string;
};

export function BrandMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 25c0-8 6-15 14-15 5 0 9 3 9 7 0 5-4 8-9 8-4 0-7 3-7 6 0 2 2 4 4 4"
        stroke="currentColor"
        strokeWidth="5.2"
        strokeLinecap="round"
      />
      <path
        d="M31 15c0 8-6 15-14 15-5 0-9-3-9-7 0-5 4-8 9-8 4 0 7-3 7-6 0-2-2-4-4-4"
        stroke="currentColor"
        strokeWidth="5.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function CompsupsLogo({
  className,
  compact = false,
}: IconProps & { compact?: boolean }) {
  return (
    <span className={`cs-logo ${className ?? ""}`}>
      <BrandMark className="cs-logo-mark" />
      {!compact && <span className="cs-logo-word">Compsups</span>}
    </span>
  );
}

export function BadgeRosette({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="6.2" fill="#2f6bff" />
      <path
        d="m9.4 9 1.8 1.8 3.6-3.8"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 14.4 7 20l3-1.6 2 3.1 1.2-5.7M15.4 14.4 17 20l-3-1.6-2 3.1-1.2-5.7"
        fill="#2f6bff"
      />
    </svg>
  );
}

export function PieMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="12.4" fill="#ffffff" />
      <path d="M20 7.6v24.8M7.6 20h24.8" stroke="#f26b4e" strokeWidth="2.6" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 6.5c0-.8.9-1.3 1.6-.9l8.4 5.5c.6.4.6 1.4 0 1.8l-8.4 5.5c-.7.4-1.6-.1-1.6-.9V6.5Z" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 11a8 8 0 1 0-2.3 6.1M20 5v6h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SettingsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.4 2.4-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-3.4v-.5a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.4-2.4.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3v-3.4h.5a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.4-2.4.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h3.4v.5a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.4 2.4-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.5v3.4h-.5a1.7 1.7 0 0 0-1.5 1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.6 20c.4-3.2 2.5-5.2 5.4-5.2s5 2 5.4 5.2M16 5.4a3.2 3.2 0 0 1 0 6.2M17.2 15c1.8.5 3 2.3 3.3 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WalletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="14.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 7.5A2.5 2.5 0 0 1 5.5 5h3l2 2h8A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SolutionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#2f6bff" />
      <circle cx="12" cy="12" r="3.3" stroke="#ffffff" strokeWidth="1.8" />
      <path
        d="M6.5 23.5c.4-3.5 2.5-5.6 5.5-5.6s5.1 2.1 5.5 5.6M21 10.5a3.1 3.1 0 0 1 0 6M22 18c1.9.5 3.1 2.3 3.4 5.2"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QuoteMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.6 6c-4.7 2.1-8 6.4-8 11.6 0 5 2.8 8.4 6.7 8.4 3.2 0 5.6-2.3 5.6-5.4 0-3-2.2-5.2-5-5.2-.6 0-1.2.1-1.6.3.7-3.1 3-5.7 5.8-7.1L13.6 6Zm14 0c-4.7 2.1-8 6.4-8 11.6 0 5 2.8 8.4 6.7 8.4 3.2 0 5.6-2.3 5.6-5.4 0-3-2.2-5.2-5-5.2-.6 0-1.2.1-1.6.3.7-3.1 3-5.7 5.8-7.1L27.6 6Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.4 9.2H3.5V21h2.9V9.2ZM5 7.9a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM21 14.3c0-3.5-1.8-5.3-4.3-5.3-1.6 0-2.6.9-3 1.6V9.2H10v11.8h2.9v-6.3c0-1.6.8-2.5 2-2.5s1.9.8 1.9 2.5V21H21v-6.7Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.7 3h2.9l-6.4 7.3L21.7 21h-5.9l-4.6-6-5.3 6H3l6.8-7.8L3.3 3h6l4.2 5.5L17.7 3Zm-1 16.2h1.6L8.2 4.7H6.5l10.2 14.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}
