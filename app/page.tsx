import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import DoctorsSection from "@/Components/DoctorsSection";
import ServicesSection from "@/Components/ServicesSection";
import WhyUsSection from "@/Components/WhyUsSection";
import WhyGermanHospital from "@/Components/WhyGermanHospital";
import ContactFormSection from "@/Components/ContactFormSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <DoctorsSection />
        <ServicesSection />
        <WhyUsSection />
        <WhyGermanHospital />
        <ContactFormSection />
      </main>
    </div>
  );
}
