"use client";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="relative overflow-hidden section-padding">
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/mission-vision-bg.png"
          alt="KS Laboratory background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-primary-dark/80" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* Eyebrow + heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-xs font-body tracking-[0.25em] uppercase mb-3">
            What Drives Us
          </p>
          <h2 className="text-white font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Purpose &amp; Direction
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-5 rounded-full" />
        </div>

        {/* ── Two columns separated by vertical divider ── */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">

          {/* Vision */}
          <div className="flex-1 flex flex-col gap-6 px-0 md:pr-12 lg:pr-20 pb-12 md:pb-0">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>

            {/* Label */}
            <div>
              <p className="text-accent text-xs tracking-[0.25em] uppercase font-semibold font-body mb-3">
                Our Vision
              </p>
              <p className="text-white/85 text-base md:text-lg leading-relaxed font-body">
                To empower Sri Lanka&apos;s future generations by placing education,
                safety, and curiosity above profit, supporting schools with
                reliable laboratory solutions that inspire learning and
                scientific thinking.
              </p>
            </div>
          </div>

          {/* Vertical divider — horizontal on mobile */}
          <div className="flex-shrink-0 flex md:flex-col items-center justify-center">
            {/* Horizontal line on mobile */}
            <div className="md:hidden w-full h-px bg-white/20 mb-12" />
            {/* Vertical line on desktop */}
            <div className="hidden md:block w-px self-stretch bg-white/20 mx-0" />
          </div>

          {/* Mission */}
          <div className="flex-1 flex flex-col gap-6 px-0 md:pl-12 lg:pl-20 pt-0 md:pt-0">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>

            {/* Label */}
            <div>
              <p className="text-accent text-xs tracking-[0.25em] uppercase font-semibold font-body mb-3">
                Our Mission
              </p>
              <p className="text-white/85 text-base md:text-lg leading-relaxed font-body">
                To provide safe, high-quality, and affordable laboratory
                equipment for schools while supporting teachers and students
                with integrity, fairness, and a commitment to strengthening
                science education across Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
