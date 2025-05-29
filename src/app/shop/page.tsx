'use client'

import Link from 'next/link'

const products = [
  {
    name: 'Herbal Hair Oil',
    slug: 'herbal-hair-oil',
    price: 'PKR 1,200',
    image: '/products/hair-oil.jpg',
  },
  {
    name: 'Organic Face Serum',
    slug: 'organic-face-serum',
    price: 'PKR 1,800',
    image: '/products/face-serum.jpg',
  },
  {
    name: 'Neem Soap',
    slug: 'neem-soap',
    price: 'PKR 350',
    image: '/products/neem-soap.jpg',
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">🛍️ Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-green-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <Link href={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-800">{product.name}</h2>
              <p className="text-green-600 font-bold mt-2">{product.price}</p>
ok
              {/* Buy Now Button */}
              <Link href={`/checkout?product=${encodeURIComponent(product.name)}`}>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  🛒 Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
