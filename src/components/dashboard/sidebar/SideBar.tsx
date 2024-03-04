import React from 'react'
import { MdDashboard, MdLogout } from 'react-icons/md'
import menuLink from './SideBarLinks'
import SideBarLinks from './SideBarLinks'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const SideBar = () => {
    const menuItems = [
        {
            title:"Dashboard",
            path:"/dashboard",
            icon:<MdDashboard/>,
        },
        {
            title:"Users",
            path:"/dashboard/users",
            icon:<MdDashboard/>,
        },
        {
            title:"News",
            path:"/dashboard/news",
            icon:<MdDashboard/>,
        },
        {
            title:"Activity",
            path:"/dashboard/activity",
            icon:<MdDashboard/>,
        },
        {
            title:"Courses",
            path:"/dashboard/courses",
            icon:<MdDashboard/>,
        },
        {
            title:"Tutor",
            path:"/dashboard/tutor",
            icon:<MdDashboard/>,
        },
        {
            title:"Member",
            path:"/dashboard/member",
            icon:<MdDashboard/>,
        },
        {
            title:"Team",
            path:"/dashboard/team",
            icon:<MdDashboard/>,
        },
        {
            title:"Setting",
            path:"/dashboard/setting",
            icon:<MdDashboard/>,
        },
        {
            title:"Help",
            path:"/dashboard/help",
            icon:<MdDashboard/>,
        },
    ]

  return (
    <div className=''>
        <div className=' flex items-center justify-start gap-x-5 py-5 '>
            <div>

            <Image src='/noavatar.png' width={75} height={75} alt='user Avatar' className='rounded-full'/>
            </div>
            <div className='text-[14px] flex flex-col items-center justify-center gap-0 '>
                <p className='my-[-5px]'>Asaad  Alahmar</p>
                <p className='my-[-10px] p-[-5px] text-slate-600 text-[12px]'>General Manager</p>
            </div>

        </div>
        <ul>
            {menuItems.map((menu)=>(
              
                <SideBarLinks path={menu.path} title={menu.title} icon={menu.icon} key={menu.title} />
            ))}
            <div className='ms-5 flex items-center gap-x-1'>
                <MdLogout size={20} />
                <Button variant={'ghost'} className='hover:font-semibold hover:text-slate-400 px-5' > Logout</Button>
            </div>


        </ul>

    </div>
  )
}

export default SideBar