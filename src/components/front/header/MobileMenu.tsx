"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavM from "./NavM"

const MobileMenu = ({locale}:{locale:"en"|"ar"}) => {
  return (
    <Sheet>
        <SheetTrigger> <Menu /> </SheetTrigger>
        <SheetContent side={locale == "en"? "left":"right"} className="bg-[#001500] h-full" > <NavM locale={locale} /> </SheetContent>
    </Sheet>
  )
}

export default MobileMenu