import {
  BuildingIcon,
  HammerIcon,
  LayersIcon,
  PaintRollerIcon,
  RulerIcon,
  ShieldIcon,
} from './components/icons'

export const company = {
  name: 'ĎURĎSTAV',
  tagline: 'Staviame s istotou',
  phone: '+421 905 123 456',
  email: 'info@diurdstav.sk',
  address: 'Hlavná 12, 010 01 Žilina',
  ico: '12 345 678',
}

export const navLinks = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#o-nas', label: 'O nás' },
  { href: '#projekty', label: 'Projekty' },
  { href: '#postup', label: 'Postup' },
  { href: '#kontakt', label: 'Kontakt' },
]

export const services = [
  {
    icon: BuildingIcon,
    title: 'Pozemné stavby',
    text: 'Realizácia rodinných domov a bytových objektov na kľúč – od základov až po kolaudáciu.',
  },
  {
    icon: HammerIcon,
    title: 'Rekonštrukcie',
    text: 'Kompletné prestavby bytov, domov a komerčných priestorov s dôrazom na detail.',
  },
  {
    icon: LayersIcon,
    title: 'Zatepľovanie',
    text: 'Zateplenie fasád a striech, ktoré znižuje náklady na vykurovanie až o 40 %.',
  },
  {
    icon: RulerIcon,
    title: 'Murárske práce',
    text: 'Presné murivo, omietky, betonáže a sadrokartón od skúsených remeselníkov.',
  },
  {
    icon: PaintRollerIcon,
    title: 'Dokončovacie práce',
    text: 'Maľby, obklady, dlažby a podlahy, ktoré dotvoria každý interiér.',
  },
  {
    icon: ShieldIcon,
    title: 'Stavebný dozor',
    text: 'Odborný dohľad nad kvalitou, termínmi a rozpočtom počas celej výstavby.',
  },
]

export const stats = [
  { value: '18+', label: 'rokov na trhu' },
  { value: '320', label: 'dokončených projektov' },
  { value: '45', label: 'zamestnancov' },
  { value: '100 %', label: 'spokojných klientov' },
]

export const reasons = [
  {
    title: 'Pevné termíny',
    text: 'Harmonogram dodržiavame zmluvne. Vždy viete, kedy sa nasťahujete.',
  },
  {
    title: 'Transparentný rozpočet',
    text: 'Položkový rozpočet bez skrytých nákladov a dodatočných prekvapení.',
  },
  {
    title: 'Vlastný tím',
    text: 'Nepoužívame neznámych subdodávateľov – staviame vlastnými remeselníkmi.',
  },
  {
    title: 'Záruka 5 rokov',
    text: 'Na všetky realizácie poskytujeme nadštandardnú záruku a servis.',
  },
]

export const projects = [
  {
    title: 'Rodinný dom Terchová',
    category: 'Novostavba na kľúč',
    from: '#f98307',
    to: '#7a2b0d',
  },
  {
    title: 'Bytový dom Vlčince',
    category: 'Pozemná stavba',
    from: '#4f5870',
    to: '#161922',
  },
  {
    title: 'Rekonštrukcia vily',
    category: 'Kompletná prestavba',
    from: '#ffa620',
    to: '#94330c',
  },
  {
    title: 'Administratívne centrum',
    category: 'Komerčná výstavba',
    from: '#647088',
    to: '#0c0e15',
  },
  {
    title: 'Zateplenie panelákov',
    category: 'Obnova fasád',
    from: '#ffbf4a',
    to: '#b74106',
  },
  {
    title: 'Penzión Vrátna',
    category: 'Novostavba',
    from: '#828ea3',
    to: '#2a2f3d',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Konzultácia',
    text: 'Stretneme sa, prejdeme vaše predstavy, obhliadneme pozemok či priestor.',
  },
  {
    number: '02',
    title: 'Návrh a rozpočet',
    text: 'Pripravíme riešenie, položkový rozpočet a záväzný harmonogram prác.',
  },
  {
    number: '03',
    title: 'Realizácia',
    text: 'Staviame vlastným tímom pod stálym stavebným dozorom a kontrolou kvality.',
  },
  {
    number: '04',
    title: 'Odovzdanie',
    text: 'Odovzdáme hotové dielo, dokumentáciu a poskytneme 5-ročnú záruku.',
  },
]
