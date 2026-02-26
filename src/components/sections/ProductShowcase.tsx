"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PRODUCTS = [
  {
    id: 1,
    title: "TELESCOPES & BINOCULARS",
    description: "High-precision optical instruments for astronomical observations and field research.",
    image: "/images/prod-telescopes.png",
  },
  {
    id: 2,
    title: "MICROSCOPES",
    description: "Professional compound and stereo microscopes for detailed biological and material analysis.",
    image: "/images/micro.png", // Reusing premium lab image
  },
  {
    id: 3,
    title: "MODELS & CHARTS",
    description: "Detailed anatomical, molecular, and educational models for engaging classroom learning.",
    image: "/images/body.png", // Reusing relevant image
  },
  {
    id: 4,
    title: "MEASURING ITEMS",
    description: "Precision analytical balances, calipers, and digital meters for accurate measurements.",
    image: "/images/mesure.png", // Reusing premium lab image
  },
  {
    id: 5,
    title: "ELECTRICAL & ELECTRONICS",
    description: "Comprehensive kits for physics experiments, circuit design, and electronic components.",
    image: "/images/elec.png", // Reusing premium lab image
  },
  {
    id: 6,
    title: "CHEMICAL PRODUCTS",
    description: "Borosilicate glassware, heating mantles, and safety equipment for chemistry labs.",
    image: "/images/chemi.png", // Reusing relevant image
  },
  {
    id: 7,
    title: "MAGNET ITEMS",
    description: "Educational magnet sets, compasses, and electromagnetic kits for physics learning.",
    image: "/images/mag.png", // Reusing premium lab image
  },
  {
    id: 8,
    title: "GLASSWARE ITEMS",
    description: "High-quality borosilicate beakers, flasks, and test tubes for precise experimental work.",
    image: "/images/bul.png", // Reusing relevant image with lab view
  },
];

export default function ProductShowcase() {
  return (
    <section id="showcase" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-xs font-body tracking-[0.25em] uppercase mb-4">
            Our Collection
          </p>
          <h2 className="text-primary-dark font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Featured Products
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-base md:text-lg font-body leading-relaxed">
            Explore our range of premium laboratory supplies and equipment designed for excellence in science education.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative product-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col group transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 font-body">
                      {product.description}
                    </p>
                    
                    {/* CTA Button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark hover:shadow-lg active:scale-[0.98]"
                    >
                      Contact for Buy Now
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hidden lg:flex">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hidden lg:flex">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .product-swiper-container .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e2e8f0;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .product-swiper-container .swiper-pagination-bullet-active {
          width: 24px;
          background: var(--color-primary, #1a6fa3);
          border-radius: 4px;
        }
        .product-swiper-container .swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
