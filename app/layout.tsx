import type { Metadata } from "next";
import { diodrum } from "./fonts";
import "./globals.css";
import ToasterProvider from "@/Components/ToasterProvider";

export const metadata: Metadata = {
    title: "SGH Hail – Dermatology & Aesthetic Center",
    description:
        "جمالك يبدأ من هنا. عناية متكاملة لبشرتك وجمالك في المستشفى السعودي الألماني – حائل، مع فريق متخصص من أطباء الجلدية والتجميل يقدمون رعاية شاملة باستخدام أحدث التقنيات وخطط علاجية مخصصة لك.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl">
            <body className={`${diodrum.variable} font-sans antialiased`}>
                <ToasterProvider />
                {children}
            </body>
        </html>
    );
}
