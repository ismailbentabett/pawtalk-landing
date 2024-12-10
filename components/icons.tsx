import { LucideIcon, Moon, SunMedium, Twitter } from 'lucide-react'
import { JSX, SVGProps } from 'react'

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 2 2 3 1.5-1 2-1.5 2-3a3 3 0 0 0-3-3z" />
      <path d="M19 8a3 3 0 0 0-3 3c0 1.5 1.5 2 2 3 1.5-1 2-1.5 2-3a3 3 0 0 0-3-3z" />
      <path d="M5 8a3 3 0 0 0-3 3c0 1.5 1.5 2 2 3 1.5-1 2-1.5 2-3a3 3 0 0 0-3-3z" />
      <path d="M12 14a3 3 0 0 0-3 3c0 1.5 1.5 2 2 3 1.5-1 2-1.5 2-3a3 3 0 0 0-3-3z" />
    </svg>
  ),
}

