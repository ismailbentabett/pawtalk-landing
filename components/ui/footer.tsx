"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart } from 'lucide-react'
import { Icons } from "@/components/icons"

import { siteConfig } from "@/config/site"

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.creator}
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/ismailbentabett/pawtalk-landing"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

