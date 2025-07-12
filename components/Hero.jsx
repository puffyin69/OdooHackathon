import Image from "next/image";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import Navbar from "./navbar";
const Hero = () => {
  return (
    <div className="h-screen items-center justify-center flex flex-col relative">
      <Navbar />
      <div className="z-10 w-full flex justify-between absolute top-2">
  
        <div className=""></div>
      </div>
      <Image src="/hero.png" alt="hero image" fill className="h-screen" />
    </div>
  );
};

export default Hero;
