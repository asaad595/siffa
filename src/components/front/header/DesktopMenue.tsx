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
  import { tajawal } from "@/fonts/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { start } from "repl"
 type navProp = {
    home:string,
    contact:string,
    activity:string,
    course:string,
    about:string,
    member:string,
    locale:"en"|"ar",
    services:string,
    
 }
const DesktopMenue = ({home,contact, activity,services, course, about, member, locale}:navProp) => {
  
    
  return (
    
    <NavigationMenu className=" ">
    <NavigationMenuList className={cn('flex', locale=='ar'?'flex-row-reverse':'flex-row')}>
        {/* home  */}
    <NavigationMenuItem>
     <NavigationMenuTrigger className={`${tajawal.className}`}>{home}</NavigationMenuTrigger>
     <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
    </NavigationMenuContent>
   </NavigationMenuItem>
   {/* about  */}
    <NavigationMenuItem>
     <NavigationMenuTrigger>{about}</NavigationMenuTrigger>
     <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
    </NavigationMenuContent>
   </NavigationMenuItem>
   {/* service */}
    <NavigationMenuItem>
     <NavigationMenuTrigger>{services}</NavigationMenuTrigger>
     <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
    </NavigationMenuContent>
   </NavigationMenuItem>
   
 {/* activities  */}
    <NavigationMenuItem>
     <NavigationMenuTrigger>{activity}</NavigationMenuTrigger>
     <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
    </NavigationMenuContent>
   </NavigationMenuItem>
 {/* Courses  */}
    <NavigationMenuItem>
     <NavigationMenuTrigger>{course}</NavigationMenuTrigger>
     <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
    </NavigationMenuContent>
   </NavigationMenuItem>
   {/* contact list  */}
    <NavigationMenuItem>
     <NavigationMenuTrigger>{contact}</NavigationMenuTrigger>
     <NavigationMenuContent>
      <NavigationMenuLink>Link</NavigationMenuLink>
    </NavigationMenuContent>
   </NavigationMenuItem>

  </NavigationMenuList>
 </NavigationMenu>

 


  )
}

export default DesktopMenue