// src/app/components/Footer.tsx

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Noorvia Natures</h3>
          <p className="text-sm text-gray-400">
            Your trusted brand for organic, herbal care and wellness products.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/return-policy" className="hover:text-white">Return Policy</Link></li>
            <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-300">Email: noorvianatures@gmail.com</p>
          <p className="text-sm text-gray-300">Phone: +92 300 0000000</p>
          <p className="text-sm text-gray-300">Address: Punjab, Pakistan</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Noorvia Natures. All rights reserved.
      </div>
    </footer>
  )
}

