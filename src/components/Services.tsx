import { currentFocus, services, servicesIntro } from '../data'
import { ArrowRightIcon } from './icons'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section id="sluzby" className="scroll-mt-24 bg-ink-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
            Čo robíme
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
            Naše <span className="text-brand-500">služby</span>
          </h2>
          <p className="mt-4 max-w-3xl text-ink-500">{servicesIntro}</p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            {currentFocus}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(i % 4) * 80}>
                <article className="group h-full rounded-lg border border-ink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon width={28} height={28} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-wide text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-brand-500">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {service.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-sm bg-ink-900 px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-ink-800"
            >
              Mám záujem o cenovú ponuku
              <ArrowRightIcon width={18} height={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
