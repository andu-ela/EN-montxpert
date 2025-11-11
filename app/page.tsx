import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProjectsGallery } from "@/components/projects-gallery"
import { AboutSection } from "@/components/about-section"
import { Navigation } from "@/components/navigation"
import CTAConstruction from "@/components/CTAConstruction"

import MobileServiceSection from "@/components/mobile-service-section"

import Methodology from "@/components/Methodology"
import CTASection from "@/components/CTAArc"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
 <section id="devis">
  <CTASection />
</section>

      <ProjectsGallery />
      <AboutSection />
      <MobileServiceSection />
<CTAConstruction />
<Methodology />
<Footer />
    </main>
  )
}
