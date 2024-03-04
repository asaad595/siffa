import Search from '@/components/dashboard/Search'
import Pagination from '@/components/dashboard/pagination/Pagination'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdHdrPlus, MdPlusOne, MdSearch } from 'react-icons/md'

const NewsPage = () => {
  return (
    <div>
      {/* top */}
      <div className='flex items-center justify-between  py-3' >
        <div>
         <Search placeHolder='Serach News ..... '/>
        </div>
        <Link href='/dashboard/news/add'>
        <Button variant={'outline'} className='h-8 rounded-[8px] text-sm'> Add New <MdPlusOne size={20}/> </Button>
        </Link>

      </div >
      {/* buttom */}
      <div>
        <div className="relative overflow-x-auto py-3 px-1   shadow-md sm:rounded-lg">
          <table className='w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr className='' >
                <td scope='col' className='px-6 py-3'>Name</td>
                <td scope='col' className='px-6 py-3'>Email</td>
                <td scope='col' className='px-6 py-3'>Created At</td>
                <td scope='col' className='px-6 py-3'>Role</td>
                <td scope='col' className='px-6 py-3'>Status</td>
                <td scope='col' className='px-6 py-3'>Activity</td>
              </tr>
            
            </thead>
            <tbody className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <tr itemScope  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                <td className='px-6 py-3'>
                  <div className='flex items-center gap-x-1'>
                    <Image src='/noavatar.png' width={40} height={40} alt='user photo' className='rounded-full'/>
                    Asaad Ahmar
                  </div>
                </td>
                <td className='px-6 py-3'>Asaad@gmail.com</td>
                <td className='px-6 py-3'>Oct 30 5 2024</td>
                <td className='px-6 py-3'>Admin</td>
                <td>Active</td>
                <td className='px-6 py-3'>
                  <div className='flex items-center gap-3'>

                  <Link href=''>
                    <Button className='bg-green-800/80 h-6 rounded-[5px]  hover:bg-green-950'> View </Button>

                  </Link>
                  <Link href=''>
                    <Button className='bg-red-800/80 h-6 rounded-[5px] hover:bg-red-950'> View </Button>

                  </Link>
                  </div>
                </td>
            </tr>
            <tr  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                <td className='px-6 py-3'>
                  <div className='flex items-center gap-x-1'>
                    <Image src='/noavatar.png' width={40} height={40} alt='user photo' className='rounded-full'/>
                    Asaad Ahmar
                  </div>
                </td>
                <td className='px-6 py-3'>Asaad@gmail.com</td>
                <td className='px-6 py-3'>Oct 30 5 2024</td>
                <td className='px-6 py-3'>Admin</td>
                <td>Active</td>
                <td className='px-6 py-3'>
                  <div className='flex items-center gap-3'>

                  <Link href=''>
                    <Button className='bg-green-800/80 h-6 rounded-[5px]  hover:bg-green-950'> View </Button>

                  </Link>
                  <Link href=''>
                    <Button className='bg-red-800/80 h-6 rounded-[5px] hover:bg-red-950'> View </Button>

                  </Link>
                  </div>
                </td>
            </tr>
            <tr  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                <td className='px-6 py-3'>
                  <div className='flex items-center gap-x-1'>
                    <Image src='/noavatar.png' width={40} height={40} alt='user photo' className='rounded-full'/>
                    Asaad Ahmar
                  </div>
                </td>
                <td className='px-6 py-3'>Asaad@gmail.com</td>
                <td className='px-6 py-3'>Oct 30 5 2024</td>
                <td className='px-6 py-3'>Admin</td>
                <td>Active</td>
                <td className='px-6 py-3'>
                  <div className='flex items-center gap-3'>

                  <Link href=''>
                    <Button className='bg-green-800/80 h-6 rounded-[5px]  hover:bg-green-950'> View </Button>

                  </Link>
                  <Link href=''>
                    <Button className='bg-red-800/80 h-6 rounded-[5px] hover:bg-red-950'> View </Button>

                  </Link>
                  </div>
                </td>
            </tr>

            </tbody>
          </table>
          <div className='w-full py-2'>
            <Pagination/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NewsPage
