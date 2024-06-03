import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon , HomeIcon , RectangleStackIcon , ChatBubbleBottomCenterIcon , UserGroupIcon } from '@heroicons/react/24/solid'
import { logo } from "../assets/image";
 
const HomeNavbar = ()=> {
 
  const navList = (
    <ul className="flex gap-4 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex flex-col items-center w-[40px] md:w-[90px]">
            <HomeIcon className="h-6 w-6"/>
            <span className="hidden md:block">Home</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/mypost" className="flex flex-col items-center w-[40px] md:w-[90px]">
            <RectangleStackIcon className="h-6 w-6"/>
            <span className="hidden md:block">My Post</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/notification" className="flex flex-col items-center w-[40px] md:w-[90px]">
            <ChatBubbleBottomCenterIcon className="h-6 w-6"/>
            <span className="hidden md:block">Notification</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/leaderBoard" className="flex flex-col items-center w-[40px] md:w-[90px]">
            <UserGroupIcon className="h-6 w-6"/>
            <span className="hidden md:block">Leaderboard</span>
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="sticky top-0 md:top-[10px] z-[999]">
        <Navbar className="mx-auto rounded-none md:rounded-lg max-w-screen-lg bg-white py-2 px-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                as="a"
                href="/"
                className="mr-4 cursor-pointer font-medium"
                >
                <img 
                    src={logo}
                    alt="rage-logo"
                    className="h-[50px]"
                />
                </Typography>
                <div>{navList}</div>
                <IconButton variant="filled" className="bg-secondary px-5">
                    <MagnifyingGlassIcon className="h-6 w-6"/>
                </IconButton>
            </div>
        </Navbar>
    </div>
  );
}

export default HomeNavbar