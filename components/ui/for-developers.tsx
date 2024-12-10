import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function ForDevelopers() {
  return (
    <Section id="for-developers" className="bg-muted/50 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">For Developers</h2>
        <p className="text-xl text-muted-foreground mb-8">
          PawTalk is built with modern technologies to ensure scalability and performance.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-background p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
          <p className="text-muted-foreground mb-4">Built with React Native and Firebase for a seamless mobile experience.</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="https://github.com/ismailbentabett/pawtalk-mobile" target="_blank" rel="noopener noreferrer">
              View Source <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
          <p className="text-muted-foreground mb-4">Powered by React for a responsive and interactive admin experience.</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="https://github.com/ismailbentabett/pawtalk-dashboard" target="_blank" rel="noopener noreferrer">
              View Source <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
          <p className="text-muted-foreground mb-4">Created with Next.js for optimal performance and SEO.</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="https://github.com/ismailbentabett/pawtalk-landing" target="_blank" rel="noopener noreferrer">
              View Source <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}

