import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo-hospital-1.svg"
              alt="Hospital Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-[#00aae6] hover:bg-[#2eb34b] text-white font-bold py-3 px-4 md:px-8 rounded-full transition duration-300 shadow-md text-sm md:text-base cursor-pointer">
            <a href="#contact-form">
              احجز استشارتك الآن
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
