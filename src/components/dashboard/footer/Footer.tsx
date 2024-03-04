'use client'
import Image from 'next/image'
import React from 'react'

const Footer = () => {

    const d = new Date()
    let year = d.getFullYear()

  return (
    <div className='flex justify-between items-center px-5 py-8 '>
        <div>
            <Image src='/img/header/logo.png' width={175} height={100} alt='logo Siffa'/>
        </div>
        <div>
            <span className='text-[18px] text-grey'>all right reserved © {year}</span>
        </div>
    </div>
  )
}

export default Footer