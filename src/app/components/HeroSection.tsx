'use client'

import Link from 'next/link'

const HeroSection = () => (
  <section className="relative bg-green-50 py-24 px-6 text-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-white opacity-20 z-0" />

    <div className="relative z-10 max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6 leading-tight">
        Discover Pure & Natural Wellness
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Nourish your beauty with organic care, made from nature’s finest 
      </p>

      <Link href="/shop">
        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
           Shop Now
        </button>
      </Link>
    </div>

    <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-20 pointer-events-none">
      <img
        src="/leaf-pattern.png"
        alt="Leaves"
        className="w-full max-w-9xl"
      />
    </div>
  </section>
)

export default HeroSection
