import { reasons } from '../data'

export function WhyUs() {
  return (
    <section id="o-nas" className="bg-ink-950 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl">
          Prečo si <span className="text-brand-500">vybrať</span> nás?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="max-w-sm text-ink-300">
              Sme stavebná firma s dlhoročnými skúsenosťami. Ku každému projektu
              pristupujeme zodpovedne a s dôrazom na kvalitu.
            </p>
            <a
              href="#sluzby"
              className="mt-6 inline-block rounded-sm bg-brand-500 px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
            >
              Viac o nás
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.text}
                  className="flex flex-col items-center text-center"
                >
                  <Icon width={40} height={40} className="text-brand-500" />
                  <p className="mt-4 text-sm leading-snug text-ink-200">
                    {reason.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
