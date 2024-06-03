import React from "react";
import {
  Avatar,
} from "@material-tailwind/react";

import { CreatePost } from "../../components";

const LeaderBoard = () => {
  const [openPost, setOpenPost] = React.useState(false);

  return (
    <>
      <CreatePost isOpen={openPost} handleOpen={(data) => setOpenPost(!data)} />
      <div className="flex justify-center mt-3">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 items-center bg-secondary rounded-lg p-3 ">
          <div className="text-center items-center gap-5 ">
            <span className="text-primary ">LEADERBOARD</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white p-3 absolute"></div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="w-full sm:w-2/3 md:w-full lg:w-3/4 bg-white rounded-lg p-3">
          <div className="lg:flex gap-3 items-center sm:border-b-2">
            <div className=" gap-2  items-center sm:h-72 sm:w-3/4 rounded-lg  bg-primary lg:w-2/4">
              <div className=" text-center mt-2 items-center">
                <span className="font-bold">Top 1</span>
                <div className="p-7  flex items-center flex-col  border-b-2">
                  <img
                    src="/src/assets/image/user.svg"
                    className="rounded-full w-20"
                    alt=""
                  />
                </div>
                <div className="border-b-2 mt-2">
                  <span className="font-bold">Damidu Prsad</span>
                  <br />
                  <span>03 March 2023</span>
                </div>
                <div className="mt-2 mb-4">
                  <span className="font-bold ">Total Point</span>
                  <br />
                  <span>34</span>
                </div>
              </div>
            </div>
            <div className=" gap-2  items-center h-72   sm:w-full lg:w-2/4">
              <div className="flex items-center gap-2 p-2 mt-1 border-b-[1px] bg-primary rounded-lg">
                <Avatar
                  className="cursor-pointer"
                  onClick={() => {}}
                  src="/src/assets/image/user.svg"
                  alt="avatar"
                />
                <div className="flex">
                  <div>
                    <p className="font-bold text-sm truncate w-[170px]">
                      Dhamidmu prasad
                    </p>
                    <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
                  </div>
                  <div className="mt-2 ">
                    <span>30</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-1 gap-2 p-2  border-b-[1px] bg-primary rounded-lg">
                <Avatar
                  className="cursor-pointer"
                  onClick={() => {}}
                  src="/src/assets/image/user.svg"
                  alt="avatar"
                />
                <div className="flex">
                  <div>
                    <p className="font-bold text-sm truncate w-[170px]">
                      Dhamidmu prasad
                    </p>
                    <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
                  </div>
                  <div className="mt-2">
                    <span>30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" align-middle justify-center  mt-3 items-center rounded-lg lg:bg-primary">
            {/*  */}
            <div className=" gap-2 lg:ms-8  items-center  lg:flex  sm:w-full ">
              <div className="flex items-center gap-2 p-2  border-b-[1px] lg:bg-white rounded-lg">
                <Avatar
                  className="cursor-pointer"
                  onClick={() => {}}
                  src="/src/assets/image/user.svg"
                  alt="avatar"
                />
                <div className="flex">
                  <div>
                    <p className="font-bold text-sm truncate w-[170px]">
                      Dhamidmu prasad
                    </p>
                    <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-1 gap-2 p-2  border-b-[1px] lg:bg-white rounded-lg">
                <Avatar
                  className="cursor-pointer"
                  onClick={() => {}}
                  src="/src/assets/image/user.svg"
                  alt="avatar"
                />
                <div className="flex">
                  <div>
                    <p className="font-bold text-sm truncate w-[170px]">
                      Dhamidmu prasad
                    </p>
                    <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className=" gap-2 lg:ms-8  items-center   lg:flex  sm:w-full ">
              <div className="flex items-center gap-2 p-2  border-b-[1px] bg-white rounded-lg">
                <Avatar
                  className="cursor-pointer"
                  onClick={() => {}}
                  src="/src/assets/image/user.svg"
                  alt="avatar"
                />
                <div className="flex">
                  <div>
                    <p className="font-bold text-sm truncate w-[170px]">
                      Dhamidmu prasad
                    </p>
                    <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-1 gap-2 p-2  border-b-[1px] bg-white rounded-lg">
                <Avatar
                  className="cursor-pointer"
                  onClick={() => {}}
                  src="/src/assets/image/user.svg"
                  alt="avatar"
                />
                <div className="flex">
                  <div>
                    <p className="font-bold text-sm truncate w-[170px]">
                      Dhamidmu prasad
                    </p>
                    <p className="text-sm truncate w-[170px]">Dfebknldmw,</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
