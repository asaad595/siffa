import { Button } from '@/components/ui/button'
import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between'>
        <Button>Prev</Button>
        <Button>Next</Button>
    </div>
  )
}

export default Pagination