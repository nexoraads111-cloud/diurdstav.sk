import { useEffect, useState } from 'react'
import { company, navLinks } from '../data'
import { CloseIcon, MenuIcon } from './icons'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 text-ink-950">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
          <path d="M12 50V28l20-12 20 12v22H38V36H26v14H12Z" />
        </svg>
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-white">
        {company.name}
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-200 transition-colors hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400 md:inline-flex"
        >
          Cenová ponuka
        </a>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-100 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-ink-950"
              >
                Cenová ponuka
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
