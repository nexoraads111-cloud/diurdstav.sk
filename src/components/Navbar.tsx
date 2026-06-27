import { useEffect, useState } from 'react'
import { company, navLinks } from '../data'
import { Logo } from './Logo'
import { CloseIcon, MenuIcon, PhoneIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#domov')

  useEffect(() => {
    const onScroll = () => {
      let current = '#domov'
      for (const link of navLinks) {
        const el = document.querySelector(link.href)
        if (el && el.getBoundingClientRect().top <= 120) current = link.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Logo onClick={() => setOpen(false)} />

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  active === link.href
                    ? 'text-brand-500'
                    : 'text-ink-100 hover:text-brand-500'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 text-sm font-semibold text-white hover:text-brand-500 xl:flex"
          >
            <PhoneIcon width={18} height={18} className="text-brand-500" />
            {company.phone}
          </a>
          <a
            href="#kontakt"
            className="rounded-sm bg-brand-500 px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
          >
            Získať cenovú ponuku
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-3 py-2.5 text-sm font-semibold tracking-wide text-ink-100 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-2 px-3 text-sm font-semibold text-white">
              <PhoneIcon width={18} height={18} className="text-brand-500" />
              {company.phone}
            </li>
            <li className="mt-2">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-brand-500 px-5 py-3 text-center text-sm font-bold tracking-wide text-white uppercase"
              >
                Získať cenovú ponuku
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
