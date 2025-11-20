"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ProjectsPreview } from "@/components/sections/projects-preview"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <ServicesPreview />
      <ProjectsPreview />
      <CTASection />
    </motion.div>
  )
}
