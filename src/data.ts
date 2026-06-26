import {
  AwardIcon,
  ClockIcon,
  FenceIcon,
  GridIcon,
  HouseIcon,
  LeafIcon,
  PlasterIcon,
  RenovateIcon,
  RoofIcon,
  TagIcon,
  UsersIcon,
  WallIcon,
  WindowIcon,
} from './components/icons'

export const company = {
  name: 'D-A DIURDSTAV',
  legal: 's.r.o.',
  subtitle: 'Stavebné Práce',
  phone: '+421 950 480 672',
  whatsapp: '+421 944 467 935',
  email: 'info@diurdstav.sk',
  web: 'www.diurdstav.sk',
  year: 2024,
}

// Číslo pre WhatsApp odkaz (iba číslice, medzinárodný formát).
export const whatsappDigits = '421944467935'

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
    text: 'Pokládka zámkovej dlažby na chodníky, príjazdové cesty, terasy a okolie domu – vrátane podkladových vrstiev a odvodnenia.',
    image: '/images/works/work-01.jpg',
  },
  {
    icon: WallIcon,
    title: 'OBRUBNÍKY',
    subtitle: 'Cestné a záhonové obrubníky',
    text: 'Presné osadzovanie betónových a žulových obrubníkov do betónového lôžka pre dokonalé a trvácne ohraničenie plôch.',
    image: '/images/works/work-13.jpg',
  },
  {
    icon: LeafIcon,
    title: 'ŽULOVÉ KOCKY',
    subtitle: 'Dlažba z prírodného kameňa',
    text: 'Pokládka žulových kociek a prírodného kameňa – odolné a estetické riešenie pre vjazdy, námestia a okolie budov.',
    image: '/images/works/work-08.jpg',
  },
  {
    icon: HouseIcon,
    title: 'SPEVNENÉ PLOCHY',
    subtitle: 'Parkoviská a vjazdy',
    text: 'Realizácia spevnených plôch, parkovísk a príjazdových ciest s dôrazom na únosnosť a správne spádovanie.',
    image: '/images/works/work-07.jpg',
  },
  {
    icon: RenovateIcon,
    title: 'ZEMNÉ PRÁCE',
    subtitle: 'Výkopy a príprava podkladu',
    text: 'Výkopové a prípravné práce, úprava terénu, zhutnenie podkladu a odvodnenie pred samotnou pokládkou.',
    image: '/images/works/work-16.jpg',
  },
  {
    icon: RoofIcon,
    title: 'CHODNÍKY A CESTY',
    subtitle: 'Mestská infraštruktúra',
    text: 'Výstavba a rekonštrukcia chodníkov vrátane vodiacich a varovných pásov pre bezbariérový pohyb.',
    image: '/images/works/work-03.jpg',
  },
  {
    icon: PlasterIcon,
    title: 'REKONŠTRUKCIE',
    subtitle: 'Obnova spevnených plôch',
    text: 'Rekonštrukcie existujúcich chodníkov, vjazdov a plôch – výmena povrchu, obrubníkov a odvodnenia.',
    image: '/images/works/work-02.jpg',
  },
  {
    icon: WindowIcon,
    title: 'ODVODNENIE',
    subtitle: 'Žľaby a vpuste',
    text: 'Osadenie odvodňovacích žľabov, vpustí a líniových systémov, aby na vašich plochách nestála voda.',
    image: '/images/works/work-06.jpg',
  },
  {
    icon: FenceIcon,
    title: 'OPLOTENIA',
    subtitle: 'Ploty a oplotenie pozemkov',
    text: 'Betónové aj panelové (3D) ploty a oplotenia pozemkov – pevné, moderné a bezúdržbové riešenia.',
    image: '/images/fence-3d.jpg',
  },
]

export const servicesIntro =
  'Špecializujeme sa na zámkovú dlažbu, obrubníky, žulové kocky a spevnené plochy. Postaráme sa o celú realizáciu – od zemných prác a podkladu cez odvodnenie až po finálnu pokládku.'

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
    'D-A DIURDSTAV s.r.o. je tím skúsených dlaždičov a stavbárov, pre ktorých je každá realizácia vizitkou. Venujeme sa zámkovej dlažbe, obrubníkom, žulovým kockám a spevneným plochám.',
    'Pracujeme precízne, čisto a v dohodnutých termínoch. Postaráme sa o celý proces – od obhliadky a návrhu cez zemné práce a podklad až po finálnu pokládku a upratanie po sebe.',
  ],
  stats: [
    { value: '10+', label: 'rokov skúseností' },
    { value: '250+', label: 'dokončených realizácií' },
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
