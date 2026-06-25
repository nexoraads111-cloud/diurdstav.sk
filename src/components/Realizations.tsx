import { useMemo, useRef, useState } from 'react'
import { workCategories, works, type WorkCategory } from '../data'

const INITIAL = 3
const STEP = 3

const labelFor = (id: WorkCategory) =>
  workCategories.find((c) => c.id === id)?.label ?? ''

export function Realizations() {
  const [filter, setFilter] = useState<WorkCategory | 'vsetko'>('vsetko')
  const [visible, setVisible] = useState(INITIAL)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = useMemo(
    () =>
      filter === 'vsetko'
        ? works
        : works.filter((w) => w.category === filter),
    [filter],
  )

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const changeFilter = (id: WorkCategory | 'vsetko') => {
    setFilter(id)
    setVisible(INITIAL)
    // Po zmene filtra sa mriežka zmenší – vrátime sekciu späť do zorného poľa,
    // aby používateľ nezostal pozerať na prázdne miesto.
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      id="referencie"
      className="scroll-mt-24 bg-white pb-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
          Naše <span className="text-brand-500">realizácie</span>
        </h2>
        <p className="mt-4 max-w-2xl text-ink-500">
          Prezrite si výber našich prác. Filtrujte podľa typu realizácie a
          kliknutím na „Zobraziť viac" načítajte ďalšie fotografie.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {workCategories.map((cat) => {
            const active = filter === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => changeFilter(cat.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-ink-200 bg-white text-ink-600 hover:border-brand-500 hover:text-brand-500'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((work) => (
            <figure
              key={work.image + work.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-ink-100"
            >
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 via-ink-950/40 to-transparent p-4 pt-10">
                <span className="font-display inline-block rounded-sm bg-brand-500 px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-white uppercase">
                  {labelFor(work.category)}
                </span>
                <p className="mt-1.5 font-semibold text-white">{work.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-500">
            V tejto kategórii zatiaľ nemáme fotografie.
          </p>
        )}

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + STEP)}
              className="rounded-sm bg-brand-500 px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
            >
              Zobraziť viac
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
