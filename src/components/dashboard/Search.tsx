import React from 'react'
import { Input } from '../ui/input'
import { MdSearch } from 'react-icons/md'

const Search = ({placeHolder}:{placeHolder:string}) => {
  return (
    <div>
        <div className='flex items-center bg-[#2e374a] px-3 py-1 rounded-[8px]'>

         <MdSearch size={30} className='bg-[#2e374a]'/>
         <Input   placeholder={`${placeHolder}`} className='rounded-lg border-none bg-[#2e374a] py-1 h-6'  />
       </div>
    </div>
  )
}

export default Search