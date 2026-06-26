import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { seedReviews, type Review } from '../data'
import { QuoteIcon, StarIcon } from './icons'
import { Reveal } from './Reveal'

const STORAGE_KEY = 'diurdstav_reviews_v1'

function loadStored(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as Review[]) : []
  } catch {
    return []
  }
}

function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex" aria-label={`Hodnotenie ${value} z 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          width={size}
          height={size}
          className={n <= value ? 'text-amber-400' : 'text-ink-200'}
          style={{ fill: n <= value ? 'currentColor' : 'none' }}
        />
      ))}
    </span>
  )
}

export function Reviews() {
  const [stored, setStored] = useState<Review[]>([])
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [hover, setHover] = useState(0)
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    setStored(loadStored())
  }, [])

  const all = useMemo(() => [...stored, ...seedReviews], [stored])
  const average = useMemo(
    () => (all.length ? all.reduce((s, r) => s + r.rating, 0) / all.length : 0),
    [all],
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.trim().length < 2) {
      setError('Zadajte vaše meno.')
      return
    }
    if (text.trim().length < 5) {
      setError('Napíšte prosím krátku recenziu.')
      return
    }
    const review: Review = {
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toISOString(),
    }
    const next = [review, ...stored]
    setStored(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* ignore storage errors */
    }
    setName('')
    setText('')
    setRating(5)
    setError('')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="recenzie" className="scroll-mt-24 bg-ink-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
                Spokojní zákazníci
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-ink-900 uppercase sm:text-4xl">
                Recenzie
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-3 shadow-sm">
              <span className="font-display text-3xl font-bold text-ink-900">
                {average.toFixed(1)}
              </span>
              <span>
                <Stars value={Math.round(average)} />
                <span className="block text-xs text-ink-500">
                  {all.length} hodnotení
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {all.slice(0, 6).map((review, i) => (
              <Reveal key={`${review.name}-${review.date}-${i}`} delay={(i % 2) * 80}>
                <article className="relative h-full rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
                  <QuoteIcon
                    width={28}
                    height={28}
                    className="absolute top-5 right-5 text-brand-500/20"
                  />
                  <Stars value={review.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {review.text}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-ink-900">{review.name}</span>
                    <span className="text-xs text-ink-400">{formatDate(review.date)}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-ink-900">
                Napíšte nám recenziu
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                Podeľte sa o skúsenosť s našou prácou.
              </p>

              <label className="mt-5 block text-sm font-medium text-ink-700">
                Vaše meno
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Napr. Ján K."
                  className="form-input mt-1.5"
                />
              </label>

              <div className="mt-4">
                <span className="block text-sm font-medium text-ink-700">Hodnotenie</span>
                <div className="mt-1.5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${n} hviezdičiek`}
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      className="p-0.5"
                    >
                      <StarIcon
                        width={26}
                        height={26}
                        className={n <= (hover || rating) ? 'text-amber-400' : 'text-ink-200'}
                        style={{ fill: n <= (hover || rating) ? 'currentColor' : 'none' }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-4 block text-sm font-medium text-ink-700">
                Recenzia
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  placeholder="Ako ste boli spokojní s realizáciou?"
                  className="form-input mt-1.5 resize-none"
                />
              </label>

              {error && <p className="mt-3 text-sm text-brand-600">{error}</p>}
              {sent && (
                <p className="mt-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
                  Ďakujeme za vašu recenziu!
                </p>
              )}

              <button
                type="submit"
                className="mt-5 w-full rounded-sm bg-brand-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600"
              >
                Odoslať recenziu
              </button>
              <p className="mt-3 text-xs text-ink-400">
                Recenzie sa zobrazujú na tejto stránke.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
