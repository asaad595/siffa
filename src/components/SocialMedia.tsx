import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const SocialMedia  = () => {
  return (
    <div className ='flex gap-x-5 text-md text-primary z-50'>
        <MdOutlineFacebook  className="hover:text-accent cursor-pointer" />
        <FaTwitter className="hover:text-accent cursor-pointer" />
        <FaLinkedin className="hover:text-accent cursor-pointer" />
        <FaInstagramSquare className="hover:text-wihte cursor-pointer" />
    </div>
  )
}