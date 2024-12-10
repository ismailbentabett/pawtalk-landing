import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { Hero } from "@/components/ui/hero"
import { Features } from "@/components/ui/features"
import { HowItWorks } from "@/components/ui/how-it-works"
import { Testimonials } from "@/components/ui/testimonials"
import { CTA } from "@/components/ui/cta"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import { ForDevelopers } from "@/components/ui/for-developers"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <ForDevelopers />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

