import AboutSection from "@/components/front/about/AboutSection";
import Gellery from "@/components/front/gellery/Gellery";
import Hero from "@/components/front/hereo/Hero";
import News from "@/components/front/news/News";
import Services from "@/components/front/services/Services";
import ContactSection from "@/components/front/Contact/ContactSection";
import Image from "next/image";
import Footer from "@/components/front/footer/Footer";

export default function Home({params}:any) {
  
  return (
    <div className="max-full  bg-white overflow-hidden ">

      <Hero/>
      <div className=" flex flex-col items-center justify-center px-5 xl:max-w-[1400px] mx-auto">

      <AboutSection/>
      <News/>
      <Gellery/>
      <Services/>
      <ContactSection/>
      <Footer/> 
      <div className="h-[1000px]">

      </div>
      </div>
      
    </div>
    
  );
}
