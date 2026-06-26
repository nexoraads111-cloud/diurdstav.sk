import { company } from '../data'
import { Logo } from './Logo'
import { GlobeIcon, MailIcon, PhoneIcon, WhatsAppIcon } from './icons'

const footerLinks = [
  { href: '#domov', label: 'Domov' },
  { href: '#o-nas', label: 'O nás' },
  { href: '#sluzby', label: 'Služby' },
  { href: '#referencie', label: 'Referencie' },
  { href: '#recenzie', label: 'Recenzie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-base font-bold tracking-widest text-white uppercase">
            Kontakt
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 hover:text-brand-500"
              >
                <PhoneIcon width={18} height={18} className="text-brand-500" />
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon width={18} height={18} className="text-brand-500" />
              {company.whatsapp} <span className="text-ink-500">(WhatsApp)</span>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 hover:text-brand-500"
              >
                <MailIcon width={18} height={18} className="text-brand-500" />
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <GlobeIcon width={18} height={18} className="text-brand-500" />
              {company.web}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold tracking-widest text-white uppercase">
            Kde nás nájdete
          </h3>
          <div className="mt-5 overflow-hidden rounded-sm border border-white/10">
            <iframe
              title="Mapa – D-A DIURDSTAV"
              src="https://www.google.com/maps?q=Žilina,Slovensko&z=12&output=embed"
              className="h-48 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:text-right">
          <div className="lg:flex lg:justify-end">
            <Logo />
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-ink-500 sm:flex-row">
          <p>
            © {company.year} {company.name} {company.legal}. Všetky práva
            vyhradené.
          </p>
          <p>Ochrana osobných údajov | Podmienky používania</p>
        </div>
      </div>
    </footer>
  )
}
