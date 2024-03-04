'use client'

import { Input } from '@/components/ui/input'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const NavBar = () => {

const pathName = usePathname()
  return (
    <div className='flex items-center justify-between px-5 py-4 bg-Bgdash-foreground rounded-[8px]'>
        <div>
            {pathName.split('/').pop()?.toUpperCase()}
        </div>
        <div className='flex items-center justify-end gap-x-4'>
            <div className='flex items-center bg-[#2e374a] px-3 py-1 rounded-[8px]'>

            <MdSearch size={30} className='bg-[#2e374a]'/>
            <Input   placeholder='Search ...' className='rounded-lg border-none bg-[#2e374a] py-1 h-6'  />
            </div>
            <div className='flex justify-center gap-x-2'>
                <MdOutlineChat size={20} className='cursor-pointer' />
                <MdNotifications size={20} className='cursor-pointer' />
                <MdPublic size={20} className='cursor-pointer' />
            </div>

        </div>

    </div>
  )
}

export default NavBar