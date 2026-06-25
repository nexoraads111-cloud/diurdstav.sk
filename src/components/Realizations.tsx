import { useEffect, useRef, useState } from 'react'
import { gallery } from '../data'
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from './icons'

const CARD = 300
const GAP = 16
const STEP = CARD + GAP

export function Realizations() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [perView, setPerView] = useState(1)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const calc = () => {
      const width = wrapRef.current?.clientWidth ?? STEP
      setPerView(Math.max(1, Math.floor((width + GAP) / STEP)))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const maxIndex = Math.max(0, gallery.length - perView)
  const current = Math.min(index, maxIndex)

  const move = (direction: number) =>
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + direction)))

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
            onClick={() => move(-1)}
            disabled={current === 0}
            className="absolute top-1/2 -left-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-md transition-colors hover:bg-brand-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-ink-700 sm:-left-5"
          >
            <ChevronLeftIcon />
          </button>

          <div ref={wrapRef} className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * STEP}px)` }}
            >
              {gallery.map((src, i) => (
                <figure
                  key={src + i}
                  className="aspect-[4/3] shrink-0 overflow-hidden rounded-sm border border-ink-100"
                  style={{ width: CARD }}
                >
                  <img
                    src={src}
                    alt={`Realizácia ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Ďalšie"
            onClick={() => move(1)}
            disabled={current >= maxIndex}
            className="absolute top-1/2 -right-3 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-md transition-colors hover:bg-brand-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-ink-700 sm:-right-5"
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
