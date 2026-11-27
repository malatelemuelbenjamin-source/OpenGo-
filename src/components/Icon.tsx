import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "clock"
  | "userCheck"
  | "return"
  | "clipboard"
  | "building"
  | "pin"
  | "wallet"
  | "route"
  | "bell"
  | "megaphone"
  | "shield"
  | "phone"
  | "chevronDown"
  | "arrowRight"
  | "arrowUpRight"
  | "menu"
  | "close"
  | "check"
  | "calendar"
  | "alert"
  | "users"
  | "sparkle"
  | "mail"
  | "landmark"
  | "globe"
  | "search"
  | "file";

const paths: Record<IconName, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  userCheck: (
    <>
      <path d="M15.5 21v-1.8a4 4 0 0 0-4-4H6.5a4 4 0 0 0-4 4V21" />
      <circle cx="9" cy="7" r="3.6" />
      <path d="m16.5 11.5 2 2 4-4" />
    </>
  ),
  return: (
    <>
      <path d="M3.5 12a8.5 8.5 0 1 0 3-6.5" />
      <path d="M3 4v5h5" />
      <path d="M12 8v4l2.5 1.5" />
    </>
  ),
  clipboard: (
    <>
      <path d="M15 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="9" y="2" width="6" height="4" rx="1.5" />
      <path d="M9 12h6" />
      <path d="M9 16.5h4" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5.5 21V4.8A1.8 1.8 0 0 1 7.3 3h6.4a1.8 1.8 0 0 1 1.8 1.8V21" />
      <path d="M15.5 9H19a1 1 0 0 1 1 1v11" />
      <path d="M9 7h3M9 11h3M9 15h3" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10.3c0 5.6-8 11.2-8 11.2S4 15.9 4 10.3a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.2" r="2.8" />
    </>
  ),
  wallet: (
    <>
      <rect x="2.5" y="5.5" width="19" height="14" rx="3" />
      <path d="M2.5 10h19" />
      <circle cx="17" cy="15" r="1.2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18.5" r="2.5" />
      <circle cx="18" cy="5.5" r="2.5" />
      <path d="M8.5 18.5H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8.5a6 6 0 0 0-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5Z" />
      <path d="M13.7 20.5a2 2 0 0 1-3.4 0" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10.5v3.2a1.3 1.3 0 0 0 1.3 1.3H6l3.5 4V5.2L6 9.2H4.3A1.3 1.3 0 0 0 3 10.5Z" />
      <path d="M13.5 8.2a5 5 0 0 1 0 7.6" />
      <path d="M16.8 5a9 9 0 0 1 0 14" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.9c0 4.8-3.4 7.9-7 9-3.6-1.1-7-4.2-7-9V6l7-2.8Z" />
      <path d="m9 11.8 2.1 2.2L15.2 10" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.2" width="10" height="19.6" rx="3" />
      <path d="M11 18.6h2" />
    </>
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  arrowRight: (
    <>
      <path d="M4 12h15.5" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  menu: (
    <>
      <path d="M3.5 7h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 17h17" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  check: <path d="m20 6.5-10.5 11L4 12" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  alert: (
    <>
      <path d="M10.3 4.4 2.2 18.3a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 4.4a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9.5v4" />
      <path d="M12 17.2h.01" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-1.8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V21" />
      <circle cx="9" cy="7" r="3.6" />
      <path d="M17 4.2a3.6 3.6 0 0 1 0 7" />
      <path d="M22 21v-1.8a4 4 0 0 0-3-3.8" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 2.1 5.6L19.5 11l-5.4 2.4L12 19l-2.1-5.6L4.5 11l5.4-2.4L12 3Z" />
      <path d="M18.5 16.5 19.3 19l2.2.8-2.2.8-.8 2.4-.8-2.4-2.2-.8 2.2-.8.8-2.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  landmark: (
    <>
      <path d="M2.5 21h19" />
      <path d="M4.5 21V10.5M9.5 21V10.5M14.5 21V10.5M19.5 21V10.5" />
      <path d="m12 2.5 9.5 5.5h-19L12 2.5Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
      <path d="M12 3c2.6 2.4 3.9 5.4 3.9 9s-1.3 6.6-3.9 9c-2.6-2.4-3.9-5.4-3.9-9S9.4 5.4 12 3Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
