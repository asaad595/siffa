"use client"
import React from 'react'
import {FadeIn} from '../../../../variants'
import {motion} from 'framer-motion'
import Image from 'next/image'
import logo from  '../../../../public/sifa- next.png'
const Banner = ( {text}:{text:any}) => {
  return (
    
    <motion.div
    variants={FadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once:false, amount: 0 }}
    
    className='absolute z-10 text-white bg-[#000]/30 rounded-sm px-3 py-2'>
        <div className='flex flex-col justify-center items-center'>

          <div className='flex gap-x-1 items-center'>
            <Image src={logo} width={40} height={40} alt='logo' />  
            <h5 className='text-white text-[12px] md:text-[16px] '>  Siffa Logistic Support  </h5>
          </div>
          <div className='w-[300px] text-center  md:w-[500px] xl:w-[600px] flex flex-col justify-center items-center '>

            <h3 className='text-white text-[20px] md:text-[36px] md:leading-10 flex flex-col justify-center items-center  '> {text}  </h3>
          </div>
        </div>
    
    </motion.div>
  )
}

export default Banner