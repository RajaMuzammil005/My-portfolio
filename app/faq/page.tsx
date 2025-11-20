"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with modern tools like Next.js, TypeScript, Tailwind CSS, and various cloud platforms. I also work with PostgreSQL, Redis, and have experience with DevOps tools like Docker and AWS.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple landing page might take 1-2 weeks, while a full-stack application could take 2-6 months. I provide detailed timelines during the initial consultation based on your specific requirements.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes, I work with clients worldwide remotely. I'm experienced in remote collaboration using tools like Slack, Zoom, and project management platforms. I maintain regular communication and provide updates throughout the development process.",
  },
  {
    question: "What is your development process?",
    answer:
      "My process includes: 1) Initial consultation and requirements gathering, 2) Project planning and wireframing, 3) Design and development in iterative sprints, 4) Testing and quality assurance, 5) Deployment and launch, 6) Post-launch support and maintenance.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, I offer ongoing maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. I believe in building long-term relationships with my clients.",
  },
  {
    question: "Can you help with existing projects or only new ones?",
    answer:
      "I work on both new projects and existing ones. I can help with code reviews, bug fixes, feature additions, performance optimization, and modernizing legacy applications. I'm comfortable working with existing codebases.",
  },
  {
    question: "What are your rates and payment terms?",
    answer:
      "My rates vary depending on project complexity and timeline. I offer both fixed-price projects and hourly rates. Payment terms are typically 50% upfront and 50% upon completion for smaller projects, with milestone-based payments for larger projects.",
  },
  {
    question: "Do you sign NDAs and work contracts?",
    answer:
      "Absolutely. I understand the importance of confidentiality and intellectual property protection. I'm happy to sign NDAs and work with formal contracts to ensure both parties are protected and expectations are clear.",
  },
  {
    question: "Can you help with deployment and hosting?",
    answer:
      "Yes, I can help with deployment and hosting setup. I have experience with various platforms including Vercel, Netlify, AWS, DigitalOcean, and Heroku. I can also set up CI/CD pipelines for automated deployments.",
  },
  {
    question: "How do you ensure code quality and best practices?",
    answer:
      "I follow industry best practices including code reviews, automated testing, proper documentation, version control with Git, and adherence to coding standards. I also use tools like ESLint, Prettier, and TypeScript to maintain code quality.",
  },
]

export default function FAQPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about my development services, process, and how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
