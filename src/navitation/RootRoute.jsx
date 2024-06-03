import React from 'react';
import {Routes , Route} from 'react-router-dom';
import { Home , LeaderBoard, Login , UpdateProfile } from '../pages'; 
import HomeLayout from '../layout/HomeLayout';
import Regiter from '../pages/auth/Register';



const RootRoute = () => {
    return (
       <Routes>
            <Route path='/' element={<HomeLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/updateProfile" element={<UpdateProfile />} />
                <Route path="/leaderBoard" element={<LeaderBoard />} />
            </Route>
            <Route path="/register" element={<Regiter />} />
            <Route path="/login" element={<Login />} />
       </Routes>
        
              
    )
}

export default RootRoute