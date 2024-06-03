import React from 'react';
import { Avatar, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList, Tooltip } from '@material-tailwind/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { CreatePost } from '../../components';
import { AdjustmentsVerticalIcon , FireIcon , ChatBubbleLeftEllipsisIcon , ArrowDownCircleIcon , ArrowUpCircleIcon , EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../store/appSlice/service';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [openPost, setOpenPost] = React.useState(false);
  const init = useSelector(state=>state.app);
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth);
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(user.auth == null){
      navigate('/login')
    }else if(init.allPost.length == 0){
      dispatch(getPost())
    }
  },[])
  return (
    <>
      <CreatePost isOpen={openPost} handleOpen={(data)=>setOpenPost(!data)}/>
      <div className="flex justify-center mt-4">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white rounded-lg p-3 ">
          <div className="flex items-center gap-5">
            <Avatar src='/src/assets/image/user.svg' alt='userID'/>
            <Input label='Create a post' onClick={()=>setOpenPost(!openPost)}/>
            <IconButton variant='text' className='px-3'>
              <PaperAirplaneIcon className='w-6 h-6'/>
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white rounded-lg  rounded-b-none p-3">
          <div className='flex items-center gap-3'>
            <span className="">Filter</span>
            <Menu placement='bottom-start'>
              <MenuHandler>
                <IconButton variant='text'>
                  <AdjustmentsVerticalIcon className='w-6 h-6'/>
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white p-3 absolute"></div>
      </div>
      {init.allPost.map((item,index)=><div key={index} className="flex justify-center mt-3">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white rounded-lg p-3">
          <div className='flex gap-3 items-center'>
            <div className='flex gap-3 flex-1'>
              <Avatar src="/src/assets/image/user.svg" alt="avatar" />
              <div className="w-full md:w-2/3">
                  <p className="font-bold text-sm truncate w-[170px]">{item.first_name + ' ' + item.last_name}</p>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs truncate">1day</p>
              </div>
            </div>
            <Menu placement='bottom-end'>
              <MenuHandler>
                <Tooltip content="click and direct message">
                  <IconButton variant='text'>
                    <EllipsisVerticalIcon className='w-6 h-6'/>
                  </IconButton>
                </Tooltip>
              </MenuHandler>
              <MenuList>
                <MenuItem>Direct message</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="p-3">{item.post_body}</div>
          <div className="w-full">
            {item.user_picture_url != null && <img src={'http://127.0.0.1:8000/'+item.user_picture_url} className='mx-auto' alt=''/>}
          </div>
          <div className='border-t-[1px] mt-2 border-third py-2'>
            <div className="flex justify-around">
              <div className="flex items-center gap-1">
                <IconButton variant='text'>
                  <FireIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
                <span>10</span>
              </div>
              <div className="flex items-center gap-1">
                <IconButton variant='text'>
                  <ChatBubbleLeftEllipsisIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
                <span>150</span>
              </div>
              <div className="flex items-center gap-1">
                <IconButton variant='text'>
                  <ArrowDownCircleIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
                <span>150</span>
                <IconButton variant='text'>
                  <ArrowUpCircleIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
              </div>
            </div>
          </div>
          <div className='border-t-[1px] mt-2 border-third py-2'>
            <div className="flex items-center gap-8">
              <Avatar src='/src/assets/image/user.svg' alt=''/>
              <Input type='text' className='' label='Add a comment...' />
              <IconButton variant='text' className='px-3'>
                <PaperAirplaneIcon className='w-6 h-6'/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>)}
      <div className="flex justify-center mt-3">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white rounded-lg p-3">
          <div className='flex gap-3'>
            <Avatar src="/src/assets/image/user.svg" alt="avatar" />
            <div className="w-full md:w-2/3">
                <p className="font-bold text-sm truncate w-[170px]">Dhamidmu prasad</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consec dwfqf4gescqegrhtjy</p>
                <p className="text-xs truncate">1day</p>
            </div>
          </div>
          <div className="p-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, adipisci. Corporis, ea odio sequi animi dolorum iste necessitatibus fuga autem ducimus libero, numquam enim saepe suscipit laudantium voluptatibus consectetur! Laboriosam, ut ipsam cupiditate amet ea, quidem inventore consequatur magnam totam voluptatem similique itaque minima esse vel ipsum, iusto exercitationem delectus eos? In totam, corporis molestiae, ipsa quo, dignissimos illum ut asperiores explicabo veniam repellendus reprehenderit.</div>
          <div className="w-full">
            <img src='/src/assets/image/post2.png' className='mx-auto' alt=''/>
          </div>
          <div className='border-t-[1px] mt-2 border-third py-2'>
            <div className="flex justify-around">
              <div className="flex items-center gap-1">
                <IconButton variant='text'>
                  <FireIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
                <span>150</span>
              </div>
              <div className="flex items-center gap-1">
                <IconButton variant='text'>
                  <ChatBubbleLeftEllipsisIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
                <span>150</span>
              </div>
              <div className="flex items-center gap-1">
                <IconButton variant='text'>
                  <ArrowDownCircleIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
                <span>150</span>
                <IconButton variant='text'>
                  <ArrowUpCircleIcon className='w-6 h-6 text-secondary'/> 
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home