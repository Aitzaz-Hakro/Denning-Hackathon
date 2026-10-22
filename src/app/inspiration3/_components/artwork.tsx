import type { CSSProperties } from "react";

type ArtProps = {
  idPrefix?: string;
  className?: string;
  style?: CSSProperties;
};

export function MascotSphere({
  idPrefix = "sphere",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${idPrefix}-body`} cx="34%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#dfe4fb" />
          <stop offset="34%" stopColor="#9aa7e8" />
          <stop offset="68%" stopColor="#6264cb" />
          <stop offset="100%" stopColor="#2c1784" />
        </radialGradient>
        <radialGradient id={`${idPrefix}-glow`} cx="30%" cy="18%" r="48%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${idPrefix}-noise`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.86"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <clipPath id={`${idPrefix}-clip`}>
          <circle cx="200" cy="200" r="188" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="188" fill={`url(#${idPrefix}-body)`} />
      <g clipPath={`url(#${idPrefix}-clip)`}>
        <rect
          width="400"
          height="400"
          filter={`url(#${idPrefix}-noise)`}
          opacity="0.2"
          style={{ mixBlendMode: "soft-light" }}
        />
        <circle cx="126" cy="108" r="210" fill={`url(#${idPrefix}-glow)`} />
        <g fill="#ffffff" opacity="0.55">
          <circle cx="292" cy="104" r="2.6" />
          <circle cx="334" cy="176" r="1.8" />
          <circle cx="284" cy="306" r="2.2" />
          <circle cx="74" cy="308" r="1.6" />
          <circle cx="196" cy="336" r="2.4" />
        </g>
      </g>
      <g fill="#17121f">
        <ellipse cx="142" cy="184" rx="9" ry="14" transform="rotate(-8 142 184)" />
        <ellipse cx="238" cy="181" rx="9" ry="14" transform="rotate(8 238 181)" />
      </g>
      <path
        d="M116 240C146 284 252 287 288 232"
        fill="none"
        stroke="#17121f"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeartSculpture({
  idPrefix = "heart",
  className,
  style,
}: ArtProps) {
  const heart =
    "M180 286C74 218 34 158 34 106 34 62 67 34 106 34c28 0 56 18 74 48 18-30 46-48 74-48 39 0 72 28 72 72 0 52-40 112-146 180Z";
  return (
    <svg
      viewBox="0 0 360 340"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-back`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffb02e" />
          <stop offset="55%" stopColor="#ff762e" />
          <stop offset="100%" stopColor="#e53318" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-mid`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff9ade" />
          <stop offset="100%" stopColor="#f044a6" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-front`} x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#ffd1ef" />
          <stop offset="42%" stopColor="#ff8ed5" />
          <stop offset="100%" stopColor="#ff3fa8" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-inner`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a1a86" />
          <stop offset="100%" stopColor="#1c083f" />
        </linearGradient>
      </defs>
      <path d={heart} transform="translate(18 16)" fill={`url(#${idPrefix}-back)`} />
      <path d={heart} transform="translate(9 8)" fill={`url(#${idPrefix}-mid)`} />
      <path d={heart} fill={`url(#${idPrefix}-front)`} />
      <path
        d="M180 250c-46-32-74-64-74-98 0-24 16-38 36-38 19 0 31 10 38 26 7-16 19-26 38-26 20 0 36 14 36 38 0 34-28 66-74 98Z"
        fill={`url(#${idPrefix}-inner)`}
      />
      <path
        d="M110 78c8-20 26-30 46-30"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PencilArt({
  idPrefix = "pencil",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 240 620"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-body`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b89a00" />
          <stop offset="16%" stopColor="#efe11c" />
          <stop offset="42%" stopColor="#fff47a" />
          <stop offset="72%" stopColor="#f5e923" />
          <stop offset="100%" stopColor="#a98b00" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-wood`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9b18c" />
          <stop offset="50%" stopColor="#f7dfc2" />
          <stop offset="100%" stopColor="#c99a72" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9c9b8" />
          <stop offset="45%" stopColor="#f7f1e9" />
          <stop offset="100%" stopColor="#b9a693" />
        </linearGradient>
      </defs>
      <g transform="rotate(24 120 310)">
        <rect x="70" y="54" width="100" height="420" rx="12" fill={`url(#${idPrefix}-body)`} />
        <g opacity="0.28" stroke="#6e5600" strokeWidth="2" strokeLinecap="round">
          <path d="M86 90v350" />
          <path d="M104 90v350" />
          <path d="M136 90v350" />
          <path d="M154 90v350" />
        </g>
        <rect x="70" y="54" width="12" height="420" fill="#fff7a0" opacity="0.45" />
        <path d="M70 474h100l-38 88a15 15 0 0 1-24 0Z" fill={`url(#${idPrefix}-wood)`} />
        <path d="M106 542h28l-10 20a6 6 0 0 1-10 0Z" fill="#241b17" />
        <rect x="64" y="20" width="112" height="46" rx="13" fill={`url(#${idPrefix}-cap)`} />
        <rect x="64" y="48" width="112" height="14" fill="#b9a693" opacity="0.65" />
        <ellipse cx="120" cy="20" rx="56" ry="13" fill="#f7f1e9" />
      </g>
    </svg>
  );
}

export function ChatTablet({
  idPrefix = "tablet",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 460 600"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-frame`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9878ff" />
          <stop offset="42%" stopColor="#5626d8" />
          <stop offset="100%" stopColor="#2b0a83" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-screen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b1668" />
          <stop offset="100%" stopColor="#140630" />
        </linearGradient>
      </defs>
      <g transform="rotate(8 230 300)">
        <rect x="38" y="24" width="384" height="552" rx="42" fill={`url(#${idPrefix}-frame)`} />
        <rect x="54" y="44" width="352" height="512" rx="30" fill={`url(#${idPrefix}-screen)`} />
        <rect x="62" y="52" width="336" height="496" rx="24" fill="#1c0d45" opacity="0.6" />
        <g>
          <rect x="92" y="96" width="132" height="20" rx="10" fill="#f5e923" opacity="0.9" />
          <rect x="92" y="132" width="80" height="8" rx="4" fill="#8b74d8" opacity="0.6" />
          <g>
            <rect x="92" y="190" width="212" height="64" rx="18" fill="#4a2b9e" />
            <rect x="112" y="212" width="132" height="8" rx="4" fill="#c9bbf7" opacity="0.8" />
            <rect x="112" y="230" width="94" height="8" rx="4" fill="#c9bbf7" opacity="0.45" />
          </g>
          <g>
            <rect x="154" y="280" width="190" height="58" rx="18" fill="#6d4ad0" />
            <rect x="174" y="300" width="118" height="8" rx="4" fill="#ffffff" opacity="0.8" />
            <rect x="174" y="318" width="74" height="8" rx="4" fill="#ffffff" opacity="0.4" />
          </g>
          <g>
            <rect x="92" y="366" width="172" height="58" rx="18" fill="#3d2089" />
            <rect x="112" y="386" width="102" height="8" rx="4" fill="#c9bbf7" opacity="0.7" />
            <rect x="112" y="404" width="64" height="8" rx="4" fill="#c9bbf7" opacity="0.4" />
          </g>
          <circle cx="330" cy="252" r="6" fill="#ff762e" />
          <circle cx="330" cy="368" r="6" fill="#f5e923" />
          <rect x="92" y="456" width="268" height="46" rx="23" fill="#2b1668" stroke="#7c5bdb" strokeOpacity="0.7" />
          <rect x="112" y="474" width="112" height="8" rx="4" fill="#7c6ba9" opacity="0.6" />
          <circle cx="338" cy="479" r="12" fill="#f044a6" />
        </g>
        <rect x="26" y="132" width="10" height="48" rx="5" fill="#b7a3ff" opacity="0.7" />
        <rect x="26" y="196" width="10" height="74" rx="5" fill="#b7a3ff" opacity="0.45" />
      </g>
    </svg>
  );
}

export function CubeArt({
  idPrefix = "cube",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-top`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fffdf0" />
          <stop offset="100%" stopColor="#fff59a" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-left`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5064d8" />
          <stop offset="100%" stopColor="#3a3eb2" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-right`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a78e8" />
          <stop offset="100%" stopColor="#4b51c4" />
        </linearGradient>
      </defs>
      <path d="M90 16 164 58 90 100 16 58Z" fill={`url(#${idPrefix}-top)`} />
      <path d="M16 58v64l74 42v-64Z" fill={`url(#${idPrefix}-left)`} />
      <path d="M164 58v64l-74 42v-64Z" fill={`url(#${idPrefix}-right)`} />
    </svg>
  );
}

export function CreditCardArt({
  idPrefix = "card",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 280 200"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7638f0" />
          <stop offset="55%" stopColor="#4b10d8" />
          <stop offset="100%" stopColor="#2b0090" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-stripe`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff8ed5" />
          <stop offset="100%" stopColor="#f5e923" />
        </linearGradient>
      </defs>
      <g transform="rotate(-13 140 100)">
        <rect x="22" y="34" width="236" height="150" rx="20" fill={`url(#${idPrefix}-body)`} />
        <rect x="22" y="34" width="236" height="150" rx="20" fill="none" stroke="#ffffff" strokeOpacity="0.18" />
        <rect x="44" y="62" width="66" height="44" rx="9" fill={`url(#${idPrefix}-stripe)`} />
        <rect x="44" y="150" width="112" height="9" rx="4.5" fill="#c9b8ff" opacity="0.7" />
        <circle cx="212" cy="84" r="16" fill="#f5e923" />
        <circle cx="212" cy="84" r="16" fill="none" stroke="#ffffff" strokeOpacity="0.35" />
        <path d="M196 124h32M196 136h24" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function RibbonSculpture({
  idPrefix = "ribbon",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 560 620"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b9a6ff" />
          <stop offset="40%" stopColor="#6d3cf0" />
          <stop offset="100%" stopColor="#3400a8" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9ade" />
          <stop offset="55%" stopColor="#f044a6" />
          <stop offset="100%" stopColor="#a40069" />
        </linearGradient>
        <radialGradient id={`${idPrefix}-orb`} cx="32%" cy="26%" r="78%">
          <stop offset="0%" stopColor="#d8d0ff" />
          <stop offset="48%" stopColor="#8162ee" />
          <stop offset="100%" stopColor="#2c0a86" />
        </radialGradient>
        <linearGradient id={`${idPrefix}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93a5ff" />
          <stop offset="100%" stopColor="#3a4bc0" />
        </linearGradient>
      </defs>
      <ellipse cx="280" cy="556" rx="170" ry="26" fill="#16063f" opacity="0.22" />
      <path
        d="M120 460c-78-92-38-238 96-268 126-28 244 54 216 172-26 110-172 166-238 76-54-74 4-158 82-154"
        fill="none"
        stroke={`url(#${idPrefix}-a)`}
        strokeWidth="58"
        strokeLinecap="round"
      />
      <path
        d="M120 460c-78-92-38-238 96-268 126-28 244 54 216 172-26 110-172 166-238 76-54-74 4-158 82-154"
        fill="none"
        stroke="#c9bcff"
        strokeOpacity="0.34"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M348 388c62-48 70-132 12-178-56-44-140-24-162 40-20 58 28 112 86 102 52-9 78-64 52-104"
        fill="none"
        stroke={`url(#${idPrefix}-b)`}
        strokeWidth="42"
        strokeLinecap="round"
      />
      <path
        d="M348 388c62-48 70-132 12-178-56-44-140-24-162 40-20 58 28 112 86 102 52-9 78-64 52-104"
        fill="none"
        stroke="#ffc7ec"
        strokeOpacity="0.32"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle cx="386" cy="174" r="72" fill={`url(#${idPrefix}-orb)`} />
      <g transform="rotate(-12 150 180)">
        <rect x="84" y="126" width="120" height="78" rx="16" fill={`url(#${idPrefix}-blue)`} />
        <rect x="100" y="142" width="54" height="46" rx="9" fill="#fff7b0" opacity="0.92" />
        <circle cx="178" cy="176" r="9" fill="#ff762e" />
      </g>
      <path d="M264 96l14 34 34 14-34 14-14 34-14-34-34-14 34-14Z" fill="#f5e923" />
      <path d="M474 342l10 24 24 10-24 10-10 24-10-24-24-10 24-10Z" fill="#ff762e" />
      <circle cx="112" cy="352" r="18" fill="#f5e923" />
      <circle cx="112" cy="352" r="18" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
    </svg>
  );
}

export function OrbArt({
  idPrefix = "orb",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${idPrefix}-body`} cx="32%" cy="26%" r="76%">
          <stop offset="0%" stopColor="#fff2a8" />
          <stop offset="34%" stopColor="#ffb36b" />
          <stop offset="68%" stopColor="#f044a6" />
          <stop offset="100%" stopColor="#6d1d9e" />
        </radialGradient>
        <linearGradient id={`${idPrefix}-ring`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <ellipse
        cx="120"
        cy="120"
        rx="110"
        ry="42"
        fill="none"
        stroke={`url(#${idPrefix}-ring)`}
        strokeWidth="4"
        transform="rotate(-24 120 120)"
      />
      <circle cx="120" cy="120" r="78" fill={`url(#${idPrefix}-body)`} />
      <ellipse cx="92" cy="88" rx="22" ry="13" fill="#ffffff" opacity="0.35" transform="rotate(-28 92 88)" />
    </svg>
  );
}

export function SparkArt({
  idPrefix = "spark",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-fill`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff8b0" />
          <stop offset="45%" stopColor="#f5e923" />
          <stop offset="100%" stopColor="#ff762e" />
        </linearGradient>
      </defs>
      <path
        d="M100 8c8 56 36 84 92 92-56 8-84 36-92 92-8-56-36-84-92-92 56-8 84-36 92-92Z"
        fill={`url(#${idPrefix}-fill)`}
      />
      <path d="M100 52c4 30 18 44 48 48-30 4-44 18-48 48-4-30-18-44-48-48 30-4 44-18 48-48Z" fill="#ffffff" opacity="0.35" />
    </svg>
  );
}

export function PaperPlaneArt({
  idPrefix = "plane",
  className,
  style,
}: ArtProps) {
  return (
    <svg
      viewBox="0 0 260 220"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${idPrefix}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b9a6ff" />
          <stop offset="100%" stopColor="#4b10d8" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-b`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6d3cf0" />
          <stop offset="100%" stopColor="#250075" />
        </linearGradient>
      </defs>
      <path d="M18 98 238 20 178 196 120 142 18 98Z" fill={`url(#${idPrefix}-a)`} />
      <path d="M120 142 238 20 92 118Z" fill={`url(#${idPrefix}-b)`} />
      <path d="M120 142v54l30-36Z" fill="#2b0a83" />
      <path d="M54 138c-16-4-30 2-34 18 16 6 30 2 34-18Z" fill="#f5e923" />
    </svg>
  );
}
