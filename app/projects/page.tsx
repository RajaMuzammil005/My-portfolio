"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full-Stack",
  },
  
  
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Property listing platform with search filters, virtual tours, and agent management system.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Mapbox"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full-Stack",
  },
,
  {
    id: 6,
    title: "Restaurant Ordering System",
    description: "Online food ordering system with menu management, order tracking, and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Express", "MongoDB", "PayPal", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Mobile",
  },
]

export default function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, showcasing my skills in full-stack development, UI/UX
              design, and modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                   
                    
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Link href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button asChild size="sm" className="flex-1">
                        <Link href={`/projects/${project.id}`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
