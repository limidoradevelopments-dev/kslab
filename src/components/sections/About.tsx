"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── Stat data ─────────────────────────────────────────────── */
const STATS = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Schools Served" },
  { value: 5000, suffix: "+", label: "Products Supplied" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ─── Count-up hook ──────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

/* ─── Individual stat card ───────────────────────────────────── */
function StatCard({
  stat,
  active,
  delay,
}: {
  stat: (typeof STATS)[0];
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <div
      className="stat-card flex flex-col items-center justify-center text-center px-6 py-8 rounded-2xl bg-gray-50 border border-gray-200 transition-all duration-700"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="font-heading font-bold text-primary-dark leading-none mb-2"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        {count}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium font-body">
        {stat.label}
      </p>
    </div>
  );
}

/* ─── About section ──────────────────────────────────────────── */
export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* ── Top: image + text ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16 lg:mb-20">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.png"
                alt="About KS Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-body">
              Our commitment goes beyond just supply; we ensure safety, quality,
              and reliability in every product. We partner with leading global
              manufacturers to bring you world-class standards at accessible
              prices.
            </p>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-gray-100 pt-16 mt-4"
        >
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              active={statsActive}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
