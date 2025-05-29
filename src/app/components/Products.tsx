'use client'
import Link from 'next/link'

// Dummy product list
const products = [
  { id: 1, title: 'Organic Herbal Hair Oil', price: 'Rs. 799', image: '/hair-oil.jpeg' },
  { id: 2, title: 'Herbal Shampoo', price: 'Rs. 899', image: '/shampoo.jpeg' },
  { id: 3, title: 'Herbal cream', price: 'Rs. 899', image: '/cream.jpeg' },
]

export default function ProductListPage() {
  return (
    <section className="p-8 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Shop Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <Link href={`/checkout?product=${encodeURIComponent(product.title)}`}>
                <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
