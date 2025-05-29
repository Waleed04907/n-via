'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const products = [
  {
    id: 'herbal-hair-oil',
    name: 'Herbal Hair Oil',
    price: 'PKR 1,200',
    description: 'Natural oil for healthy hair',
    image: '/products/hair-oil.jpg',
  },
  // ...more products
]

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const found = products.find((p) => p.id === slug)
    setProduct(found)
  }, [slug])

  if (!product) return <div className="text-center py-10">Product not found.</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="mt-2 text-green-600 font-bold">{product.price}</p>

      <Link href={`/checkout?product=${encodeURIComponent(product.name)}`}>
        <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          🛒 Buy Now
        </button>
      </Link>
    </div>
  )
}
