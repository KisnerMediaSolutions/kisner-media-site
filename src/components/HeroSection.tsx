'use client'

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[720px] xl:h-[800px] 2xl:h-[860px] overflow-hidden">
      <Image
        // src="/images/background.avif"
        alt="Kisner Media Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
          Welcome to Kisner Media Solutions
        </h1>
      </div>
    </section>
  );
}
