import { reasons } from '../data'
import { CheckIcon } from './icons'

export function About() {
  return (
    <section id="o-nas" className="bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
            O spoločnosti
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Rodinná stavebná firma s rukopisom kvality
          </h2>
          <p className="mt-5 text-ink-300">
            Od roku 2008 staviame na Slovensku domy, byty a komerčné objekty.
            Veríme, že dobrá stavba stojí na poctivom remesle, jasnej
            komunikácii a dodržaných sľuboch. Preto si každý projekt vedieme od
            začiatku do konca vlastným tímom.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-400">
                  <CheckIcon width={16} height={16} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{reason.title}</h3>
                  <p className="mt-1 text-sm text-ink-400">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="aspect-square rounded-2xl"
              style={{
                backgroundImage:
                  'linear-gradient(160deg, #f98307, #94330c)',
              }}
            />
            <div className="mt-8 aspect-square rounded-2xl border border-white/10 bg-ink-950" />
            <div className="aspect-square rounded-2xl border border-white/10 bg-ink-950" />
            <div
              className="mt-8 aspect-square rounded-2xl"
              style={{
                backgroundImage:
                  'linear-gradient(160deg, #4f5870, #161922)',
              }}
            />
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl border border-white/10 bg-ink-900/90 px-8 py-6 text-center backdrop-blur">
              <p className="font-display text-4xl font-extrabold text-brand-400">
                18
              </p>
              <p className="text-sm text-ink-300">rokov skúseností</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
