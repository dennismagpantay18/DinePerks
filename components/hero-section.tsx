"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full bg-background">
      {/* HERO */}
      <div className="relative h-72 w-full overflow-hidden sm:h-80 md:h-[26rem]">
        <Image
          src="/images/hero-banner.jpg"
          alt="Warm restaurant ambiance"
          fill
          className="object-cover object-center"
          priority
        />

        {/* DARK overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* WARM tint */}
        <div className="absolute inset-0 bg-[#3b2a1f]/40" />

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-10 text-center">
          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Save on dining during
            <br />
            off-peak hours
          </h1>

          <p className="mt-3 max-w-2xl text-white/80 sm:text-base md:text-lg">
            Book today or tomorrow and unlock exclusive offers at top local
            restaurants.
          </p>
        </div>
      </div>
    </section>
  );
}
