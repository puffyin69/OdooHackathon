import Hero from "@/components/Hero";
import ProductPage from "@/components/ProductPage";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Hero />
      <section className="flex-1 w-full flex justify-center items-start bg-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <ProductPage />
        </div>
      </section>
    </main>
  );
}
