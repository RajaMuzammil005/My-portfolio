"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from "lucide-react"

const projectDetails = {
  1: {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce platform built with the MERN stack, featuring a modern user interface, secure payment processing, inventory management, and a powerful admin dashboard. The platform supports multiple payment methods, real-time inventory updates, and detailed analytics.",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full-Stack",
    duration: "3 months",
    team: "Solo Project",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Stripe payment integration",
      "Order management system",
      "Admin dashboard for inventory management",
      "Real-time notifications",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state for shopping cart",
      "Optimizing database queries for large product catalogs",
      "Creating an intuitive admin interface",
    ],
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  2: {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    longDescription:
      "A modern task management application designed for teams to collaborate effectively. Built with Next.js and Socket.io for real-time updates, featuring drag-and-drop functionality, team management, and comprehensive project tracking.",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full-Stack",
    duration: "4 months",
    team: "2 Developers",
    features: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task management",
      "Team member assignment and notifications",
      "Project timeline and milestone tracking",
      "File attachments and comments",
      "Custom project templates",
      "Time tracking and reporting",
      "Integration with popular tools",
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Creating smooth drag-and-drop interactions",
      "Managing complex project hierarchies",
      "Optimizing performance for large datasets",
    ],
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  3: {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and reporting features.",
    longDescription:
      "A comprehensive social media analytics dashboard that aggregates data from multiple platforms, providing insights through interactive charts and reports. Built with React and Chart.js for dynamic data visualization.",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Express", "MongoDB", "Chart.js", "Material-UI"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Dashboard",
    duration: "2 months",
    team: "Solo Project",
    features: [
      "Multi-platform social media integration",
      "Interactive data visualizations",
      "Custom report generation",
      "Scheduled post management",
      "Engagement analytics",
      "Competitor analysis",
      "Export functionality",
      "Real-time data updates",
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Creating responsive data visualizations",
      "Handling large datasets efficiently",
      "Implementing real-time data updates",
    ],
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[Number.parseInt(params.id) as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
                <p className="text-xl text-gray-600 mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{project.team}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link href={project.demo}>
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href={project.github}>
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{project.longDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Code className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index} className="p-4">
                      <p className="text-gray-700">{challenge}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <Card className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href={project.demo}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                      <Link href={project.github}>
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                      <Link href="/contact">Discuss Similar Project</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
