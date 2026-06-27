import { whatsappDigits } from '../data'
import { WhatsAppIcon } from './icons'

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappDigits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Napíšte nám na WhatsApp"
      className="wa-pulse fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  )
}
