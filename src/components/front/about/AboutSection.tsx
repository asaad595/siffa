import { useTranslations } from 'next-intl'
import React from 'react'

const AboutSection = () => {
  const t = useTranslations("AboutSection")
  return (
    <section className=' my-5 xl:py-10 xl:mt-15 text-center'>
        <h1 className='text-red-400 text-center py-5'>{t("title")} </h1>
        <div className='flex flex-col gap-x-5 xl:flex-row'>
            {/* right section  */}
            <div className=' xl:w-1/3 flex flex-col gap-y-1'>
                <h5>{t("WhatIsSiffa")} </h5>
                <p>
                    {t("AboutDescription")}

                </p>

            </div>
            {/* left section  */}
            <div className='xl:w-2/3 flex flex-col  gap-y-2 text-center xL:text-start '>
                <div className='flex flex-col xl:flex-row'>
                    <div className='w-1/2'>
                        <div>
                         <h5>{t("AboutMission")}</h5>
                        </div>
                        <p></p>
                    </div>
                    <div className='w-1/2'>
                        <div>
                         <h5>{t("AboutMission")}</h5>
                        </div>
                        <p></p>
                    </div>
 
                </div>
                <div>
                <div>
                         <h5>{t("AboutMission")}</h5>
                        </div>
                        <p></p>
                </div>

            </div>

        </div>
    </section>
  )
}

export default AboutSection