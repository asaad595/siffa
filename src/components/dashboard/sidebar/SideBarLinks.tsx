'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SideProbs {
    title:string,
    path:string,
    icon:any 
}
const SideBarLinks = ({title,path,icon}:{title:string, path:string,
    icon:any }) => {
      const pathName = usePathname()
  return (

    <Link href={path} key={title} className={cn('flex items-center gap-x-3 py-2 px-4 ', pathName==path && "bg-[#2e374a] rounded-[8px] ms-2 " )}>
    {icon} 
    <div className='hover:font-semibold hover:text-slate-400 px-5'>
      {title}
    </div>
    </Link>
  )
}

export default SideBarLinks