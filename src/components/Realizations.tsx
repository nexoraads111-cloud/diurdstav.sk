import { useEffect, useMemo, useRef, useState } from 'react'
import { workCategories, works, type WorkCategory } from '../data'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons'
import { Reveal } from './Reveal'

const INITIAL = 6
const STEP = 6

export function Realizations() {
  const [filter, setFilter] = useState<WorkCategory>('vsetko')
  const [visible, setVisible] = useState(INITIAL)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = useMemo(
    () => (filter === 'vsetko' ? works : works.filter((w) => w.category === filter)),
    [filter],
  )

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const changeFilter = (id: WorkCategory) => {
    setFilter(id)
    setVisible(INITIAL)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Lightbox navigation + body scroll lock + keyboard controls.
  useEffect(() => {
    if (lightbox === null) return
    document.body.classList.add('modal-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % filtered.length))
      if (e.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, filtered.length])

  const active = lightbox !== null ? filtered[lightbox] : null

  return (
    <section ref={sectionRef} id="referencie" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
            Naše práce
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
            Naše <span className="text-brand-500">realizácie</span>
          </h2>
          <p className="mt-4 max-w-2xl text-ink-500">
            Reálne fotografie z našich realizácií. Filtrujte podľa typu práce,
            kliknutím na fotku ju zväčšíte.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {workCategories.map((cat) => {
            const isActive = filter === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => changeFilter(cat.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-ink-200 bg-white text-ink-600 hover:border-brand-500 hover:text-brand-500'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((work, i) => (
            <Reveal key={work.image} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setLightbox(filtered.indexOf(work))}
                className="group relative block w-full overflow-hidden rounded-lg border border-ink-100 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <span className="font-display block text-sm font-semibold text-white sm:text-base">
                    {work.title}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs text-brand-300">
                    Zväčšiť
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

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

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="Zavrieť"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            aria-label="Predchádzajúca"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 sm:left-6"
          >
            <ChevronLeftIcon />
          </button>

          <figure className="max-h-[88vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.image}
              alt={active.title}
              className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white">
              {active.title}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Ďalšia"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i + 1) % filtered.length))
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 sm:right-6"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </section>
  )
}
