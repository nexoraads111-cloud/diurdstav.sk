import type { Review } from '../data'

// Endpoint malého backendu (Google Apps Script). Je zámerne zakódovaný (base64),
// aby v zdrojovom kóde nebola priamo viditeľná adresa ani e-mail.
const BACKEND_B64 =
  'aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5bmZLanhzNVY1MG50dy1mM0RVZndHTG9nZDdEbWt4OGtNekJCcXJDdlB6OXVzWG1udXY4N0hwVW9qRThBTUloazYvZXhlYw=='

export const BACKEND_URL = (() => {
  try {
    return atob(BACKEND_B64)
  } catch {
    return ''
  }
})()

export type LeadPayload = {
  type: 'lead'
  name: string
  phone: string
  email: string
  message: string
}

export type ReviewPayload = {
  type: 'review'
  name: string
  rating: number
  text: string
}

/** Načíta schválené recenzie z backendu (prázdne pole pri chybe). */
export async function fetchApprovedReviews(): Promise<Review[]> {
  if (!BACKEND_URL) return []
  try {
    const res = await fetch(BACKEND_URL, { method: 'GET' })
    if (!res.ok) return []
    const data = await res.json()
    if (!Array.isArray(data)) return []
    return data
      .map((r) => ({
        name: String(r.name ?? ''),
        rating: Number(r.rating ?? 5),
        text: String(r.text ?? ''),
        date: String(r.date ?? ''),
      }))
      .filter((r) => r.name && r.text)
  } catch {
    return []
  }
}

/**
 * Odošle dáta do backendu. Používame "simple request" (text/plain) + no-cors,
 * aby nevznikol CORS preflight – Apps Script tak dáta prijme spoľahlivo.
 */
export async function sendToBackend(payload: LeadPayload | ReviewPayload): Promise<void> {
  if (!BACKEND_URL) throw new Error('Backend nie je nakonfigurovaný')
  await fetch(BACKEND_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
}
