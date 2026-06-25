import { company } from '../data'

export function Logo({
  className = '',
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <a
      href="#domov"
      onClick={onClick}
      className={`flex items-center gap-3 ${className}`}
    >
      <svg
        width="46"
        height="34"
        viewBox="0 0 66 44"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M2 30 24 9l22 21"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M20 32 42 11l22 21"
          stroke="#e11b1b"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span className="font-display text-lg font-bold tracking-wide text-white">
          {company.name}{' '}
          <span className="text-ink-300">{company.legal}</span>
        </span>
        <span className="mt-1 block text-[0.7rem] font-medium tracking-[0.25em] text-ink-300 uppercase">
          {company.subtitle}
        </span>
      </span>
    </a>
  )
}
