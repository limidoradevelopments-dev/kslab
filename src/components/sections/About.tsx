"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="About KS Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay for consistency with branding */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10" />
          </div>
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary-dark font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight leading-tight">
              Pioneering Science Education &amp; Research
            </h2>
            <div className="w-16 h-1 bg-accent mb-6 rounded-full" />

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5 font-body">
              At KS Laboratory, we are dedicated to empowering the next
              generation of scientists and researchers. With over a decade of
              experience, we specialize in providing top-tier laboratory
              chemicals, glassware, and equipment tailored for educational
              institutions and research facilities.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-body">
              Our commitment goes beyond just supply; we ensure safety, quality,
              and reliability in every product. We partner with leading global
              manufacturers to bring you world-class standards at accessible
              prices.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1 font-heading">
                  10+
                </h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1 font-heading">
                  500+
                </h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">
                  Schools Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
