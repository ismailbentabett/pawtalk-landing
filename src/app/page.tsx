import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AdminDashboardPreview from '@/components/AdminDashboardPreview'
import CtaSection from '@/components/CtaSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <AdminDashboardPreview />
      <CtaSection />
    </main>
  )
}

