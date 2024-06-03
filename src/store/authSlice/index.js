import { createSlice } from "@reduxjs/toolkit";
import { login } from "./service";
import { takeFirst } from "../../utils/splitData";
import { LocalStorage } from "local-storage-browser";
import http from "../../utils/http";

const init = {
    userData:null,
    auth:null,
    isLoding:false,
    error:null,
}

const authSlice = createSlice({
    initialState:init,
    name:'auth',
    reducers:{
        setData:(state)=>{
            state.auth = JSON.parse(LocalStorage.get('auth'))
            state.userData = JSON.parse(LocalStorage.get('userData'))
            if(state.auth != null){
                http.defaults.headers.common['Authorization'] = 'Bearer '+state.auth.access_token;
                http.defaults.headers.common['Content-Type'] = 'application/json'
            }
        },
        removeData:(state)=>{
            LocalStorage.clearAll()
            if(state.auth != null){
                state.auth = null,
                state.userData = null
            }
        }
    },
    extraReducers:builder=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoding = true;
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            LocalStorage.set('auth',JSON.stringify(action.payload.data.auth))
            LocalStorage.set('userData',JSON.stringify(action.payload.data.userData))
            state.userData = action.payload.data.userData;
            state.auth = action.payload.data.auth
            http.defaults.headers.common['Authorization'] = 'Bearer '+state.auth.access_token;
            http.defaults.headers.common['Content-Type'] = 'application/json'
        })
        builder.addCase(login.rejected,(state,action)=>{
            state.error = takeFirst(action.error.message)
            state.isLoding = true;
        })
    }
});

export const { setData , removeData } = authSlice.actions;
export default authSlice.reducer;
