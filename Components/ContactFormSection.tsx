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
        <div id="contact-form" className="w-full scroll-mt-20">
            {/* Contact Form Card */}
            <div className="w-full">
                <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-20 bg-gradient-to-br from-[#00AEEF]/10 to-transparent rounded-bl-3xl" />

                    {/* Form Header */}
                    <div className="text-center mb-6 relative z-10">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                            <span className="text-[#00AEEF] font-bold text-xs tracking-wider uppercase">
                                احجز استشارتك
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00AEEF] to-cyan-600">
                                ابدأ رحلتك
                            </span>
                            {" "}نحو الجمال
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
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
                                className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
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
                                className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
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
                                className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                                placeholder="example@email.com"
                                dir="ltr"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group relative cursor-pointer w-full bg-gradient-to-r from-[#00AEEF] to-cyan-500 hover:from-[#2eb34b] hover:to-green-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl text-base overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3 justify-center">
                                إرسال الطلب
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500" />
                        </button>

                        {/* Privacy Notice */}
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
                            <Shield className="w-3.5 h-3.5 text-[#00AEEF]" />
                            <p>نضمن سرية معلوماتكم</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
