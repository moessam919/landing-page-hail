"use client";

import { Users, Bed, Star, Globe, Stethoscope, Heart, Sparkles } from "lucide-react";

const statistics = [
    {
        id: 1,
        icon: <Users className="w-16 h-16" />,
        number: "9,000+",
        label: "موظف",
    },
    {
        id: 2,
        icon: <Bed className="w-16 h-16" />,
        number: "3,000+",
        label: "سرير",
    },
    {
        id: 3,
        icon: <Star className="w-16 h-16" />,
        number: "35+",
        label: "سنة من الامتياز",
    },
    {
        id: 4,
        icon: <Globe className="w-16 h-16" />,
        number: "22",
        label: "منشأة طبية",
    },
    {
        id: 7,
        icon: <Stethoscope className="w-16 h-16" />,
        number: "44",
        label: "اختصاص طبي واختصاص فرعي",
    },
    {
        id: 8,
        icon: <Heart className="w-16 h-16" />,
        number: "2.5M+",
        label: "مريض كل عام",
    },
];

export default function WhyGermanHospital() {
    return (
        <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-100/20 to-pink-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced Section Header */}
                <div className="text-right mb-20 max-w-4xl">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-gray-200/50 shadow-sm">
                            <Sparkles className="w-4 h-4" style={{ color: "#00AEEF" }} />
                            من نحن
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        لماذا مستشفيات{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00AEEF] to-cyan-600">
                            السعودي الألماني
                        </span>
                        ؟
                    </h2>
                    <div className="relative">
                        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-[#00AEEF] to-transparent rounded-full" />
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed pr-6">
                            انطلاقًا من شعارنا في مستشفيات السعودية الألماني{" "}
                            <span className="text-[#00AEEF] font-bold">'نرعاكم كأهالينا'</span>
                            ، نتعهد بتقديم كافة الخدمات اللازمة بما يضمن لكم جودةً غير مسبوقة، لننال ثقتكم ونحظى باطمئنانكم الدائم، من خلال رعاية صحية متكاملة يقوم عليها نخبة من الأطباء والمتخصصين، وبأعلى معايير الدقة والاهتمام في كل خطوة من رحلتكم العلاجية.
                        </p>
                    </div>
                </div>

                {/* Enhanced Statistics Grid - Brand Color Only */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {statistics.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="group relative bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Brand Color Background on Hover */}
                            <div className="absolute inset-0 bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-3xl opacity-50 group-hover:opacity-0 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon Container - Brand Color */}
                                <div className="w-24 h-24 rounded-2xl bg-[#00AEEF]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <div className="text-[#00AEEF] group-hover:text-white transition-colors duration-500">
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Number */}
                                {stat.number && (
                                    <div className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                                        {stat.number}
                                    </div>
                                )}

                                {/* Label */}
                                <p className={`text-sm md:text-base font-medium leading-snug transition-colors duration-500 ${stat.number ? 'text-gray-600 group-hover:text-white/95' : 'text-gray-700 group-hover:text-white'
                                    }`}>
                                    {stat.label}
                                </p>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
