"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Settings, Shield, Smartphone } from "lucide-react"

const services = [
 
  {
    id: "responsive-ui",
    icon: Smartphone,
    title: "Responsive UI Development",
    description: "Mobile-first React applications with modern design systems and accessibility features.",
    features: ["Mobile-First Design", "Tailwind CSS", "Component Libraries", "Accessibility (WCAG)"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  
  {
    id: "devops-deployment",
    icon: Shield,
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, cloud deployment, and infrastructure management for scalable applications.",
    features: ["CI/CD Pipelines", "Cloud Deployment", "Docker Containers", "Monitoring & Logging"],
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "consulting",
    icon: Code,
    title: "Code Review & Consulting",
    description: "Technical consulting, code optimization, and architecture review for existing projects.",
    features: ["Code Review", "Performance Optimization", "Architecture Planning", "Best Practices"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

export default function ServicesPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive development services to bring your ideas to life with
              modern technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full hover:shadow-lg transition-all ${service.bgColor} border-0`}>
                  <CardHeader>
                    <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-sm">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/services/${service.id}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
