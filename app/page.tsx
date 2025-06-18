import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Process from '@/components/Process'
import Impact from '@/components/Impact'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Process />
      <Features />
      <Impact />
      <CTA />
      <Footer />
    </main>
  )
}