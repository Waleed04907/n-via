'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const [product, setProduct] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    const productFromURL = searchParams.get('product')
    if (productFromURL) {
      setProduct(productFromURL)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Order Details:
🛍 Product: ${product}
👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}`

    const phoneNumber = '923136548388' // Yahan apna WhatsApp number lagayen
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Product</label>
          <input
            type="text"
            value={product}
            readOnly
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Order on WhatsApp
        </button>
      </form>
    </div>
  )
}
