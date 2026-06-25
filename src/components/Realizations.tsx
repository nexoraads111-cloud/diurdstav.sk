import { useRef } from 'react'
import { gallery } from '../data'
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from './icons'

export function Realizations() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="referencie" className="bg-white pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
          Naše <span className="text-brand-500">realizácie</span>
        </h2>

        <div className="relative mt-10">
          <button
            type="button"
            aria-label="Predchádzajúce"
            onClick={() => scroll(-1)}
            className="absolute top-1/2 -left-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-md transition-colors hover:bg-brand-500 hover:text-white sm:-left-5"
          >
            <ChevronLeftIcon />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {gallery.map((src, index) => (
              <figure
                key={src + index}
                className="aspect-[4/3] w-[260px] shrink-0 snap-start overflow-hidden rounded-sm border border-ink-100 sm:w-[300px]"
              >
                <img
                  src={src}
                  alt={`Realizácia ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
            ))}
          </div>

          <button
            type="button"
            aria-label="Ďalšie"
            onClick={() => scroll(1)}
            className="absolute top-1/2 -right-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-md transition-colors hover:bg-brand-500 hover:text-white sm:-right-5"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-500 px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
          >
            Zobraziť viac referencií
            <ArrowRightIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
