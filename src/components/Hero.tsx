import { services } from '../data'

export function Hero() {
  return (
    <section id="domov" className="relative overflow-hidden bg-ink-950 pt-[68px]">
      <div className="relative">
        <div
          className="absolute inset-y-0 right-0 left-[28%] bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero.jpg)',
            clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
        <div className="absolute inset-0 bg-ink-950/30" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1fr_350px] lg:py-20">
          <div className="flex max-w-xl flex-col justify-center">
            <h1 className="font-display text-5xl leading-[0.95] font-bold text-white uppercase sm:text-6xl lg:text-7xl">
              Staviame
              <br />
              <span className="text-brand-500">vaše sny</span>
            </h1>
            <p className="mt-6 text-lg text-ink-200">
              Kvalitné stavebné práce
              <br />
              od základov až po strechu.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sluzby"
                className="rounded-sm bg-brand-500 px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
              >
                Naše služby
              </a>
              <a
                href="#kontakt"
                className="rounded-sm border border-white/30 bg-ink-950/40 px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-px overflow-hidden rounded-sm">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <a
                  key={service.title}
                  href="#sluzby"
                  className="group flex items-center justify-between gap-3 bg-ink-900/85 px-4 py-3 backdrop-blur transition-colors hover:bg-brand-500"
                >
                  <span>
                    <span className="font-display block text-sm font-semibold tracking-wide text-white">
                      {service.title}
                    </span>
                    <span className="block text-xs text-ink-300 group-hover:text-white/90">
                      {service.subtitle}
                    </span>
                  </span>
                  <Icon
                    width={26}
                    height={26}
                    className="shrink-0 text-brand-500 group-hover:text-white"
                  />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
