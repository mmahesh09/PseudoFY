'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const blogs = [
  {
    title: 'How PseudoFY Transforms Code into Clarity',
    description: 'Discover how our tool converts complex code into readable pseudocode using parsing and AI.',
    date: 'April 15, 2025',
    slug: '/blog/pseudofy-transforms-code'
  },
  {
    title: 'Supporting Multiple Languages in PseudoFY',
    description: 'A look into how we handle syntax and logic for Python, C++, Java, and more.',
    date: 'March 30, 2025',
    slug: '/blog/language-support'
  },
  {
    title: 'The Future of Pseudocode: AI-Powered Generation',
    description: 'What’s next for pseudocode tools and how AI is leading the charge.',
    date: 'March 10, 2025',
    slug: '/blog/future-of-pseudocode'
  }
]

const Page = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          Latest Blog Posts
        </motion.h2>
        <p className="text-gray-400 text-sm">
          Insights, guides, and updates from the team behind PseudoFY.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_20px_#9333ea33] transition-shadow duration-300"
          >
            <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{blog.description}</p>
            <Link
              href={blog.slug}
              className="text-sm text-purple-400 hover:underline transition-all duration-150"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Page
