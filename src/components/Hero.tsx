import { company, stats } from '../data'
import { ArrowRightIcon, CheckIcon } from './icons'

const highlights = ['Stavby na kľúč', 'Záruka 5 rokov', 'Fixné termíny']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(60% 60% at 75% 10%, rgba(249,131,7,0.22), transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(79,88,112,0.35), transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-300 uppercase">
              Stavebná spoločnosť · {company.address.split(',').pop()?.trim()}
            </span>

            <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-white sm:text-6xl">
              Staviame domy,
              <br />
              <span className="text-brand-400">na ktoré sa dá spoľahnúť.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-ink-300">
              {company.name} realizuje pozemné stavby, rekonštrukcie a
              zatepľovanie po celom Slovensku. Od prvej konzultácie až po
              odovzdanie kľúčov – s pevným rozpočtom a termínom.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
              >
                Nezáväzná cenová ponuka
                <ArrowRightIcon width={18} height={18} />
              </a>
              <a
                href="#projekty"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                Naše projekty
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink-200"
                >
                  <CheckIcon width={18} height={18} className="text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-950 p-1 shadow-2xl">
              <div
                className="aspect-[4/5] w-full rounded-[1.4rem]"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(249,131,7,0.9), rgba(122,43,13,0.95))',
                }}
              >
                <div className="flex h-full flex-col justify-between p-7">
                  <div className="flex items-center justify-between text-ink-950">
                    <span className="font-display text-sm font-bold">
                      {company.name}
                    </span>
                    <span className="rounded-full bg-ink-950/20 px-3 py-1 text-xs font-semibold">
                      EST. 2008
                    </span>
                  </div>
                  <svg viewBox="0 0 200 140" className="w-full" aria-hidden>
                    <g fill="none" stroke="rgba(12,14,21,0.65)" strokeWidth="3">
                      <path d="M20 120 V60 L100 20 L180 60 V120" />
                      <path d="M60 120 V80 H140 V120" />
                      <path d="M90 120 V96 H110 V120" />
                      <path d="M20 120 H180" strokeWidth="5" />
                    </g>
                  </svg>
                  <p className="font-display text-xl font-bold text-ink-950">
                    {company.tagline}.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-ink-900 px-5 py-4 shadow-xl sm:block">
              <p className="font-display text-2xl font-extrabold text-brand-400">
                320+
              </p>
              <p className="text-xs text-ink-300">dokončených stavieb</p>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink-950 px-5 py-6 text-center">
              <dt className="font-display text-3xl font-extrabold text-white">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-ink-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
