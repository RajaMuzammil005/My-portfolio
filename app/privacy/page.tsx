"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-lg text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                I collect information you provide directly to me, such as when you contact me through the contact form,
                email, or during our professional interactions. This may include your name, email address, phone number,
                and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">I use the information I collect to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Communicate with you about projects and services</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Improve my website and services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                I do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. I may share information with trusted service providers who
                assist in operating my website or conducting business, provided they agree to keep this information
                confidential.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                I implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                This website may use cookies to enhance user experience. Cookies are small files that a site or its
                service provider transfers to your computer's hard drive through your web browser. You can choose to
                disable cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                This website may contain links to third-party websites. I am not responsible for the privacy practices
                or content of these external sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of
                receiving marketing communications from me at any time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                I may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact me at john.doe@example.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
