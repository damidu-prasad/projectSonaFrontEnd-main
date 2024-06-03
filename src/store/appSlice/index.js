import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getPost } from "./service";
import { takeFirst } from "../../utils/splitData";

const init = {
    isLoding:false,
    error:null,
    postCategory:[],
    allPost:[],
}

const appSlice = createSlice({
    initialState:init,
    name:'app',
    extraReducers:builder=>{
        builder.addCase(getCategory.pending,(state)=>{
            state.isLoding = true;
        })
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.postCategory = action.payload.data.categories
        })
        builder.addCase(getCategory.rejected,(state,action)=>{
            state.error = takeFirst(action.error.message)
            state.isLoding = true;
        })
        builder.addCase(getPost.pending,(state)=>{
            state.isLoding = true;
        })
        builder.addCase(getPost.fulfilled,(state,action)=>{
            state.allPost = action.payload.post
            console.log(action.payload.post);
        })
        builder.addCase(getPost.rejected,(state,action)=>{
            state.error = takeFirst(action.error.message)
            state.isLoding = true;
        })
    }
})

export const { pointIncreament } = appSlice.actions;

export default appSlice.reducer;