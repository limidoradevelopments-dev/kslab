"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    heading: "KS Laboratory\nChemicals And\nEverything You Need",
    subtitle:
      "Quality laboratory equipment for schools — everything you need for safe and effective science learning",
  },
  {
    id: 2,
    heading: "Premium Lab\nChemicals For\nEvery Experiment",
    subtitle:
      "From basic reagents to advanced compounds — trusted by schools and institutions nationwide",
  },
  {
    id: 3,
    heading: "Safety First\nQuality Always\nResults Guaranteed",
    subtitle:
      "Industry-certified laboratory supplies ensuring the highest standards for educational environments",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = SLIDES[activeSlide];

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Laboratory environment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-primary-dark/30" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex flex-col justify-end items-end pb-20 md:pb-24 lg:pb-32">
        <div className="max-w-2xl text-right">
          {/* Heading */}
          <h1
            className={cn(
              "font-heading text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight transition-all duration-1000 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            key={currentSlide.id}
          >
            {currentSlide.heading.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "mt-4 md:mt-6 text-white/70 text-xs sm:text-sm md:text-base font-body leading-relaxed max-w-md ml-auto transition-all duration-1000 delay-200 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {currentSlide.subtitle}
          </p>

          {/* CTA Button */}
          <div
            className={cn(
              "mt-6 md:mt-8 transition-all duration-1000 delay-400 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-white/30 hover:border-white/60 rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 hover:bg-white/5"
            >
              <span className="text-white/90 font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase">
                Contact Now
              </span>
              <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                <svg
                  className="w-3.5 h-3.5 text-white/90 -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div
          className={cn(
            "absolute bottom-10 left-5 sm:left-8 lg:left-16 flex items-center gap-3 transition-all duration-1000 delay-600",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "rounded-full transition-all duration-500",
                index === activeSlide
                  ? "w-3 h-3 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          className={cn(
            "absolute bottom-10 right-5 sm:right-8 lg:right-16 hidden md:flex flex-col items-center gap-2 transition-all duration-1000 delay-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-center translate-y-6">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mt-8 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
