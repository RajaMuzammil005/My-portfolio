"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable MERN Stack Applications",
    excerpt:
      "Learn the best practices for building scalable full-stack applications using MongoDB, Express.js, React, and Node.js.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Full-Stack",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "Raja Muzammil",
  },
  {
    id: 2,
    title: "Modern React Patterns and Best Practices",
    excerpt:
      "Explore advanced React patterns including custom hooks, context optimization, and performance techniques.",
    image: "/placeholder.svg?height=200&width=400",
    category: "React",
    date: "2024-01-10",
    readTime: "6 min read",
    author: "Raja Muzammil",
  },
  
 
  {
    id: 5,
    title: "Deployment Strategies for Modern Web Apps",
    excerpt: "Learn about CI/CD pipelines, containerization, and cloud deployment for your web applications.",
    image: "/placeholder.svg?height=200&width=400",
    category: "DevOps",
    date: "2023-12-20",
    readTime: "9 min read",
    author: "Raja Muzammil",
  },
  {
    id: 6,
    title: "TypeScript in Full-Stack Development",
    excerpt: "Leverage TypeScript for better code quality and developer experience in both frontend and backend.",
    image: "/placeholder.svg?height=200&width=400",
    category: "TypeScript",
    date: "2023-12-15",
    readTime: "7 min read",
    author: "Raja Muzammil",
  },
]

export default function BlogPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on modern web development, MERN stack, and software engineering best
              practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
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
