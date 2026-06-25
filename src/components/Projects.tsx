import { projects } from '../data'
import { ArrowRightIcon } from './icons'

export function Projects() {
  return (
    <section id="projekty" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
              Referencie
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Vybrané projekty
            </h2>
            <p className="mt-4 text-ink-300">
              Prierez stavbami, ktoré sme odovzdali spokojným klientom po celom
              Slovensku.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
          >
            Chcem podobný projekt
            <ArrowRightIcon width={18} height={18} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(150deg, ${project.from}, ${project.to})`,
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent p-5 pt-12">
                <p className="text-xs font-semibold tracking-wide text-brand-300 uppercase">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
