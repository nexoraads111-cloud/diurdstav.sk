import { steps } from '../data'

export function Process() {
  return (
    <section id="postup" className="bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
            Ako pracujeme
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Štyri kroky k vašej stavbe
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-ink-950 p-7"
            >
              <span className="font-display text-5xl font-extrabold text-white/10">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
