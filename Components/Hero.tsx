import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden min-h-[90vh] flex items-center pt-10 md:pt-5">
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

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* TEXT CONTENT */}
                <div className="w-full md:w-1/2 text-right md:pr-10 order-2 md:order-1">
                    <div className="relative inline-block mb-6">
                        <span className="relative inline-block py-2 px-4 text-[#2eb34b] text-sm font-bold z-10">
                            المستشفى السعودي الألماني عسير
                        </span>
                        {/* Brush stroke underline */}
                        <svg
                            className="absolute bottom-0 left-0 w-full h-3 -mb-1 z-0"
                            viewBox="0 0 200 10"
                            preserveAspectRatio="none"
                            style={{ animation: 'brushDraw 0.8s ease-out' }}
                        >
                            <path
                                d="M0,7 Q50,3 100,5 T200,6"
                                stroke="#2eb34b"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                opacity="0.4"
                            />
                        </svg>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">
                        قسم طب وجراحة الأعصاب
                    </h2>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
                        تقنيات دقيقة,<br />
                        <span className="text-[#00aae6] block md:inline">رعاية متقدمة,</span> {" "}
                        <span className="text-[#2eb34b]">نتائج أفضل.</span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl mb-5 leading-relaxed font-medium max-w-lg ml-auto">
                        نقدم أحدث التقنيات الطبية وفريق من الخبراء لضمان أفضل رعاية صحية لك ولعائلتك.
                    </p>

                    <button className="bg-[#00aae6] hover:bg-[#2eb34b] text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl text-lg cursor-pointer">
                        حجز استشارتك الآن
                    </button>
                </div>


                {/* Image */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative h-[35vh] md:h-[90vh] w-[90%] md:w-full">
                        <Image
                            src="/doctor.png"
                            alt="Doctor"
                            fill
                            priority
                            className="object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
