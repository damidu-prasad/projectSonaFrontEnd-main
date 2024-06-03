import React from "react";
import { Input, Typography, Checkbox, Button } from "@material-tailwind/react";
import { loginimg } from "../../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice/service";
import { useNavigate } from "react-router-dom";
import { setData } from "../../store/authSlice";

const Login = () => {
  const [userData, setUserData] = React.useState({
    email:'',
    password:''
  });
  const dispach = useDispatch();
  const auth = useSelector(state=>state.auth);
  const navigate = useNavigate()
  React.useEffect(()=>{
    if(auth.auth != null){
      navigate('/')
    }else{
      dispach(setData())
    }
  },[auth.auth])
  return (
    <div className="flex bg-primary">
      <div className="bg-primary absolute sm:w-[50%] h-screen order-1 flex justify-center item-center">
        <div className="sm:w-[80%] w-[80%] text-center flex flex-col align-text-bottom sm:py-[7%] py-[10%]">
          <h2 className="text-3xl font-bold text-secondary">Sign In</h2>
          <br />
          <p>Enter you email and password to Sign in</p>
          <div className="text-start mt-10">
            {auth.error != null && <Typography
              variant="small"
              color="gray"
              className="my-2 flex items-center gap-1 font-normal text-red-500"
            >
              {auth.error}  
            </Typography>}
            <label className="font-bold">Email</label>
            <Input size="lg" label="email" onChange={e=>setUserData({...userData,email:e.target.value})}/>
          </div>
          <div className="py-0 text-start mt-5">
            <label className="font-bold">Password</label>
            <Input type="password" label="Password"  onChange={e=>setUserData({...userData,password:e.target.value})}/>
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
          </div>
          <br />
          <br />
          <Typography>
            <a href="#">Forgot password</a>
          </Typography>

          <br />

          <Button className="text-white bg-secondary w-full" onClick={()=>dispach(login(userData))}>
            Sign in
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Create new account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </div>
      </div>
      {/* image side */}
      <div className="hidden items-end w-[100%] h-full order-2 sm:flex">
        <div className="flex-1">
            
        </div>
        <div className="flex h-screen  bg-black">
          <img src={loginimg} className="h-screen object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
