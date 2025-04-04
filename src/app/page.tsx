'use client'

// src/app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import TrustedBySection from "@/components/TrustedBySection";
import CallToAction from "@/components/CallToActionSection";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full items-center justify-center bg-white dark:bg-black text-foreground">
      <section className="w-full">
        <Navbar />
      </section>

      <section className="w-full">
        <HeroSection />
      </section>

      <section className="w-full bg-black text-white px-6 sm:px-20">
        <WhatWeDoSection />
      </section>

      <section className="w-full bg-white text-black dark:bg-neutral-900 dark:text-white px-6 sm:px-20">
        <TrustedBySection />
      </section>

      <section className="w-full bg-black text-white px-6 sm:px-20">
        <CallToAction />
      </section>
    </main>
  );
}


