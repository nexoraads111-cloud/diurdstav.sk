import { company } from '../data'
import { MailIcon, PhoneIcon } from './icons'

export function CtaProject() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <svg
        className="pointer-events-none absolute top-1/2 right-0 hidden w-[420px] -translate-y-1/2 text-ink-100 lg:block"
        viewBox="0 0 300 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M20 180V90L150 20l130 70v90" />
        <path d="M60 180v-60h80v60M170 180v-50h60v50" />
        <path d="M20 90h260M90 70v-25M120 70v-25" />
        <circle cx="105" cy="55" r="14" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
            <span className="text-ink-900">Máte projekt?</span>
            <br />
            <span className="text-brand-500">Radi vám pomôžeme</span>
          </h2>
          <p className="mt-4 max-w-md text-ink-500">
            Kontaktujte nás a získajte nezáväznú cenovú ponuku.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="flex flex-1 items-center gap-3 rounded-sm border border-ink-200 bg-white px-5 py-4 transition-colors hover:border-brand-500"
          >
            <PhoneIcon width={22} height={22} className="text-brand-500" />
            <span>
              <span className="font-display block text-xs font-semibold tracking-wide text-ink-500 uppercase">
                Zavolajte nám
              </span>
              <span className="block font-semibold text-ink-900">
                {company.phone}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="flex flex-1 items-center gap-3 rounded-sm border border-ink-200 bg-white px-5 py-4 transition-colors hover:border-brand-500"
          >
            <MailIcon width={22} height={22} className="text-brand-500" />
            <span>
              <span className="font-display block text-xs font-semibold tracking-wide text-ink-500 uppercase">
                Napíšte nám
              </span>
              <span className="block font-semibold text-ink-900">
                {company.email}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${company.email}?subject=Žiadosť o cenovú ponuku`}
            className="rounded-sm bg-brand-500 px-7 py-4 text-center text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
          >
            Získať cenovú ponuku
          </a>
        </div>
      </div>
    </section>
  )
}
