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
  whatsapp: '+421 950 480 672',
  email: 'durdstav@gmail.com',
  web: 'www.diurdstav.sk',
  ico: '57 709 556',
  region: 'Bratislava a okolie',
  year: 2024,
}

// Číslo pre WhatsApp odkaz (iba číslice, medzinárodný formát).
export const whatsappDigits = '421950480672'

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
  {
    icon: HouseIcon,
    title: 'NOVOSTAVBY',
    subtitle: 'Rodinné domy na kľúč',
    text: 'Výstavba rodinných domov a objektov od základov až po odovzdanie.',
  },
  {
    icon: RenovateIcon,
    title: 'REKONŠTRUKCIE',
    subtitle: 'Bytov, domov a objektov',
    text: 'Rekonštrukcie bytov, domov a komerčných priestorov podľa vašich predstáv.',
  },
  {
    icon: RoofIcon,
    title: 'STRECHY',
    subtitle: 'Kompletné strešné systémy',
    text: 'Realizácia striech vrátane krytiny, izolácie a klampiarskych prác.',
  },
  {
    icon: PlasterIcon,
    title: 'OMIETKY A FASÁDY',
    subtitle: 'Vnútorné a vonkajšie úpravy',
    text: 'Vnútorné omietky, fasádne omietky a kompletné povrchové úpravy.',
  },
  {
    icon: WindowIcon,
    title: 'ZATEPĽOVANIE',
    subtitle: 'Úspora energie a moderný vzhľad',
    text: 'Zatepľovacie systémy a fasádne obklady – úspora nákladov na energie.',
  },
]

export const servicesIntro =
  'Ponúkame komplexné stavebné a dlaždičské práce – od zámkovej dlažby a plotov cez záhradné práce až po novostavby, rekonštrukcie, strechy a zateplenie.'

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
  { id: 'zatravnovacia', label: 'Zatrávňovacia dlažba' },
  { id: 'obrubniky', label: 'Obrubníky' },
  { id: 'zemne', label: 'Zemné práce' },
] as const

export type WorkCategory = (typeof workCategories)[number]['id']

// Reálne fotografie realizácií (priečinok public/images/works).
export const works: { image: string; title: string; category: Exclude<WorkCategory, 'vsetko'> }[] = [
  { image: '/images/works/work-19.jpg', title: 'Zatrávňovacia dlažba – parkovacia plocha', category: 'zatravnovacia' },
  { image: '/images/works/work-20.jpg', title: 'Pokládka zatrávňovacej dlažby', category: 'zatravnovacia' },
  { image: '/images/works/work-21.jpg', title: 'Zatrávňovacia dlažba a štrkové lôžko', category: 'zatravnovacia' },
  { image: '/images/works/work-24.jpg', title: 'Zatrávňovacia dlažba so štrkovou výplňou', category: 'zatravnovacia' },
  { image: '/images/works/work-17.jpg', title: 'Zatrávňovacia dlažba a chodník pri dome', category: 'zatravnovacia' },
  { image: '/images/works/work-18.jpg', title: 'Pokládka zámkovej dlažby pri budove', category: 'dlazba' },
  { image: '/images/works/work-22.jpg', title: 'Chodník zo zámkovej dlažby', category: 'dlazba' },
  { image: '/images/works/work-23.jpg', title: 'Spevnená plocha a zatrávňovačka', category: 'dlazba' },
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

// Žiadne ukážkové recenzie – zobrazujú sa iba reálne (po schválení).
export const seedReviews: Review[] = []
