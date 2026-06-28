import {
  AwardIcon,
  ClockIcon,
  FenceIcon,
  GridIcon,
  LeafIcon,
  TagIcon,
  UsersIcon,
  WallIcon,
} from './components/icons'

export const company = {
  name: 'D-A DIURDSTAV',
  legal: 's.r.o.',
  subtitle: 'Stavebné Práce',
  phone: '+421 944 667 935',
  whatsapp: '+421 944 667 935',
  email: 'durdstav@gmail.com',
  web: 'www.diurdstav.sk',
  ico: '57 709 556',
  region: 'Bratislava a okolie',
  year: 2024,
}

// Číslo pre WhatsApp odkaz (iba číslice, medzinárodný formát).
export const whatsappDigits = '421944667935'

// Text o aktuálnom zameraní a oblasti pôsobenia.
export const currentFocus = 'Momentálne realizujeme najmä zámkovú dlažbu.'
export const serviceArea = 'Pracujeme v Bratislave a okolí.'

export const navLinks = [
  { href: '#domov', label: 'DOMOV' },
  { href: '#o-nas', label: 'O NÁS' },
  { href: '#sluzby', label: 'SLUŽBY' },
  { href: '#referencie', label: 'REFERENCIE' },
  { href: '#recenzie', label: 'RECENZIE' },
  { href: '#kontakt', label: 'KONTAKT' },
]

export const services = [
  {
    icon: GridIcon,
    title: 'ZÁMKOVÁ DLAŽBA',
    subtitle: 'Chodníky, príjazdy, terasy',
    text: 'Pokládka zámkovej dlažby na chodníky, príjazdové cesty, terasy a okolie domu – vrátane podkladových vrstiev, obrubníkov a odvodnenia.',
  },
  {
    icon: WallIcon,
    title: 'BETÓNOVÉ PLOTY',
    subtitle: 'Odolné a bezúdržbové riešenia',
    text: 'Montáž betónových plotov rôznych vzorov a výšok – pevné a bezúdržbové oplotenie pre vaše súkromie a bezpečnosť.',
  },
  {
    icon: FenceIcon,
    title: '3D PLOTY',
    subtitle: 'Moderné panelové oplotenia',
    text: '3D panelové ploty – moderné, pevné a nenáročné na údržbu, ideálne pre rodinné domy aj firemné areály.',
  },
  {
    icon: LeafIcon,
    title: 'ZÁHRADNÉ PRÁCE',
    subtitle: 'Úprava a realizácia exteriéru',
    text: 'Kompletné záhradné a exteriérové práce – úprava terénu, výsadba, zakladanie trávnikov a realizácia okolia domu.',
  },
]

export const servicesIntro =
  'Ponúkame zámkovú dlažbu, betónové a 3D ploty a záhradné práce. Momentálne sa venujeme najmä zámkovej dlažbe.'

export const reasons = [
  { icon: AwardIcon, text: 'Dlhoročné skúsenosti' },
  { icon: WallIcon, text: 'Kvalitné materiály a precízna práca' },
  { icon: ClockIcon, text: 'Dodržiavame dohodnuté termíny' },
  { icon: UsersIcon, text: 'Individuálny prístup ku každému projektu' },
  { icon: TagIcon, text: 'Férové ceny a transparentnosť' },
]

export const about = {
  photo: '/images/owner.jpg',
  paragraphs: [
    'D-A DIURDSTAV s.r.o. je tím skúsených dlaždičov. Špecializujeme sa na zámkovú dlažbu, betónové a 3D ploty a záhradné práce. Pôsobíme v Bratislave a okolí.',
    'Pracujeme precízne, čisto a v dohodnutých termínoch – od obhliadky a podkladu až po finálnu pokládku a upratanie po sebe. Momentálne sa venujeme najmä zámkovej dlažbe.',
  ],
  stats: [
    { value: '8', label: 'rokov praxe' },
    { value: '150', label: 'dokončených realizácií' },
    { value: '100 %', label: 'spokojných zákazníkov' },
  ],
}

// Kategórie pre filter v sekcii „Naše realizácie".
export const workCategories = [
  { id: 'vsetko', label: 'Všetko' },
  { id: 'dlazba', label: 'Zámková dlažba' },
  { id: 'obrubniky', label: 'Obrubníky' },
  { id: 'zemne', label: 'Zemné práce' },
] as const

export type WorkCategory = (typeof workCategories)[number]['id']

// Reálne fotografie realizácií (priečinok public/images/works).
export const works: { image: string; title: string; category: Exclude<WorkCategory, 'vsetko'> }[] = [
  { image: '/images/works/work-01.jpg', title: 'Dekoratívna dlažba na nároží', category: 'dlazba' },
  { image: '/images/works/work-02.jpg', title: 'Chodník popri ceste', category: 'dlazba' },
  { image: '/images/works/work-03.jpg', title: 'Dlažba na moste s vodiacim pásom', category: 'dlazba' },
  { image: '/images/works/work-04.jpg', title: 'Oblúkový chodník s vodiacou líniou', category: 'dlazba' },
  { image: '/images/works/work-05.jpg', title: 'Nový chodník pri komunikácii', category: 'dlazba' },
  { image: '/images/works/work-06.jpg', title: 'Spevnená plocha pri budove', category: 'dlazba' },
  { image: '/images/works/work-07.jpg', title: 'Parkovacia plocha a dlažba', category: 'dlazba' },
  { image: '/images/works/work-08.jpg', title: 'Zámková dlažba a žulové kocky', category: 'dlazba' },
  { image: '/images/works/work-09.jpg', title: 'Dlažba pri zastávke MHD', category: 'dlazba' },
  { image: '/images/works/work-10.jpg', title: 'Chodník zo zámkovej dlažby', category: 'dlazba' },
  { image: '/images/works/work-11.jpg', title: 'Pokládka zámkovej dlažby', category: 'dlazba' },
  { image: '/images/works/work-12.jpg', title: 'Pokládka dlažby – tím v akcii', category: 'dlazba' },
  { image: '/images/works/work-13.jpg', title: 'Osadzovanie obrubníkov', category: 'obrubniky' },
  { image: '/images/works/work-14.jpg', title: 'Príprava a osadenie obrubníka', category: 'obrubniky' },
  { image: '/images/works/work-15.jpg', title: 'Obrubníky a žulové kocky', category: 'obrubniky' },
  { image: '/images/works/work-16.jpg', title: 'Zemné a prípravné práce', category: 'zemne' },
]

export type Review = {
  name: string
  rating: number
  text: string
  date: string
}

// Ukážkové recenzie (zobrazené vždy). Nové recenzie od návštevníkov
// sa ukladajú v prehliadači (localStorage) a pridávajú sa pred tieto.
export const seedReviews: Review[] = [
  {
    name: 'Martin K.',
    rating: 5,
    text: 'Vynikajúca práca! Položili nám príjazd zo zámkovej dlažby rýchlo a veľmi čisto. Všetko dokonale rovné, odporúčam.',
    date: '2024-09-12',
  },
  {
    name: 'Zuzana H.',
    rating: 5,
    text: 'Profesionálny prístup od obhliadky až po odovzdanie. Obrubníky a chodník vyzerajú skvele, termín dodržali.',
    date: '2024-07-28',
  },
  {
    name: 'Peter Novák',
    rating: 4,
    text: 'Spokojnosť s realizáciou parkovacej plochy. Komunikácia bezproblémová, cena férová.',
    date: '2024-06-03',
  },
]
