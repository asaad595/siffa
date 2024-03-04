"use client"

import { useTranslations } from "next-intl"
import Navbar from "./front/Navbar"
import { ConNav } from "./ConNav"
type NavProbs = {
    locale : "en"|"ar",
  
}
const MainNav = ({locale}:NavProbs) => {

  return (
    <div className="absolute top-0 left-0 w-full">
        <ConNav/>
        <Navbar locale={locale}/>
    </div>
  )
}

export default MainNav