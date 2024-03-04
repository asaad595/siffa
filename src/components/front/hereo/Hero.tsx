"use client"

import { useTranslations } from 'next-intl';                                                                    
import Banner from '../header/Banner';
import VedioHero from '../header/Vedio';

const Hero = () => {
  const t=useTranslations('Hero')
  
  return (
    <section className='w-full left-0  top-0 relative flex flex-col justify-center items-center xl:mb-15'>
    <VedioHero />
    <Banner text={t('Siffa')}/>
  
    </section>
  )
}

export default Hero