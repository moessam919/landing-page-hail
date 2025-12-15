"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Sparkles,
    Droplets,
    Wind,
    Flame,
    Shield,
    Syringe,
    Zap,
    Leaf,
    Star,
    Scissors,
    Smile,
    Heart,
    Activity,
    Hospital,
    TestTube,
} from "lucide-react";

// Define service categories with their items
const serviceCategories = [
    {
        id: "dermatology",
        title: "قسم الجلدية",
        description: "نهتم بجمالك وصحة بشرتك من خلال خدمات تشمل:",
        color: "#00AEEF",
        services: [
            {
                id: 1,
                title: "علاج حب الشباب وآثاره",
                icon: <Droplets className="w-6 h-6" />,
            },
            {
                id: 2,
                title: "علاج الندبات",
                icon: <Sparkles className="w-6 h-6" />,
            },
            {
                id: 3,
                title: "علاج فرط التعرق",
                icon: <Wind className="w-6 h-6" />,
            },
            {
                id: 4,
                title: "علاج الثآليل بالكي الحار والبارد",
                icon: <Flame className="w-6 h-6" />,
            },
            {
                id: 5,
                title: "جلسات علاج الأكزيما والصدفية ومشاكل البشرة المزمنة",
                icon: <Shield className="w-6 h-6" />,
            },
        ],
    },
    {
        id: "beauty",
        title: "قسم التجميل",
        description: "أطباء وجراحون متخصصون يقدمون حلول آمنة ومدروسة بدقة:",
        color: "#00c367",
        services: [
            {
                id: 6,
                title: "حقن البوتوكس والفيلر",
                icon: <Syringe className="w-6 h-6" />,
            },
            {
                id: 7,
                title: "جلسات إزالة الشعر",
                icon: <Zap className="w-6 h-6" />,
            },
            {
                id: 8,
                title: "جلسات الهيدرافيشيال",
                icon: <Droplets className="w-6 h-6" />,
            },
            {
                id: 9,
                title: "تقشير الكوزميلان وإزالة التصبغات",
                icon: <Leaf className="w-6 h-6" />,
            },
            {
                id: 10,
                title: "جلسات البلازما والميزوثيرابي للوجه والشعر",
                icon: <Star className="w-6 h-6" />,
            },
            {
                id: 11,
                title: "جراحات التجميل",
                icon: <Scissors className="w-6 h-6" />,
            },
        ],
    },
    {
        id: "dental",
        title: "قسم الأسنان",
        description: "ابتسامتك… سر جمالك وثقتك. نوفر خدمات:",
        color: "#00AEEF",
        services: [
            {
                id: 12,
                title: "تبييض الأسنان",
                icon: <Sparkles className="w-6 h-6" />,
            },
            {
                id: 13,
                title: "تنظيف الأسنان",
                icon: <Shield className="w-6 h-6" />,
            },
            {
                id: 14,
                title: "زراعة وتركيبات الأسنان",
                icon: <Heart className="w-6 h-6" />,
            },
            {
                id: 15,
                title: "علاج اللثة والتسوس",
                icon: <Smile className="w-6 h-6" />,
            },
        ],
    },
    {
        id: "Beauty",
        title: "قسم التجميل النسائي",
        description:
            "نهتم بصحة المرأة وجمالها عبر مجموعة من الخدمات المتخصصة التي تضمن نتائج آمنة وفعّالة:",
        color: "#00c367",
        services: [
            {
                id: 16,
                title: "متابعة الحمل والحمل عالي المخاطر",
                icon: <Activity className="w-6 h-6" />,
            },
            {
                id: 17,
                title: "الولادة الطبيعية والقيصرية",
                icon: <Hospital className="w-6 h-6" />,
            },
            {
                id: 18,
                title: "علاج العقم",
                icon: <TestTube className="w-6 h-6" />,
            },
            {
                id: 19,
                title: "الجراحات التجميلية النسائية",
                icon: <Scissors className="w-6 h-6" />,
            },
        ],
    },
];

const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState("dermatology");

    // Helper function to get lighter version of color
    const getLightColor = (color: string) => {
        if (color === "#00AEEF") return "#E0F7FF";
        if (color === "#00c367") return "#E0F9EC";
        return "#E0F7FF";
    };

    return (
        <section className="py-14 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50">
            {/* Beautiful Medical Pattern Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                {/* Medical Cross Pattern */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="medical-pattern"
                            x="0"
                            y="0"
                            width="100"
                            height="100"
                            patternUnits="userSpaceOnUse"
                        >
                            {/* Small medical crosses */}
                            <g opacity="0.15">
                                <rect
                                    x="48"
                                    y="45"
                                    width="4"
                                    height="10"
                                    fill="#00AEEF"
                                    rx="1"
                                />
                                <rect
                                    x="45"
                                    y="48"
                                    width="10"
                                    height="4"
                                    fill="#00AEEF"
                                    rx="1"
                                />
                            </g>
                            {/* Dots */}
                            <circle
                                cx="20"
                                cy="20"
                                r="1.5"
                                fill="#00AEEF"
                                opacity="0.2"
                            />
                            <circle
                                cx="80"
                                cy="80"
                                r="1.5"
                                fill="#00c367"
                                opacity="0.2"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#medical-pattern)"
                    />
                </svg>

                {/* Gradient Orbs */}
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{
                        background: `radial-gradient(circle, ${getLightColor(
                            "#00AEEF"
                        )}80 0%, transparent 70%)`,
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
                    style={{
                        background: `radial-gradient(circle, ${getLightColor(
                            "#00c367"
                        )}80 0%, transparent 70%)`,
                    }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl"
                    style={{
                        background: `radial-gradient(circle, ${getLightColor(
                            "#00AEEF"
                        )}60 0%, transparent 70%)`,
                    }}
                ></div>

                {/* Floating Pills/Capsules Decoration */}
                <div
                    className="absolute top-20 right-32 w-16 h-6 rounded-full rotate-45 blur-sm"
                    style={{ backgroundColor: `${getLightColor("#00AEEF")}` }}
                ></div>
                <div
                    className="absolute bottom-32 left-24 w-20 h-7 rounded-full -rotate-12 blur-sm"
                    style={{ backgroundColor: `${getLightColor("#00c367")}` }}
                ></div>
                <div
                    className="absolute top-1/3 left-1/4 w-12 h-5 rounded-full rotate-90 blur-sm"
                    style={{ backgroundColor: `${getLightColor("#00AEEF")}` }}
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Right Aligned */}
                <div className="text-right mb-16 max-w-2xl mr-0 ml-auto">
                    <div className="inline-block mb-4">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-gray-200/50 shadow-sm">
                            <Sparkles
                                className="w-4 h-4"
                                style={{ color: "#00AEEF" }}
                            />
                            خدماتنا الطبية المتميزة
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        قسم خدماتنا
                    </h2>
                    <p className="text-gray-600 text-xl leading-relaxed font-medium">
                        نقدم مجموعة شاملة من الخدمات الطبية والتجميلية المتخصصة
                        بأعلى معايير الجودة والاحترافية
                    </p>
                </div>

                {/* Category Tabs - Right Aligned */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {serviceCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                                relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 cursor-pointer 
                                ${
                                    activeCategory === category.id
                                        ? "text-white shadow-2xl scale-105"
                                        : "bg-white/90 backdrop-blur-sm text-gray-700 hover:shadow-lg border-2 border-gray-200/50 hover:border-gray-300"
                                }
                            `}
                            style={
                                activeCategory === category.id
                                    ? {
                                          backgroundColor: category.color,
                                          boxShadow: `0 20px 50px -12px ${category.color}40`,
                                      }
                                    : {}
                            }
                        >
                            {/* Active indicator */}
                            {activeCategory === category.id && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
                            )}
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                {serviceCategories.map((category) => (
                    <div
                        key={category.id}
                        className={`
                            transition-all duration-700 
                            ${
                                activeCategory === category.id
                                    ? "opacity-100 block"
                                    : "opacity-0 hidden"
                            }
                        `}
                    >
                        {/* Category Description - Right Aligned */}
                        <div className="text-right mb-14">
                            <div
                                className="inline-block px-8 py-4 rounded-2xl border-2 border-white shadow-lg backdrop-blur-sm"
                                style={{
                                    backgroundColor: getLightColor(
                                        category.color
                                    ),
                                }}
                            >
                                <p className="text-gray-800 text-lg md:text-xl font-semibold">
                                    {category.description}
                                </p>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                            {category.services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="group relative"
                                    style={{
                                        animation: `fadeInUp 0.7s ease-out ${
                                            index * 0.12
                                        }s both`,
                                    }}
                                >
                                    <div className="relative h-full p-8 rounded-3xl bg-white/95 backdrop-blur-sm border-2 border-gray-100 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:-translate-y-2  overflow-hidden">
                                        {/* Animated Gradient Background on Hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"
                                            style={{
                                                backgroundColor: category.color,
                                            }}
                                        ></div>

                                        {/* Content Container */}
                                        <div className="flex items-start gap-5 text-right relative z-10">
                                            {/* Icon Container */}
                                            <div
                                                className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                                style={{
                                                    backgroundColor:
                                                        getLightColor(
                                                            category.color
                                                        ),
                                                }}
                                            >
                                                <div
                                                    className="transition-colors duration-500 group-hover:text-white"
                                                    style={{
                                                        color: category.color,
                                                    }}
                                                >
                                                    {service.icon}
                                                </div>
                                            </div>

                                            {/* Service Title */}
                                            <h3 className="flex-1 text-xl font-bold text-gray-800 leading-snug pt-4 group-hover:text-white transition-colors duration-500">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Decorative Corner Shine */}
                                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-full blur-2xl"></div>

                                        {/* Bottom Accent Line */}
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                backgroundColor: category.color,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Payment Options Bar */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-gray-100 overflow-hidden">
                        {/* Content */}
                        <div className="p-8 md:p-10 text-center">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                خيارات دفع سهلة ومريحة
                            </h3>
                            <p className="text-gray-600 text-lg mb-8">
                                يمكنكم الدفع فورًا بـ{" "}
                                <span className="font-bold text-gray-900">
                                    الكاش
                                </span>{" "}
                                أو{" "}
                                <span className="font-bold text-gray-900">
                                    الفيزا
                                </span>
                                ، أو اختيار التقسيط مع شركاء التقسيط
                            </p>

                            {/* Partners */}
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                                <div className="px-6 py-3 bg-linear-to-r from-gray-50 to-white rounded-2xl shadow-md border border-gray-200 h-16 flex items-center justify-center min-w-[120px]">
                                    <Image
                                        src="/tabby-badge.png"
                                        alt="Tabby"
                                        width={100}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="px-6 py-3 bg-linear-to-r from-gray-50 to-white rounded-2xl shadow-md border border-gray-200 h-16 flex items-center justify-center min-w-[120px]">
                                    <Image
                                        src="/tamara.svg"
                                        alt="Tamara"
                                        width={100}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="px-6 py-3 bg-linear-to-r from-gray-50 to-white rounded-2xl shadow-md border border-gray-200 h-16 flex items-center justify-center min-w-[120px]">
                                    <Image
                                        src="/baseta.svg"
                                        alt="Baseta"
                                        width={100}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Gradient Bar */}
                        <div className="h-1.5 bg-linear-to-r from-[#00AEEF] via-[#00c367] to-[#00AEEF]"></div>
                    </div>
                </div>
            </div>

            {/* Keyframe Animation */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;
