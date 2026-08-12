export type IconName =
  | "ball"
  | "plane"
  | "globe"
  | "handshake"
  | "arrowRight"
  | "menu"
  | "close"
  | "check"
  | "mail"
  | "phone"
  | "pin"
  | "clock"
  | "search"
  | "filter"
  | "external";

const paths: Record<IconName, JSX.Element> = {
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" strokeLinecap="round" />
    </>
  ),
  plane: (
    <path
      d="M3 12l17-7-6 7 6 7-17-7zm7 0h5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 4 5.8 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.8-4-9s1.4-6.3 4-9z" />
    </>
  ),
  handshake: (
    <path
      d="M2 12l4-3 4 3 3-3 3 2 4-3M6 15l3 3 2-1 2 2 3-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  arrowRight: (
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />,
  close: <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />,
  check: <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 015 6a2 2 0 012-2z"
      strokeLinejoin="round"
    />
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </>
  ),
  filter: <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />,
  external: (
    <path
      d="M14 5h5v5M19 5l-9 9M6 5H5a1 1 0 00-1 1v13a1 1 0 001 1h13a1 1 0 001-1v-1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
