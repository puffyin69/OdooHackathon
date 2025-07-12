import Image from "next/image";
import { Button } from "@/components/ui/button"; // shadcn/ui button

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 font-outfit">
        <div className="text-white text-lg font-bold">ReWear</div>
        <div className="flex gap-6">
          <Button variant="ghost" className="text-white text-base font-outfit">
            Browse
          </Button>
          <Button variant="ghost" className="text-white text-base font-outfit">
            Login
          </Button>
          <Button variant="outline" className="text-white border-white text-base font-outfit hover:bg-white hover:text-black transition">
            Signup
          </Button>
        </div>
      </nav>

      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="hero image"
        fill
        priority
        className="object-cover"
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-16 z-10">
        <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg font-libre-caslon">
          TRUE <br /> CLASSICS.
        </h1>
        <Button className="bg-white text-black text-lg px-8 py-4 font-semibold rounded-none shadow hover:bg-gray-200 transition font-outfit">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;
