"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Settings, Shield, Smartphone } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Complete MERN stack applications with modern UI/UX",
    color: "text-blue-600",
  },
 
  {
    icon: Smartphone,
    title: "Responsive UI Development",
    description: "Mobile-first React applications with Tailwind CSS",
    color: "text-purple-600",
  },
  {
    icon: Settings,
    title: "Admin Dashboard & CMS",
    description: "Custom admin panels and content management systems",
    color: "text-orange-600",
  },
  {
    icon: Shield,
    title: "DevOps & Deployment",
    description: "CI/CD pipelines and cloud deployment solutions",
    color: "text-red-600",
  },
  {
    icon: Code,
    title: "Code Review & Consulting",
    description: "Technical consulting and code optimization services",
    color: "text-indigo-600",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive development services to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
