"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const doctors = [
    {
        id: 1,
        image: "/doctor-1.png",
    },
    {
        id: 2,
        image: "/doctor-2.png",
    },
    {
        id: 3,
        image: "/doctor-3.png",
    },
    {
        id: 4,
        image: "/doctor-4.png",
    },
    {
        id: 5,
        image: "/doctor-5.png",
    },
];

const DoctorsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" }, [
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Right Aligned */}
                <div className="text-right mb-12 max-w-3xl mr-0 ml-auto">

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                        فريقنا الطبي
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                        نخبة من الأطباء المتخصصين في: الجلدية – التجميل – طب الأسنان – التجميل النسائي، بخبرة سنوات ونتائج مثبتة.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6 py-5">
                            {doctors.map((doctor) => (
                                <div
                                    key={doctor.id}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0"
                                >
                                    {/* Full Height Image Card */}
                                    <div className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">

                                        {/* Full Card Image */}
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.image}
                                            fill
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows - Positioned at Bottom Right */}
                    <div className="flex gap-4 justify-end mt-8 pl-4">
                        <button
                            onClick={scrollPrev}
                            className="w-14 h-14 bg-white rounded-full cursor-pointer shadow-lg flex items-center justify-center text-gray-600 hover:bg-[#00AEEF] hover:text-white transition-all duration-300 focus:outline-none group"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 transform  group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-14 h-14 bg-white rounded-full cursor-pointer shadow-lg flex items-center justify-center text-gray-600 hover:bg-[#00AEEF] hover:text-white transition-all duration-300 focus:outline-none group"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 transform  group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <a href="#contact-form" className="group relative cursor-pointer bg-gradient-to-r from-[#00AEEF] to-cyan-500 hover:from-[#2eb34b] hover:to-green-500 text-white font-bold py-5 px-14 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl text-lg overflow-hidden inline-flex items-center justify-center">
                        <span className="relative z-10 flex items-center gap-3 justify-center">
                            احجز موعدك الآن
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;
