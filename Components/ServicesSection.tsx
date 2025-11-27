"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    Brain,
    Bone,
    Scan,
    Radar,
    Ambulance,
    Stethoscope,
    Activity,
    HeartPulse,
    Microscope,
} from "lucide-react";

const services = [
    {
        id: 1,
        title: "جراحة المخ والأعصاب",
        subtitle: "رعاية متخصصة للجهاز العصبي باستخدام أحدث التقنيات الجراحية",
        icon: <Brain className="w-10 h-10" />,
    },
    {
        id: 2,
        title: "جراحة العمود الفقري",
        subtitle: "علاج متقدم لمشاكل العمود الفقري والديسك بأحدث الطرق",
        icon: <Bone className="w-10 h-10" />,
    },
    {
        id: 3,
        title: "التصوير المقطعي المحوسب",
        subtitle: "تشخيص دقيق وسريع باستخدام أحدث أجهزة التصوير الطبي",
        icon: <Scan className="w-10 h-10" />,
    },
    {
        id: 4,
        title: "التصوير بالرنين المغناطيسي",
        subtitle: "صور تفصيلية عالية الدقة للتشخيص الدقيق والمبكر",
        icon: <Radar className="w-10 h-10" />,
    },
    {
        id: 5,
        title: "إصابات الرأس والطوارئ",
        subtitle: "رعاية عاجلة ومتخصصة على مدار الساعة لحالات الطوارئ",
        icon: <Ambulance className="w-10 h-10" />,
    },
    {
        id: 6,
        title: "الجراحات بالمنظار",
        subtitle: "تقنيات جراحية طفيفة التوغل لتقليل فترة التعافي",
        icon: <Stethoscope className="w-10 h-10" />,
    },
    {
        id: 7,
        title: "مراقبة التشخيص العصبي",
        subtitle: "تخطيط الدماغ والعضلات لتشخيص الأمراض العصبية",
        icon: <Activity className="w-10 h-10" />,
    },
    {
        id: 8,
        title: "الفحوصات التشخيصية العصبية",
        subtitle: "تقييم شامل ودقيق لوظائف الجهاز العصبي",
        icon: <Microscope className="w-10 h-10" />,
    },
    {
        id: 9,
        title: "اختبارات الإجهاد",
        subtitle: "تقييم دقيق لوظائف القلب والأوعية الدموية",
        icon: <HeartPulse className="w-10 h-10" />,
    },
];

const ServicesSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        direction: "rtl",
        align: "start",
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-right mb-5 md:mb-10 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                        خدماتنا
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        يفخر قسم جراحة المخ والأعصاب في مستشفى السعودي الألماني
                        - عسير بتقديم رعاية شاملة تعتمد على أحدث التقنيات الطبية
                        العالمية، ينفذها أفضل الكوادر الطبية في المملكة.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] pl-4 md:pl-6 min-w-0 py-6"
                                >
                                    <div
                                        className="group rounded-2xl p-8 transition-all duration-300 h-full flex flex-col items-start text-right cursor-pointer bg-white shadow-sm hover:bg-[#00AEEF] hover:text-white hover:shadow-xl"
                                    >
                                        {/* Icon Container */}
                                        <div
                                            className="
                                                w-16 h-16 rounded-xl flex items-center justify-center mb-6
                                                bg-[#00AEEF]/10 transition-all duration-300
                                                group-hover:bg-white/20
                                            "
                                        >
                                            <div className="transition-colors duration-300 text-[#00AEEF] group-hover:text-white">
                                                {service.icon}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="
                                                text-lg font-bold mb-3 
                                                text-gray-900 transition-colors duration-300
                                                group-hover:text-white
                                            "
                                        >
                                            {service.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p
                                            className="
                                                text-sm leading-relaxed 
                                                text-gray-600 transition-colors duration-300
                                                group-hover:text-white/90
                                            "
                                        >
                                            {service.subtitle}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 justify-end mt-2">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 bg-white rounded-full cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:bg-[#00AEEF] hover:text-white transition-all duration-300 focus:outline-none"
                            aria-label="Previous slide"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 bg-white rounded-full cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:bg-[#00AEEF] hover:text-white transition-all duration-300 focus:outline-none"
                            aria-label="Next slide"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
