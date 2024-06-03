import React from 'react'
import { Avatar, Button, Checkbox, Input, Textarea, Typography } from '@material-tailwind/react'
import { CameraIcon } from '@heroicons/react/24/solid'

const UpdateProfile = () => {
    const open = [
        {
            id:1,
            name:"Education",
        },
        {
            id:2,
            name:"Business",
        },
        {
            id:3,
            name:"Technology",
        }
    ];
    const [select, setSelect] = React.useState([]);
    return (
        <div className="flex justify-center mt-4">
            <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 overflow-hidden pb-[40px] bg-white rounded-lg ">
            <div className="flex items-center gap-5 flex-col">
                <div className="bg-secondary h-[150px] md:h-[200px] w-full flex justify-center">
                    <Avatar src="./src/assets/image/user.svg" alt="avatar" className='mt-[60px] md:mt-[100px] w-40 h-40 md:w-56 md:h-56' />
                    <label htmlFor='file' className='bg-black-low mt-[60px] md:mt-[100px] w-40 h-40 md:w-56 md:h-56 absolute rounded-full flex justify-center items-center cursor-pointer'>
                        <CameraIcon className='w-[50px] h-[50px] text-primary select-none'/>
                    </label>
                    <input type='file' id='file' className='hidden'/>
                </div>
                <div className='mt-[60px] md:mt-[120px] w-full md:w-3/4 lg:w-2/3 px-4'>
                    <div className='float-left w-full'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            First Name
                        </Typography>
                        <Input type="email" label="Enter first name" />
                    </div>
                    <div className='float-left w-full mt-4'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Last Name
                        </Typography>
                        <Input type="email" label="Enter last name" />
                    </div>
                    <div className='float-left w-full mt-4'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Username
                        </Typography>
                        <Input type="email" label="Enter username" />
                    </div>
                    <div className='float-left w-full mt-4'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Address
                        </Typography>
                        <Input type="email" label="Enter address" />
                    </div>
                    <div className='float-left w-full mt-4'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Bio
                        </Typography>
                        <Textarea type="email" label="Enter bio" />
                    </div>
                    <div className='float-left w-full mt-4'>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Select Your Familiar Category
                        </Typography>
                        <div className="flex flex-wrap">
                            {open.map(item=><Checkbox label={item.name} key={item.id} id={item.id} onChange={()=>{
                                select.includes(item.id) ? setSelect(select.filter(i=>i != item.id)) : select.push(item.id);
                            }}/>)}
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <Button className='float-right' onClick={()=>console.log(select)}>Update Profile</Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UpdateProfile