"use client";

import { useState } from "react";
import { Send, Shield } from "lucide-react";
import { toast } from "sonner";

type ContactFormData = {
    name: string;
    phone: string;
    email: string;
};

export default function ContactFormSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        phone: "",
        email: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        if (formData.name.trim().length < 3) {
            toast.error("الاسم قصير جدًا");
            return false;
        }

        if (!/^05\d{8}$/.test(formData.phone)) {
            toast.error("رقم الجوال غير صحيح");
            return false;
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast.error("البريد الإلكتروني غير صحيح");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);
        const toastId = toast.loading("جاري إرسال الطلب...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error("SERVER_ERROR");
            }

            const data: { success: boolean; error?: string } = await res.json();

            if (!data.success) {
                throw new Error(data.error || "UNKNOWN_ERROR");
            }

            toast.success("تم إرسال الطلب بنجاح", {
                id: toastId,
            });

            setFormData({ name: "", phone: "", email: "" });
        } catch (err) {
            toast.error(
                err instanceof Error
                    ? "حدث خطأ أثناء الإرسال، حاول مرة أخرى"
                    : "حدث خطأ غير متوقع",
                { id: toastId }
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div id="contact-form" className="w-full scroll-mt-20">
            <div className="w-full">
                <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
                    {/* Header */}
                    <div className="text-center mb-6 relative z-10">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                            <span className="text-[#00AEEF] font-bold text-xs tracking-wider uppercase">
                                احجز استشارتك
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            <span className="text-transparent bg-clip-text bg-linear-to-l from-[#00AEEF] to-cyan-600">
                                ابدأ رحلتك
                            </span>{" "}
                            نحو الجمال
                        </h3>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 relative z-10"
                    >
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                                الاسم
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="أدخل اسمك الكامل"
                                className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                                رقم الجوال
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="05xxxxxxxx"
                                className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 text-right">
                                البريد الإلكتروني
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                dir="ltr"
                                className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-2xl focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/10 outline-none transition-all"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group w-full cursor-pointer bg-linear-to-r from-[#00AEEF] to-cyan-500 hover:from-[#2eb34b] hover:to-green-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-2xl ${
                                isSubmitting
                                    ? "opacity-70 cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            <span className="flex items-center justify-center gap-3">
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        جاري الإرسال...
                                    </>
                                ) : (
                                    <>
                                        إرسال الطلب
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </span>
                        </button>

                        {/* Privacy */}
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
