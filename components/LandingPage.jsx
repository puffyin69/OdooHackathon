"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Example data
const categories = [
  { name: "Caps", image: "/cap.png" },
  { name: "Specs", image: "/specs.png" },
  { name: "Shoes", image: "/shoes.png" },
  { name: "Bags", image: "/sidebag.png" },
  { name: "Shirts", image: "/shirt1.png" },
  { name: "Jackets", image: "/outerwear1.png" },
];

const products = [
  { id: 1, name: "Classic Cap", price: "$19", image: "/cap.png" },
  { id: 2, name: "Modern Specs", price: "$49", image: "/specs.png" },
  { id: 3, name: "Running Shoes", price: "$79", image: "/shoes.png" },
  { id: 4, name: "Retro Specs", price: "$59", image: "/specs1.png" },
  { id: 5, name: "Classic Shirt", price: "$29", image: "/shirt1.png" },
  { id: 6, name: "Denim Jacket", price: "$59", image: "/outerwear1.png" },
];

export default function LandingPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-8 px-2 md:px-8">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto flex items-center gap-2 mb-8">
        <Input
          type="text"
          placeholder="Search products..."
          className="flex-1 font-outfit"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="font-outfit px-4">🔍</Button>
      </div>

      {/* Images Section (Hero Carousel or Banner) */}
      <div className="max-w-4xl mx-auto mb-10 rounded-xl overflow-hidden">
        <Image
          src="/man.png"
          alt="Hero"
          width={1200}
          height={400}
          className="w-full h-64 object-cover"
          priority
        />
      </div>

      {/* Categories Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-xl font-bold font-libre-caslon mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center bg-gray-50 rounded-lg p-3 hover:shadow transition"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
                className="mb-2 rounded"
              />
              <span className="font-outfit text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Listings */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold font-libre-caslon mb-4">Product Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={180}
                className="mb-3 rounded-lg object-cover"
              />
              <div className="font-libre-caslon text-lg mb-1">{product.name}</div>
              <div className="font-outfit text-gray-700 mb-2">{product.price}</div>
              <Button className="w-full font-outfit">View</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}