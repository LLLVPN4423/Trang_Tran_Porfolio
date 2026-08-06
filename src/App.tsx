import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { SalonTour } from './components/sections/SalonTour'
import { Lookbook } from './components/sections/Lookbook'
import { Services } from './components/sections/Services'
import { Contact } from './components/sections/Contact'
import { LanguageProvider } from './context/LanguageContext'
import { SmoothScrollProvider } from './components/layout/SmoothScrollProvider'
import { useScrollTriggerRefresh } from './hooks/useScrollTriggerRefresh'

function AppContent() {
  useScrollTriggerRefresh()

  return (
    <>
      <Navbar />
      <main className="bg-base">
        <Hero />
        <About />
        <SalonTour />
        <Lookbook />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <AppContent />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
