import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Process from '@/components/sections/home/Process'
import Benefits from '@/components/sections/home/Benefits'
import Testimonials from '@/components/sections/home/Testimonials'
import Pricing from '@/components/sections/home/Pricing'
import Cta from '@/components/sections/home/Cta'
import About from '@/components/sections/home/About'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="cta">
        <Cta />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  )
}