import { About } from './components/About'
import { CtaProject } from './components/CtaProject'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Realizations } from './components/Realizations'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WhyUs } from './components/WhyUs'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Realizations />
        <Reviews />
        <CtaProject />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
