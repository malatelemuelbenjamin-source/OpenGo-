type LogoProps = {
  size?: number;
  tone?: "light" | "dark";
};

/**
 * OpenNow mark: an open doorway (access) with a signal dot (availability).
 */
export function Logo({ size = 40, tone = "light" }: LogoProps) {
  const isLight = tone === "light";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="OpenNow Government logo"
      className="logo-mark"
    >
      <rect width="48" height="48" rx="13" fill={isLight ? "#ffffff" : "#0a1c33"} />
      <path
        d="M15 36V16.5A4.5 4.5 0 0 1 19.5 12h9A4.5 4.5 0 0 1 33 16.5V36"
        fill="none"
        stroke={isLight ? "#1449c4" : "#ffffff"}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M23 19.5v6.2"
        stroke={isLight ? "#1449c4" : "#ffffff"}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="34.5" cy="14" r="4.5" fill="#12a877" stroke={isLight ? "#ffffff" : "#0a1c33"} strokeWidth="2" />
    </svg>
  );
}
