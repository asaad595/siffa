'use client'
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { amiriFont } from "@/fonts/fonts";

const LanguageSwitcher = ({language}:{language:string | undefined}) => {
        
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale()
  
 

  const varLang:string|undefined = language =='ar'? "en" : "ar"
  const handleLocale = (lang:string)=>{
    let curLang = pathName
 
    curLang= curLang.substring(3)
   
    window.location.replace(`/${lang}/${curLang}`)
   
  }

  return (
    <div >
        <Button onClick={()=>handleLocale(varLang)}  className=' cursor-pointer w-[40px] h-[40px] rounded-full border border-white flex flex-col justify-center items-center ' >

              <h5  className={ `${amiriFont} cursor-pointer text-white  ` }>
                {language =='ar'? "En" :"ع"}
              </h5>
        </Button>
    </div>
  )
}

export default LanguageSwitcher