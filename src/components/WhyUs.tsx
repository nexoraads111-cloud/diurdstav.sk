import { reasons } from '../data'
import { Reveal } from './Reveal'

export function WhyUs() {
  return (
    <section id="preco-nas" className="scroll-mt-24 bg-ink-950 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl">
            Prečo si <span className="text-brand-500">vybrať</span> nás?
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <Reveal>
            <div>
              <p className="max-w-sm text-ink-300">
                Sme firma s dlhoročnými skúsenosťami v oblasti dlažby a spevnených
                plôch. Ku každému projektu pristupujeme zodpovedne a s dôrazom na
                kvalitu.
              </p>
              <a
                href="#kontakt"
                className="mt-6 inline-block rounded-sm bg-brand-500 px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
              >
                Kontaktujte nás
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.text} delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/5 text-brand-500 ring-1 ring-white/10 transition-colors hover:bg-brand-500/10">
                      <Icon width={32} height={32} />
                    </span>
                    <p className="mt-4 text-sm leading-snug text-ink-200">
                      {reason.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
