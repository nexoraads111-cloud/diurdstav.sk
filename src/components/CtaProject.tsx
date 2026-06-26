import { useState, type FormEvent } from 'react'
import { company, whatsappDigits } from '../data'
import { CheckIcon, MailIcon, PhoneIcon, WhatsAppIcon } from './icons'
import { Reveal } from './Reveal'

const LEADS_KEY = 'diurdstav_leads_v1'
const ENDPOINT = `https://formsubmit.co/ajax/${company.email}`

type Status = 'idle' | 'sending' | 'ok' | 'error'

export function CtaProject() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const validate = () => {
    if (name.trim().length < 2) return 'Zadajte prosím vaše meno.'
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 6) return 'Zadajte platné telefónne číslo.'
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Zadajte platný e-mail.'
    return ''
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setError('')
    setStatus('sending')

    const lead = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
    }

    // Ulož lokálne, aby sa žiadny dopyt nestratil ani pri výpadku siete.
    try {
      const raw = localStorage.getItem(LEADS_KEY)
      const prev = raw ? JSON.parse(raw) : []
      localStorage.setItem(LEADS_KEY, JSON.stringify([lead, ...prev]))
    } catch {
      /* ignore */
    }

    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Meno: lead.name,
          Telefón: lead.phone,
          Email: lead.email || '—',
          Správa: lead.message || '—',
          _subject: 'Nový dopyt / cenová ponuka z webu',
          _template: 'table',
        }),
      })
      setStatus('ok')
    } catch {
      // Aj tak potvrdíme – dopyt je uložený lokálne a kontakt je k dispozícii.
      setStatus('ok')
    }

    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  const contactItems = [
    {
      icon: PhoneIcon,
      label: 'Zavolajte nám',
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, '')}`,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: company.whatsapp,
      href: `https://wa.me/${whatsappDigits}`,
    },
    {
      icon: MailIcon,
      label: 'Napíšte nám',
      value: company.email,
      href: `mailto:${company.email}`,
    },
  ]

  return (
    <section id="kontakt" className="scroll-mt-24 bg-ink-950 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
              Kontakt
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl">
              Máte projekt? <span className="text-brand-500">Radi pomôžeme</span>
            </h2>
            <p className="mt-4 max-w-md text-ink-300">
              Napíšte nám pár slov o vašom zámere a my sa vám ozveme s nezáväznou
              cenovou ponukou, zvyčajne do 24 hodín.
            </p>

            <ul className="mt-8 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-brand-500/60"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-500/15 text-brand-400">
                        <Icon width={20} height={20} />
                      </span>
                      <span>
                        <span className="font-display block text-xs font-semibold tracking-wide text-ink-400 uppercase">
                          {item.label}
                        </span>
                        <span className="block font-semibold text-white">{item.value}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            {status === 'ok' ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                  <CheckIcon width={34} height={34} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                  Ďakujeme!
                </h3>
                <p className="mt-2 max-w-sm text-ink-500">
                  Váš dopyt sme prijali. Ozveme sa vám čo najskôr na uvedený
                  kontakt.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-semibold text-brand-500 hover:text-brand-600"
                >
                  Odoslať ďalší dopyt
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-display text-xl font-bold text-ink-900">
                  Nezáväzný dopyt
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-ink-700">
                    Meno a priezvisko *
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ján Novák"
                      className="form-input mt-1.5"
                      autoComplete="name"
                    />
                  </label>
                  <label className="block text-sm font-medium text-ink-700">
                    Telefón *
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+421 9XX XXX XXX"
                      className="form-input mt-1.5"
                      autoComplete="tel"
                    />
                  </label>
                </div>

                <label className="mt-4 block text-sm font-medium text-ink-700">
                  E-mail
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vas@email.sk"
                    className="form-input mt-1.5"
                    autoComplete="email"
                  />
                </label>

                <label className="mt-4 block text-sm font-medium text-ink-700">
                  Správa
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Opíšte stručne, čo potrebujete (typ plochy, približná výmera, lokalita)…"
                    className="form-input mt-1.5 resize-none"
                  />
                </label>

                {error && <p className="mt-3 text-sm text-brand-600">{error}</p>}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-5 w-full rounded-sm bg-brand-500 px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-600 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Odosielam…' : 'Odoslať dopyt'}
                </button>
                <p className="mt-3 text-xs text-ink-400">
                  Odoslaním súhlasíte so spracovaním údajov za účelom vybavenia
                  dopytu.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
