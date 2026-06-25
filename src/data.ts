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
    text: 'Kvalitné pokládky zámkovej dlažby na chodníky, príjazdy, terasy a okolie domu.',
    image: '/images/paving.jpg',
  },
  {
    icon: WallIcon,
    title: 'BETÓNOVÉ PLOTY',
    subtitle: 'Odolné a bezúdržbové riešenia',
    text: 'Betónové ploty rôznych vzorov a výšok pre vaše súkromie a bezpečnosť.',
    image: '/images/fence-concrete.jpg',
  },
  {
    icon: FenceIcon,
    title: '3D PLOTY',
    subtitle: 'Moderné panelové oplotenia',
    text: '3D panelové ploty sú moderné, odolné a nenáročné na údržbu.',
    image: '/images/fence-3d.jpg',
  },
  {
    icon: LeafIcon,
    title: 'ZÁHRADNÉ PRÁCE',
    subtitle: 'Úprava a realizácia exteriéru',
    text: 'Kompletné záhradné práce, úprava terénu, výsadba a realizácia exteriéru.',
    image: '/images/garden.jpg',
  },
]

export const reasons = [
  { icon: AwardIcon, text: 'Dlhoročné skúsenosti' },
  { icon: WallIcon, text: 'Kvalitné materiály a precízna práca' },
  { icon: ClockIcon, text: 'Dodržiavame termíny' },
  { icon: UsersIcon, text: 'Individuálny prístup ku každému projektu' },
  { icon: TagIcon, text: 'Férové ceny a transparentnosť' },
]

export const gallery = [
  '/images/gallery-1.jpg',
  '/images/paving.jpg',
  '/images/gallery-4.jpg',
  '/images/renovations.jpg',
  '/images/gallery-2.jpg',
  '/images/new-builds.jpg',
  '/images/gallery-5.jpg',
  '/images/roofs.jpg',
  '/images/gallery-3.jpg',
]
