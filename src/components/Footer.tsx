import { company, navLinks } from '../data'
import { Logo } from './Navbar'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              Stavebná spoločnosť so sídlom v Žiline. {company.tagline} od roku
              2008.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigácia</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-400">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>{company.address}</li>
              <li>IČO: {company.ico}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Všetky práva vyhradené.
          </p>
          <p>diurdstav.sk</p>
        </div>
      </div>
    </footer>
  )
}
