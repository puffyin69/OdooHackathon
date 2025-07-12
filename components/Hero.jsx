import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-start min-h-screen w-full overflow-hidden bg-black">
      <Navbar />
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="hero image"
        fill
        priority
        className="object-cover z-0"
        style={{ opacity: 0.85 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Hero Content */}
      <div className="relative z-20 px-8 md:px-24 py-32 flex flex-col gap-8">
        <h1 className="text-white text-5xl md:text-7xl font-libre-caslon font-bold leading-tight mb-6 drop-shadow-lg">
          TRUE <br /> CLASSICS.
        </h1>
        <Button className="bg-white text-black text-lg px-8 py-4 font-semibold rounded-none shadow hover:bg-gray-200 transition font-outfit w-fit">
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};

export default Hero;
