import React from 'react'
import { Avatar, Button, IconButton, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../store/appSlice/service'
import { useNavigate } from 'react-router-dom'
import { removeData } from '../store/authSlice'

const LeftSlideBar = () => {
    const auth = useSelector(state=>state.auth);
    const app = useSelector(state=>state.app);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    React.useEffect(()=>{
        if(app.postCategory.length == 0){
            dispatch(getCategory())
        }
    },[])
    if(auth.auth == null){
        return <></>
    }
    return (
    <div className='w-0 bg-white md:w-[240px] shadow-lg rounded-lg scroll overflow-y-scroll h-slider sticky top-[100px]'>
        <div className="bg-secondary h-[120px] flex items-center flex-col">
            <Avatar src="./src/assets/image/user.svg" alt="avatar" className='mt-[50px] cursor-pointer' onClick={()=>navigate('/updateProfile')} size='xxl' />
        </div>
        <div className="flex flex-col mt-[50px] px-4">
            <span className='font-semibold  text-center'>{auth.userData.username==null?'':auth.userData.username}</span>
            <span className="text-sm text-center">{auth.userData.bio==null?'':auth.userData.bio}</span>
            <span className='font-semibold mt-[40px]'>Your familiar catogary</span>
            {app.postCategory.map(item=><Button key={item.id} variant='text' className='flex mt-4 text-secondary'>{item.name}</Button>)}
            <Menu placement="bottom-start">
                <MenuHandler>
                    <IconButton variant='text' className='ms-auto'>
                        <PlusIcon className="h-5 w-5"/>
                    </IconButton>
                </MenuHandler>
                <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                </MenuList>
            </Menu>
        </div>
        <div className="flex justify-center absolute bottom-0 items-center w-full py-5">
            <Button variant='filled' className='bg-secondary text-white' onClick={()=>{
                dispatch(removeData());
                navigate('/login')
            }}>LogOut</Button>
        </div>
    </div>
  )
}

export default LeftSlideBar