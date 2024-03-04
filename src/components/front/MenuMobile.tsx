'use client'

import { useTranslations } from "next-intl"
import Link from "next/link"



const MenuMobile = () => {
    const t = useTranslations("Header")
  return (
    <div className="flex flex-col justify-center items-start px-5 py-6 gap-y-1">
        <Link href='/'>
          <h6 className="text-md hover:text-gray-300 hover:text-lg">{t("navHome")}</h6>
        </Link>
        <Link href='/'>
          <h6 className="text-md  hover:text-gray-300 hover:text-lg">{t("navAbout")}</h6>
        </Link>
        <Link href='/'>
          <h6 className="text-md  hover:text-gray-300 hover:text-lg">{t("navServices")}</h6>
        </Link>
        <Link href='/'>
          <h6 className="text-md  hover:text-gray-300 hover:text-lg">{t("navActivity")}</h6>
        </Link>
        <Link href='/'>
          <h6 className="text-md  hover:text-gray-300 hover:text-lg">{t("navTrain")}</h6>
        </Link>
        <Link href='/'>
          <h6 className="text-md  hover:text-gray-300 hover:text-lg">{t("navContact")}</h6>
        </Link>

    </div>
  )
}

export default MenuMobile