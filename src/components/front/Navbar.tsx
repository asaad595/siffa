"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Image from "next/image"
import logo from '../../../public/img/header/logo.png'
import Fiata from '../../../public/img/header/fiata 1.png'
import Link from "next/link"
  

const Navbar = () => {
  return (
    <nav className="max-w-[1440px] bg-slate-400 max-h-16 mx-auto">
        <div className=" flex items-center w-full px-5 py-2">
            <div >
                <Link href="/">
                   <Image src={logo} width={200} height={30} alt="Siffa Logo" />
                </Link>

            </div>
            <div className="hidden xl:flex">
            <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
             <NavigationMenuTrigger>About Siffa</NavigationMenuTrigger>
             <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
           </NavigationMenuItem>
           {/* service */}
            <NavigationMenuItem>
             <NavigationMenuTrigger>Services</NavigationMenuTrigger>
             <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
           </NavigationMenuItem>
           
         {/* activities  */}
            <NavigationMenuItem>
             <NavigationMenuTrigger>Activites</NavigationMenuTrigger>
             <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
           </NavigationMenuItem>

          </NavigationMenuList>
         </NavigationMenu>

         

            </div>
            {/* fiata */}
            <div className="hidden xl:block">
                <Link href="#">
                    <Image src={Fiata} alt="Fiata Logo" />
                </Link>

            </div>
         
        </div>
     

    </nav>
  )
}

export default Navbar