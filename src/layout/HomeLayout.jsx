import React from 'react'
import { Outlet } from 'react-router'
import HomeNavbar from '../components/Navbar'
import { LeftSlideBar, RightSlideBar } from '../components'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <HomeNavbar/>
      <div className='md:container flex mx-auto'>
        <LeftSlideBar/>
        <div className='main-bar pb-[50px] px-2  md:px-8 mt-5 md:mt-10'>
          <Outlet/>
        </div>
        <RightSlideBar/>
      </div>
    </>
  )
}

export default HomeLayout