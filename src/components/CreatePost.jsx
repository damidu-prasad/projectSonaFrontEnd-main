import React from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea } from '@material-tailwind/react'
import { PlusIcon } from '@heroicons/react/24/solid'

const CreatePost = ({isOpen,handleOpen}) => {
  return (
    <div>
        <Dialog size='xs' open={isOpen} handler={handleOpen}>
            <DialogHeader>Create Post</DialogHeader>
            <DialogBody >
                <div className=''>
                    <div className='py-2'>
                        <Input label='Enter post title....'/>
                    </div>
                    <div className='pb-2'>
                        <Textarea label='Enter post body....'/>
                    </div>
                    <div className="flex">
                        <label htmlFor="postImg" className='h-[60px] w-full flex justify-center items-center gap-2 rounded-lg bg-blue-gray-400 '>
                            <PlusIcon className='w-6 h-6 text-white'/> <span className='text-white'>add Image</span>
                        </label>
                        <input type='file' id='postImg' className='hidden'/>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
            <Button
                variant="outlined"
                onClick={handleOpen}
                className="mr-3"
            >
                <span>Cancel</span>
            </Button>
            <Button variant="filled" onClick={handleOpen}>
                <span>Confirm</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </div>
  )
}

export default CreatePost