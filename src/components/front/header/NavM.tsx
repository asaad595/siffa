"use client"
import { SocialMedia } from '@/components/SocialMedia'
import Image from 'next/image'
import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import LanguageSwitcher from './LanguageSwitcher'
import MenuMobile from '../MenuMobile'

const NavM = ({locale}:{locale:"en"|"ar"}) => {
  return (
    <div className='h-screen flex-col justify-around items-center py-5 px-2'>
      <div className='flex flex-col items-center gap-y-3  border border-t-0 border-l-0 border-r-0 pb-5 border-b-gray-400 border-spacing-5 '>
        <Image src='/img/header/logo.png' width={250} height={100} alt='logo Siffa' />
        <LanguageSwitcher language={locale} />
        
            <div className="flex items-center gap-x-2 text-sm" >
            <FaPhoneVolume className="text-secondary "/> 
            <p className=" text-primary hover:text-secondary" >+963 11 231 6166 </p>

            </div >

      </div>
      {/* menu */}
      <div className=' '>
        <MenuMobile />
      </div>
      {/* social media  */}
      <div className='  flex flex-col py-6 items-center  bottom-0 border border-b-0 border-l-0 border-r-0 pb-5 mt-3 border-t-gray-400 border-spacing-5'>
        <SocialMedia/>
      </div>

    </div>
  )
}

export default NavM