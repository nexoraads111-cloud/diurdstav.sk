import { services } from '../data'

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-ink-300">{text}</p>}
    </div>
  )
}

export function Services() {
  return (
    <section id="sluzby" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Čo robíme"
          title="Stavebné služby na kľúč"
          text="Pokrývame celý proces výstavby pod jednou strechou – nemusíte koordinovať desiatky firiem."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-ink-900/60 p-7 transition-colors hover:border-brand-500/50 hover:bg-ink-900"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                  <Icon />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {service.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
