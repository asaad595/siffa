"use client"
import { useTranslations } from "next-intl"

import Image from "next/image"
import logo from '../../../public/img/header/logo.png'
import Fiata from '../../../public/img/header/fiata 1.png'
import Link from "next/link"
import MobileMenu from "./header/MobileMenu"
import DesktopMenue from "./header/DesktopMenue"
import LanguageSwitcher from "./header/LanguageSwitcher"
import { ConNav } from "../ConNav"
import { useEffect, useState } from "react"
import { ScrollFunction } from "@/actions/windowsScroll"
import NavM from "./header/NavM"
  

const Navbar = ({locale,text, textContact}:{locale:"en"|"ar", text?:string, textContact?:string}) => {
       
   
    const t = useTranslations("Header")
    
    const [nav, setNav] = useState(false)

    useEffect(()=>{
        const handlScroll = ()=>{
            if(window.scrollY > 40){
                setNav(true)
                
            }else{
                setNav(false)
            }
        }
        

        window.addEventListener('scroll',handlScroll)

        return 
            window.removeEventListener('scroll',handlScroll)
        

    })
   
  return (
    
   
    <nav className="  py-2  xl:py-5 top-0 max-h-20 text-white mx-auto w-full    text-center absolute flex flex-col items-center justify-center   ">
        <ConNav nav={nav} />
        <div className={`${nav ? 'bg-[#322229c1] h-14 shadow-md fixed py-5   mt-10 flex justify-between items-center xl:mt-5 ' : '  bg-transparent xl:h-20 h-10 xl:mt-20 shadow-none  '}'  flex justify-between items-center text-white xl:px-20 px-4  w-full    z-20 transition-all duration-300 '`}>
            <div >
                <Link href="/">
                   <Image src={logo} width={300} height={70} alt="Siffa Logo" />
                </Link>

            </div>
            {/* mobile menu  */}
            <div className="xl:hidden absolute end-4  ">
                <MobileMenu locale={locale}/>
            </div>
                {/* desktop menu  */}
           <div className="hidden xl:flex flex-row-reverse items-center">
            <LanguageSwitcher language={locale} />
            <DesktopMenue locale={locale} course={t('navTrain')} home={t('navHome')} contact={t('navContact')} activity={t('navActivity')} about={t('navAbout')} services={t('navServices')} member={""} />

           </div>
            {/* fiata */}
            <div className="hidden xl:block xl:end-3">
                <Link href="#">
                    <Image src={Fiata} alt="Fiata Logo" />
                </Link>

            </div>
         
        </div>
    </nav>
    
  )
}

export default Navbar

