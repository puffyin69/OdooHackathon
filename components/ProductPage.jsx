"use client";   
import { useState } from "react";
import { Button } from "@/components/ui/button";

const filters = [
  { label: "All", value: "all" },
  { label: "Shirts", value: "shirts" },
  { label: "Pants", value: "pants" },
  { label: "Outerwear", value: "outerwear" },
];

const products = [
  { id: 1, name: "Classic Cap", price: "$19", image: "/cap.png", type: "accessories" },
  { id: 2, name: "Modern Specs", price: "$49", image: "/specs.png", type: "accessories" },
  { id: 3, name: "Running Shoes", price: "$79", image: "/shoes.png", type: "footwear" },
  { id: 4, name: "Retro Specs", price: "$59", image: "/specs1.png", type: "accessories" },
  { id: 5, name: "Classic Shirt", price: "$29", image: "/book1.png", type: "shirts" },
  { id: 6, name: "Denim Jacket", price: "$59", image: "/sidebag.png", type: "outerwear" },
];

export default function ProductPage() {
  const [selected, setSelected] = useState("all");

  const filteredProducts =
    selected === "all"
      ? products
      : products.filter((p) => p.type === selected);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-8">
        <h2 className="text-2xl font-bold mb-8 font-outfit">Browse</h2>
        <ul className="space-y-4">
          {filters.map((f) => (
            <li key={f.value}>
              <Button
                variant={selected === f.value ? "default" : "ghost"}
                className="w-full justify-start font-outfit"
                onClick={() => setSelected(f.value)}
              >
                {f.label}
              </Button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8 font-libre-caslon">Shop Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="font-libre-caslon text-xl mb-2">{product.name}</div>
              <div className="font-outfit text-gray-700 mb-4">{product.price}</div>
              <Button className="w-full font-outfit">View</Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}