import { FaPhoneVolume } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import { SocialMedia } from "./SocialMedia";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";

export const ConNav = ({nav}:{nav:boolean}) => {
  const t = useTranslations("HeaderContact")
  return (
    <div className={`' transition-all duration-500 hidden xl:flex items-center z-50 justify-center  bg-pink absolute top-0 w-full mb-5 text-grey   '`}>
    
        <div className='container  h-full   w-full py-1 '>

       <div className='flex items-center justify-between mx-5  '>
        <div className="flex gap-x-4 ">
        <div className="flex items-center gap-x-2 text-sm" >
            <MdEmail className="text-secondary "/> 
            <p className=" text-primary hover:text-secondary" >info@siffa.org.sy </p>

            </div >
            <div className="flex items-center gap-x-2 text-sm" >
            <FaPhoneVolume className="text-secondary "/> 
            <p className=" text-primary hover:text-secondary" >+963 11 231 6166 </p>

            </div >
            
            <div className="flex items-center gap-x-2 text-sm">
                <MdAddLocationAlt className="text-secondary "/>
                <p className=" text-primary hover:text-secondary">{t("address")}</p>
            </div>
        </div>
        <div>
           <SocialMedia/>
        </div>
       </div>
        </div>
    </div>
  )
}