import React from 'react'
import { Avatar, IconButton, Input } from '@material-tailwind/react'
import { AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'

const RightSlideBar = () => {
  return (
    <div className='w-0 md:w-[240px] bg-white shadow-lg rounded-lg scroll overflow-y-scroll h-slider sticky top-[100px]'>
        <div className='p-2 flex border-b-[1px] border-third'>
            <Input variant='outlined' label='search message'/>
            <IconButton variant='text'>
                <AdjustmentsVerticalIcon className='w-6 h-6'/>
            </IconButton>
        </div>
        {/* <div className='mt-[50px] flex flex-col items-center'>
            <img src="/src/assets/image/noData.svg" alt="rage-nodata" className="mx-auto" />
            <span className="font-bold text-xl mt-5">No messages yet</span>
        </div> */}
        <div className="flex items-center gap-2 p-2  border-b-[1px] border-third">
            <Avatar className='cursor-pointer' onClick={()=>{}} src="/src/assets/image/user.svg" alt="avatar" />
            <div>
                <p className="font-bold text-sm truncate w-[170px]">Dhamidmu prasad</p>
                <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
            </div>
        </div>
    </div>
  )
}

export default RightSlideBar