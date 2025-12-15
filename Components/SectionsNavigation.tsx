"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const departments = [
    {
        id: 1,
        title: "الجلدية",
        description:
            "عناية متخصصة بصحة وجمال البشرة من خلال أحدث التقنيات والعلاجات الطبية المتطورة",
        image: "/treatment.jpg",
        color: "#00AEEF",
    },
    {
        id: 2,
        title: "جراحات التجميل",
        description: "حلول جراحية متقدمة وآمنة بأيدي أفضل الجراحين المتخصصين",
        image: "/injection.jpg",
        color: "#00c367",
    },
    {
        id: 3,
        title: "تجميل الأسنان",
        description:
            "ابتسامة مشرقة وصحة دائمة مع خدمات طب الأسنان التجميلي الشاملة",
        image: "/patient-dentist.jpg",
        color: "#00c367",
    },
    {
        id: 4,
        title: "التجميل النسائي ومابعد الولادة",
        description:
            "رعاية شاملة ومتخصصة للأم بعد الولادة لاستعادة الجمال والثقة",
        image: "/pregnant.jpg",
        color: "#00AEEF",
    },
];

const SectionsNavigation = () => {
    return (
        <section className="py-14 relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-white">
            {/* Elegant Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #00AEEF 1.5px, transparent 1.5px)`,
                        backgroundSize: "48px 48px",
                    }}
                ></div>

                {/* Soft Gradient Orbs */}
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
                    style={{
                        background: `radial-gradient(circle, #00AEEF, transparent 70%)`,
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
                    style={{
                        background: `radial-gradient(circle, #00c367, transparent 70%)`,
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header - Right Aligned */}
                <div className="text-right mb-10 max-w-2xl mr-0 ml-auto">
                    <div className="inline-block mb-5">
                        <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-gray-200/50 shadow-sm">
                            <Sparkles
                                className="w-4 h-4"
                                style={{ color: "#00AEEF" }}
                            />
                            أقسامنا الطبية
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
                        أقسامنا
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        اكتشف خدماتنا المتخصصة في مختلف المجالات الطبية
                        والتجميلية
                    </p>
                </div>

                {/* Cards Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {departments.map((dept, index) => (
                        <div
                            key={dept.id}
                            className="group relative"
                            style={{
                                animation: `elegantFadeIn 0.8s ease-out ${
                                    index * 0.15
                                }s both`,
                            }}
                        >
                            {/* Card Container */}
                            <div className="relative h-[470px] rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                {/* Image Section */}
                                <div className="relative h-[280px] overflow-hidden">
                                    <Image
                                        src={dept.image}
                                        alt={dept.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* Colored Overlay on Hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${dept.color}60, ${dept.color}90)`,
                                        }}
                                    ></div>

                                    {/* Floating Icon */}
                                    <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl backdrop-blur-xl bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg transform -translate-y-2 group-hover:translate-y-0">
                                        <Sparkles
                                            className="w-6 h-6"
                                            style={{ color: dept.color }}
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="relative h-[220px] p-8 flex flex-col justify-between text-right">
                                    {/* Top Content */}
                                    <div>
                                        {/* Decorative Accent */}
                                        <div
                                            className="w-20 h-1.5 rounded-full mr-0 ml-auto mb-5 transition-all duration-500 group-hover:w-32"
                                            style={{
                                                backgroundColor: dept.color,
                                            }}
                                        ></div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                            {dept.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-base text-gray-600 leading-relaxed line-clamp-2">
                                            {dept.description}
                                        </p>
                                    </div>

                                    {/* Bottom Border Accent */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ backgroundColor: dept.color }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keyframe Animation */}
            <style jsx>{`
                @keyframes elegantFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
};

export default SectionsNavigation;
