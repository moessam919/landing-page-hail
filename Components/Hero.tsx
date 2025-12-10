import Image from "next/image";
import ContactFormSection from "./ContactFormSection";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden min-h-[80vh] flex items-center pt-10 md:pt-5">

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0 100 C 20 0 50 0 100 100 Z"
                        fill="none"
                        stroke="rgba(0, 170, 230, 0.08)"
                        strokeWidth="2"
                    />
                    <path
                        d="M0 0 C 50 100 80 100 100 0 Z"
                        fill="none"
                        stroke="rgba(46, 179, 75, 0.08)"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-start md:items-center gap-8 md:gap-12">

                {/* TEXT CONTENT */}
                <div className="w-full md:w-1/2 text-right md:pr-10 order-2 md:order-1">

                    {/* Hospital Tag */}
                    <div className="relative inline-block mb-6">
                        <span className="relative inline-block py-2 px-4 text-[#2eb34b] text-sm font-bold z-10">
                            المستشفى السعودي الألماني – حائل
                        </span>

                        {/* Brush stroke underline */}
                        <svg
                            className="absolute bottom-0 left-0 w-full h-3 -mb-1 z-0"
                            viewBox="0 0 200 10"
                            preserveAspectRatio="none"
                            style={{ animation: 'brushDraw 0.8s ease-out' }}
                        >
                            <path
                                d="M0,7 L200,7"
                                stroke="#2eb34b"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                opacity="0.4"
                            />
                        </svg>
                    </div>

                    {/* Small Title */}
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">
                        مركز الجلدية والتجميل
                    </h2>

                    {/* Main Hero Title */}
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
                        جمالك يبدأ من هنا،<br />
                        <span className="text-[#00aae6] block md:inline">عناية متكاملة لبشرتك،</span>{" "}
                        <span className="text-[#2eb34b]">تجربة مميزة.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-lg md:text-xl mb-5 leading-relaxed font-medium max-w-lg ml-auto">
                        في المستشفى السعودي الألماني – حائل، فريقنا المتخصص من أطباء الجلدية والتجميل
                        جاهزون لتقديم رعاية متكاملة باستخدام أحدث التقنيات في المملكة. ملتزمون بتقديم
                        أفضل تجربة لكم، ونوفر لكم خطط علاجية وتجميلية تلبي احتياجاتكم الشخصية.
                    </p>


                </div>

                {/* FORM */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative w-full max-w-md">
                        <ContactFormSection />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
