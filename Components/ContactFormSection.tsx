"use client";

import { useState } from "react";
import { Send, Shield } from "lucide-react";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl pointer-events-none" />

            {/* Medical Cross Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 right-20 w-12 h-12 border-4 border-[#00AEEF] rotate-45" />
                <div className="absolute bottom-40 right-40 w-8 h-8 border-4 border-[#00AEEF] rotate-45" />
                <div className="absolute top-40 left-20 w-10 h-10 border-4 border-[#00AEEF] rotate-45" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                        <span className="text-[#00AEEF] font-bold text-sm tracking-wider uppercase">
                            تواصل معنا
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        خطوتك الأولى نحو العلاج{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00AEEF] to-cyan-600">
                            تبدأ هنا
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        نحن هنا لخدمتكم… تواصل معنا الآن
                    </p>
                </div>

                {/* Contact Form Card */}
                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-20 bg-gradient-to-br from-[#00AEEF]/10 to-transparent rounded-bl-3xl" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {/* Name Field */}
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-bold text-gray-700 mb-2 text-right"
                                >
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                                    placeholder="أدخل اسمك الكامل"
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="relative">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-bold text-gray-700 mb-2 text-right"
                                >
                                    رقم الجوال
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                                    placeholder="05xxxxxxxx"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-bold text-gray-700 mb-2 text-right"
                                >
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                                    placeholder="example@email.com"
                                    dir="ltr"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group relative cursor-pointer w-full bg-gradient-to-r from-[#00AEEF] to-cyan-500 hover:from-[#2eb34b] hover:to-green-500 text-white font-bold py-5 px-8 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl text-lg overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3 justify-center">
                                    إرسال
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                            </button>

                            {/* Privacy Notice */}
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                                <Shield className="w-4 h-4 text-[#00AEEF]" />
                                <p>نضمن سرية معلوماتكم وخصوصيتكم</p>
                            </div>
                        </form>
                    </div>

                    {/* Additional Info */}
                    {/* <div className="text-center mt-8 text-gray-600">
                        <p className="text-sm">
                            أو تواصل معنا مباشرة عبر الهاتف:{" "}
                            <a href="tel:920012345" className="text-[#00AEEF] font-bold hover:underline">
                                920012345
                            </a>
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
