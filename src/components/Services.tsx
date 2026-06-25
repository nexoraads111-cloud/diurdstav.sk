import { services } from '../data'

export function Services() {
  return (
    <section id="sluzby" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
          Naše <span className="text-brand-500">služby</span>
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-sm border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold tracking-wide text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-brand-500">
                  {service.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
