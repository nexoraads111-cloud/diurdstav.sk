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

export const navLinks = [
  { href: '#domov', label: 'DOMOV' },
  { href: '#o-nas', label: 'O NÁS' },
  { href: '#sluzby', label: 'SLUŽBY' },
  { href: '#referencie', label: 'REFERENCIE' },
  { href: '#kontakt', label: 'KONTAKT' },
]

export const services = [
  {
    icon: HouseIcon,
    title: 'NOVOSTAVBY',
    subtitle: 'Rodinné domy na kľúč',
    text: 'Kompletná výstavba rodinných domov od základov až po odovzdanie.',
    image: '/images/new-builds.jpg',
  },
  {
    icon: RenovateIcon,
    title: 'REKONŠTRUKCIE',
    subtitle: 'Bytov, domov a objektov',
    text: 'Rekonštrukcie bytov, domov a komerčných objektov podľa vašich predstáv.',
    image: '/images/renovations.jpg',
  },
  {
    icon: RoofIcon,
    title: 'STRECHY',
    subtitle: 'Kompletné strešné systémy',
    text: 'Realizujeme všetky typy striech vrátane krytiny, izolácie a klampiarskych prác.',
    image: '/images/roofs.jpg',
  },
  {
    icon: PlasterIcon,
    title: 'OMIETKY A FASÁDY',
    subtitle: 'Vnútorné a vonkajšie úpravy',
    text: 'Vnútorné omietky, fasádne omietky a kompletné povrchové úpravy.',
    image: '/images/facades.jpg',
  },
  {
    icon: WindowIcon,
    title: 'ZATEPĽOVANIE',
    subtitle: 'Úspora energie a moderný vzhľad',
    text: 'Zatepľovacie systémy, fasádne obklady a úspora nákladov na energie.',
    image: '/images/insulation.jpg',
  },
  {
    icon: GridIcon,
    title: 'ZÁMKOVÁ DLAŽBA',
    subtitle: 'Chodníky, príjazdy, terasy',
    text: 'Pokládka zámkovej dlažby na chodníky, príjazdové cesty, terasy a okolie domu – vrátane podkladových vrstiev, obrubníkov a odvodnenia.',
    image: '/images/paving.jpg',
  },
  {
    icon: WallIcon,
    title: 'BETÓNOVÉ PLOTY',
    subtitle: 'Odolné a bezúdržbové riešenia',
    text: 'Montáž betónových plotov rôznych vzorov a výšok – odolné a bezúdržbové oplotenie pre vaše súkromie a bezpečnosť.',
    image: '/images/fence-concrete.jpg',
  },
  {
    icon: FenceIcon,
    title: '3D PLOTY',
    subtitle: 'Moderné panelové oplotenia',
    text: '3D panelové ploty (panelové oplotenie) – pevné, moderné a nenáročné na údržbu, ideálne pre rodinné domy aj firemné areály.',
    image: '/images/fence-3d.jpg',
  },
  {
    icon: LeafIcon,
    title: 'ZÁHRADNÉ PRÁCE',
    subtitle: 'Úprava a realizácia exteriéru',
    text: 'Kompletné záhradné a exteriérové práce – úprava terénu, výsadba, zakladanie trávnikov a realizácia okolia domu.',
    image: '/images/garden.jpg',
  },
]

export const servicesIntro =
  'Sme komplexná stavebná firma – od hrubej stavby cez rekonštrukcie a strechy až po dlažby, ploty a úpravu okolia. Všetko zastrešíme pod jednou strechou, aby ste nemuseli riešiť viacero firiem.'

export const reasons = [
  { icon: AwardIcon, text: 'Dlhoročné skúsenosti' },
  { icon: WallIcon, text: 'Kvalitné materiály a precízna práca' },
  { icon: ClockIcon, text: 'Dodržiavame termíny' },
  { icon: UsersIcon, text: 'Individuálny prístup ku každému projektu' },
  { icon: TagIcon, text: 'Férové ceny a transparentnosť' },
]

// Kategórie pre filter v sekcii „Naše realizácie".
export const workCategories = [
  { id: 'vsetko', label: 'Všetko' },
  { id: 'novostavby', label: 'Novostavby' },
  { id: 'rekonstrukcie', label: 'Rekonštrukcie' },
  { id: 'strechy', label: 'Strechy' },
  { id: 'fasady', label: 'Omietky a fasády' },
  { id: 'zateplovanie', label: 'Zatepľovanie' },
  { id: 'dlazba', label: 'Zámková dlažba' },
  { id: 'ploty-betonove', label: 'Betónové ploty' },
  { id: 'ploty-3d', label: '3D ploty' },
  { id: 'zahrada', label: 'Záhradné práce' },
] as const

export type WorkCategory = (typeof workCategories)[number]['id']

// Realizácie (referencie). FOTKY SÚ DOČASNÉ – nahraďte ich vlastnými fotografiami:
// stačí prepísať súbory v priečinku `public/images/` (rovnaké názvy) alebo zmeniť cesty nižšie.
export const works: { image: string; title: string; category: WorkCategory }[] = [
  { image: '/images/new-builds.jpg', title: 'Rodinný dom na kľúč', category: 'novostavby' },
  { image: '/images/gallery-1.jpg', title: 'Novostavba s terasou', category: 'novostavby' },
  { image: '/images/gallery-2.jpg', title: 'Moderná vila', category: 'novostavby' },
  { image: '/images/gallery-3.jpg', title: 'Projektová príprava', category: 'novostavby' },
  { image: '/images/renovations.jpg', title: 'Rekonštrukcia interiéru', category: 'rekonstrukcie' },
  { image: '/images/gallery-4.jpg', title: 'Prestavba obývačky', category: 'rekonstrukcie' },
  { image: '/images/gallery-5.jpg', title: 'Rekonštrukcia izby', category: 'rekonstrukcie' },
  { image: '/images/roofs.jpg', title: 'Sedlová strecha', category: 'strechy' },
  { image: '/images/facades.jpg', title: 'Fasáda rodinného domu', category: 'fasady' },
  { image: '/images/insulation.jpg', title: 'Zateplenie bytového domu', category: 'zateplovanie' },
  { image: '/images/paving.jpg', title: 'Zámková dlažba – príjazd', category: 'dlazba' },
  { image: '/images/fence-concrete.jpg', title: 'Betónový plot', category: 'ploty-betonove' },
  { image: '/images/fence-3d.jpg', title: '3D panelový plot', category: 'ploty-3d' },
  { image: '/images/garden.jpg', title: 'Úprava záhrady', category: 'zahrada' },
]
