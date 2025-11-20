"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Code, Database, Globe, Settings, Shield, Smartphone } from "lucide-react"

const serviceDetails = {
  "full-stack-development": {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Complete MERN stack applications with modern UI/UX design and robust backend architecture.",
    longDescription:
      "I specialize in building complete web applications from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js). My approach focuses on creating scalable, maintainable, and user-friendly applications that meet your business requirements.",
    features: [
      "Custom React/Next.js frontend development",
      "Node.js/Express.js backend architecture",
      "MongoDB/PostgreSQL database design",
      "RESTful API development and integration",
      "User authentication and authorization",
      "Responsive design for all devices",
      "Performance optimization",
      "Testing and quality assurance",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    useCases: [
      "E-commerce platforms",
      "Social media applications",
      "Business management systems",
      "Content management platforms",
      "Real-time collaboration tools",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  "api-development": {
    icon: Database,
    title: "REST API Development",
    description: "Scalable and secure backend APIs with comprehensive documentation and testing.",
    longDescription:
      "I create robust, scalable REST APIs that serve as the backbone of modern web applications. My APIs are designed with security, performance, and maintainability in mind.",
    features: [
      "RESTful API architecture design",
      "JWT authentication and authorization",
      "Database integration and optimization",
      "Comprehensive API documentation",
      "Rate limiting and security measures",
      "Error handling and logging",
      "API testing and validation",
      "Version control and migration strategies",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT", "Swagger", "Jest", "Postman"],
    useCases: [
      "Mobile app backends",
      "Third-party integrations",
      "Microservices architecture",
      "Data synchronization systems",
      "Payment processing APIs",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  "responsive-ui": {
    icon: Smartphone,
    title: "Responsive UI Development",
    description: "Mobile-first React applications with modern design systems and accessibility features.",
    longDescription:
      "I build responsive, accessible user interfaces that work seamlessly across all devices. My focus is on creating intuitive user experiences with modern design principles.",
    features: [
      "Mobile-first responsive design",
      "Modern CSS with Tailwind CSS",
      "Component-based architecture",
      "Accessibility (WCAG) compliance",
      "Cross-browser compatibility",
      "Performance optimization",
      "Interactive animations",
      "Design system implementation",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Styled Components",
      "SASS",
      "Figma",
      "Storybook",
    ],
    useCases: [
      "Corporate websites",
      "Landing pages",
      "Web applications",
      "Progressive Web Apps (PWAs)",
      "Design system implementations",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  "admin-dashboard": {
    icon: Settings,
    title: "Admin Dashboard & CMS",
    description: "Custom admin panels and content management systems with role-based access control.",
    longDescription:
      "I develop comprehensive admin dashboards and content management systems that give you full control over your application data and user management.",
    features: [
      "User management and roles",
      "Content management interface",
      "Analytics and reporting",
      "Role-based access control",
      "Data visualization",
      "Bulk operations",
      "Export/import functionality",
      "Activity logging and audit trails",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Chart.js", "Material-UI", "React Table", "Socket.io"],
    useCases: [
      "Business management systems",
      "Content management platforms",
      "E-commerce admin panels",
      "User management systems",
      "Analytics dashboards",
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  "devops-deployment": {
    icon: Shield,
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, cloud deployment, and infrastructure management for scalable applications.",
    longDescription:
      "I help you deploy and maintain your applications with modern DevOps practices, ensuring reliability, scalability, and security in production environments.",
    features: [
      "CI/CD pipeline setup",
      "Cloud deployment (AWS, Vercel, Netlify)",
      "Docker containerization",
      "Environment configuration",
      "Monitoring and logging",
      "Automated testing",
      "Security best practices",
      "Performance monitoring",
    ],
    technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx", "PM2", "MongoDB Atlas", "Cloudflare"],
    useCases: [
      "Production deployments",
      "Staging environments",
      "Automated testing pipelines",
      "Infrastructure scaling",
      "Security implementations",
    ],
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  consulting: {
    icon: Code,
    title: "Code Review & Consulting",
    description: "Technical consulting, code optimization, and architecture review for existing projects.",
    longDescription:
      "I provide expert technical consulting to help improve your existing codebase, optimize performance, and implement best practices for long-term maintainability.",
    features: [
      "Code review and analysis",
      "Performance optimization",
      "Architecture assessment",
      "Best practices implementation",
      "Security audit",
      "Refactoring strategies",
      "Team mentoring",
      "Technical documentation",
    ],
    technologies: ["Various based on project", "Code analysis tools", "Performance profilers", "Security scanners"],
    useCases: [
      "Legacy code modernization",
      "Performance improvements",
      "Security enhancements",
      "Team training",
      "Architecture planning",
    ],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className={`py-20 ${service.bgColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <service.icon className={`h-16 w-16 ${service.color}`} />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{service.title}</h1>
                <p className="text-xl text-gray-600">{service.description}</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.longDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.useCases.map((useCase, index) => (
                    <Card key={index} className="p-4">
                      <p className="font-medium text-gray-900">{useCase}</p>
                    </Card>
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
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                      <Link href="/projects">View Related Projects</Link>
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
