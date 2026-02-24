import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/images/hero.jpg"
        alt="Interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforming Spaces, Enhancing Homes
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Experienced & Reliable Remodelers since 1968
          </p>
        </div>
      </div>
    </section>
  );
}