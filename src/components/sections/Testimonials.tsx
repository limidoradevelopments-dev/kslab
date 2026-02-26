"use client";

const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      "The precision and reliability of KS Laboratory's reports gave us complete confidence in our purchase decision. Exceptional service.",
    name: "Rajan M.",
    role: "Property Buyer",
  },
  {
    stars: 5,
    quote:
      "Turnaround time was impressive. Results were clear, detailed, and backed by expertise. Our go-to lab for all testing needs.",
    name: "Priya S.",
    role: "Civil Engineer",
  },
  {
    stars: 5,
    quote:
      "Professional team, spotless facility. The water quality analysis was thorough and the report was easy to understand.",
    name: "Arjun K.",
    role: "Real Estate Developer",
  },
  {
    stars: 4,
    quote:
      "We've been partnering with KS Laboratory for years. Consistently accurate, always on time. A trustworthy lab for critical analysis.",
    name: "Meena R.",
    role: "Construction Manager",
  },
  {
    stars: 5,
    quote:
      "Soil testing was completed faster than expected with a comprehensive report. Made our site planning much smoother.",
    name: "Deepak V.",
    role: "Architect",
  },
  {
    stars: 5,
    quote:
      "Their concrete sampling service is top notch. Results were delivered with full technical breakdowns. Highly recommended!",
    name: "Lakshmi T.",
    role: "Structural Engineer",
  },
  {
    stars: 4,
    quote:
      "Knowledgeable staff who walk you through the findings. Felt like a true partnership rather than just a service transaction.",
    name: "Suresh P.",
    role: "Site Supervisor",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 ${filled ? "text-accent" : "text-white/20"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="testimonial-card flex-shrink-0 w-72 sm:w-80 flex flex-col gap-4 px-6 py-5 border border-white/10 rounded-2xl bg-white/[0.04] backdrop-blur-sm mx-3">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.stars} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed font-body flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="border-t border-white/10 pt-4 flex flex-col gap-0.5">
        <span className="text-white text-sm font-semibold tracking-wide">
          {testimonial.name}
        </span>
        <span className="text-accent text-xs font-body tracking-wider uppercase">
          {testimonial.role}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate items to create a seamless loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative section-padding bg-primary-dark overflow-hidden"
    >
      {/* Embedded keyframes — guaranteed to work regardless of Tailwind processing */}
      <style>{`
        @keyframes ks-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ks-ticker-track {
          display: flex;
          width: max-content;
          animation: ks-ticker 40s linear infinite;
          will-change: transform;
        }
        .ks-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 mb-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-accent text-xs font-body tracking-[0.25em] uppercase mb-4">
            Client Experiences
          </p>
          <h2 className="text-white font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </div>

      {/* Ticker wrapper — full-bleed */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Left edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-primary-dark to-transparent" />
        {/* Right edge fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-primary-dark to-transparent" />

        {/* Scrolling track — class drives the animation */}
        <div className="ks-ticker-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
