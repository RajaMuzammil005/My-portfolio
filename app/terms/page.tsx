"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            <p className="text-lg text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-6">
                I provide web development services including but not limited to full-stack development, API development,
                UI/UX design, and technical consulting. All services are provided on a project basis unless otherwise
                agreed upon.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-600 mb-6">
                Payment terms will be specified in individual project agreements. Generally, a deposit is required
                before work begins, with the remainder due upon project completion or according to agreed milestones.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                Upon full payment, clients will own the rights to the final deliverables. However, I retain the right to
                showcase the work in my portfolio and use general knowledge gained during the project for future work.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="text-gray-600 mb-6">
                I respect client confidentiality and will not disclose any confidential information shared during the
                course of our working relationship without explicit permission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                My liability is limited to the amount paid for services. I am not responsible for any indirect,
                incidental, or consequential damages arising from the use of my services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600 mb-6">
                Either party may terminate the agreement with written notice. In case of termination, payment will be
                due for work completed up to the termination date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                I reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting on this website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms & Conditions, please contact me at john.doe@example.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
