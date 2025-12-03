"use client";

import { CheckCircle2, Clock, HeartPulse, Stethoscope, Sparkles } from "lucide-react";

const whyUs = [
    {
        id: 1,
        title: "فريق طبي متخصص",
        text: "فريق مختص في الجلدية والتجميل لتقديم رعاية دقيقة ومتخصصة لكل حالة.",
        icon: <Stethoscope className="w-12 h-12" />,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        title: "أحدث التقنيات العالمية",
        text: "نستخدم أحدث الأجهزة والتقنيات العالمية لضمان نتائج عالية الدقة في العلاجات التجميلية.",
        icon: <HeartPulse className="w-12 h-12" />,
        gradient: "from-green-500 to-emerald-500",
    },
    {
        id: 3,
        title: "متابعة دقيقة وخطة علاجية",
        text: "نوفر خطط علاجية دقيقة ومخصصة لكل مريض مع متابعة مستمرة لضمان الحصول على أفضل النتائج.",
        icon: <Clock className="w-12 h-12" />,
        gradient: "from-green-500 to-emerald-500",
    },
    {
        id: 4,
        title: "نتائج طبيعية وآمنة",
        text: "نحقق نتائج تجميلية طبيعية وآمنة باستخدام أفضل المواد والتقنيات الطبية.",
        icon: <CheckCircle2 className="w-12 h-12" />,
        gradient: "from-blue-500 to-cyan-500",
    },
];

export default function WhyUsSection() {
    return (
        <section className="py-14 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 text-right relative z-10">

                {/* Title */}
                <div className="mb-16 max-w-3xl">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-[#00AEEF]" />
                        <span className="text-[#00AEEF] font-bold text-sm tracking-wider uppercase">
                            مميزاتنا
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        لماذا <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00AEEF] to-cyan-600">نحن</span>؟
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        عناية متكاملة لبشرتك وجمالك باستخدام أحدث التقنيات وخبرة طبية متخصصة.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
                    {whyUs.map((item, index) => (
                        <div
                            key={item.id}
                            className="group bg-white border border-gray-100 rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >

                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Corner Decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-3xl opacity-50 group-hover:opacity-0 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10">

                                {/* Icon */}
                                <div className="mb-8">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                                        <div className="text-white">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">
                                    {item.title}
                                </h3>

                                {/* Text */}
                                <p className="text-gray-600 text-base leading-relaxed group-hover:text-white/95 transition-colors duration-500">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="inline-block">
                        <a href="#contact-form">
                            <button className="group relative cursor-pointer bg-gradient-to-r from-[#00AEEF] to-cyan-500 hover:from-[#2eb34b] hover:to-green-500 text-white font-bold py-5 px-14 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl text-lg overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3 justify-center">
                                    تواصل معنا
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                            </button>
                        </a>

                        <p className="text-gray-500 text-sm mt-4">
                            نحن هنا لخدمتكم على مدار الساعة
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
