import { useState, type FormEvent } from 'react'
import { company } from '../data'
import { CheckIcon, MailIcon, PhoneIcon, PinIcon } from './icons'

const contactItems = [
  { icon: PhoneIcon, label: 'Telefón', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: MailIcon, label: 'E-mail', value: company.email, href: `mailto:${company.email}` },
  { icon: PinIcon, label: 'Adresa', value: company.address },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  const update = (field: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [field]: event.target.value }))

  return (
    <section id="kontakt" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-8 sm:p-12">
              <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">
                Kontakt
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Povedzte nám o svojom projekte
              </h2>
              <p className="mt-4 text-ink-300">
                Vyplňte formulár a ozveme sa vám do 24 hodín s nezáväznou
                cenovou ponukou.
              </p>

              <ul className="mt-10 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <span className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-400">
                        <Icon width={20} height={20} />
                      </span>
                      <span>
                        <span className="block text-xs text-ink-400">
                          {item.label}
                        </span>
                        <span className="block font-semibold text-white">
                          {item.value}
                        </span>
                      </span>
                    </span>
                  )
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="hover:opacity-80">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="border-t border-white/10 bg-ink-950 p-8 sm:p-12 lg:border-t-0 lg:border-l">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-500/15 text-brand-400">
                    <CheckIcon width={32} height={32} />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-white">
                    Ďakujeme, {form.name || 'priateľu'}!
                  </h3>
                  <p className="mt-2 max-w-sm text-ink-300">
                    Vašu správu sme prijali. Ozveme sa vám čo najskôr na{' '}
                    <span className="text-brand-400">
                      {form.email || 'zadaný kontakt'}
                    </span>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setForm({ name: '', email: '', message: '' })
                    }}
                    className="mt-6 text-sm font-semibold text-brand-400 hover:text-brand-300"
                  >
                    Odoslať ďalšiu správu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Meno a priezvisko">
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Ján Novák"
                      className="form-input"
                    />
                  </Field>
                  <Field label="E-mail">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jan@example.sk"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Popíšte projekt">
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Plánujem stavbu rodinného domu…"
                      className="form-input resize-none"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
                  >
                    Odoslať dopyt
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink-200">
        {label}
      </span>
      {children}
    </label>
  )
}
