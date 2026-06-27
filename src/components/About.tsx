import { about, company } from '../data'
import { CheckIcon } from './icons'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="o-nas" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-xl">
              <img
                src={about.photo}
                alt={`Majiteľ ${company.name}`}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={700}
                height={875}
              />
            </div>
            <div className="absolute -right-3 -bottom-6 hidden rounded-xl bg-brand-500 px-6 py-4 text-white shadow-lg sm:block">
              <p className="font-display text-2xl font-bold">10+</p>
              <p className="text-xs tracking-wide uppercase">rokov praxe</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
              O nás
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
              Dlažba a spevnené plochy <span className="text-brand-500">s istotou</span>
            </h2>

            <div className="mt-5 space-y-4 text-ink-600">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Zámková dlažba a žulové kocky',
                'Obrubníky a odvodnenie',
                'Zemné a prípravné práce',
                'Čistá práca a poriadok po sebe',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-500">
                    <CheckIcon width={15} height={15} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-100 pt-6">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-bold text-brand-500 sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-ink-500 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#kontakt"
              className="mt-8 inline-block rounded-sm bg-brand-500 px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
            >
              Nezáväzná cenová ponuka
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
