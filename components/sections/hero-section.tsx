"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Server } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Front-End
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> WEB </span>
              Developer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I create modern, scalable websites using HTML, CSS, React, and Java Script. Let's build
              something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600 text-center"></p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Server className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">IT NETWORKING</h3>
              <p className="text-gray-600 text-center"></p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
