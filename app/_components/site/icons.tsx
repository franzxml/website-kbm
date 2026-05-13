export function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9L12 15L18 9" />
    </svg>
  );
}

export function MenuIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 7H20" />
      <path d="M4 12H20" />
      <path d="M4 17H20" />
    </svg>
  );
}

export function CloseIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="16.95" cy="7.05" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function GithubIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.15c-5.48 0-9.92 4.44-9.92 9.92 0 4.38 2.84 8.1 6.78 9.41.5.09.68-.22.68-.48v-1.86c-2.76.6-3.34-1.17-3.34-1.17-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.97 1.02-2.66-.1-.25-.44-1.26.1-2.63 0 0 .83-.27 2.73 1.02a9.47 9.47 0 0 1 4.97 0c1.89-1.29 2.72-1.02 2.72-1.02.54 1.37.2 2.38.1 2.63.64.69 1.02 1.58 1.02 2.66 0 3.81-2.32 4.65-4.53 4.9.36.31.68.92.68 1.85V21c0 .27.18.58.69.48a9.93 9.93 0 0 0 6.77-9.41c0-5.48-4.44-9.92-9.92-9.92Z" />
    </svg>
  );
}
