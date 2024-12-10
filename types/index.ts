export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Testimonial {
  id: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

export interface SocialProof {
  metric: string
  value: string
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
  github?: string
  twitter?: string
  linkedin?: string
}

