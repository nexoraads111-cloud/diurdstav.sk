import { CtaProject } from './components/CtaProject'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Realizations } from './components/Realizations'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Realizations />
        <CtaProject />
      </main>
      <Footer />
    </>
  )
}
