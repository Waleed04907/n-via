'use client'
import { useState } from 'react'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const phone = '923136548388' // 👈 Your WhatsApp number without '+'
  const text = `🌿 New Contact Message:\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank')
}

  return (
    <section className="pt-2 pb-20 bg-white min-h-screen">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="bg-green-50 p-6 rounded-xl shadow space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded transition duration-300"
          >
            📤 Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
