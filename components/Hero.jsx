import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen items-center justify-center flex flex-col relative">
      <div className="z-10 w-full flex justify-center absolute top-2">
        <h1 className="text-5xl font-bold text-white">Rewear</h1>
      </div>
      <Image src="/hero.png" alt="hero image" fill className="h-screen" />
    </div>
  );
};
export default Hero;
