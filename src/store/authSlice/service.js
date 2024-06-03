import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http";

export const login = createAsyncThunk('auth.login',async(data)=>{
    try {
        const res = await http.post('auth/login',data);
        return res.data
    } catch (error) {
        throw error
    }
})