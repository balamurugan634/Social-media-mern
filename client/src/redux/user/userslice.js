import { createSlice } from "@reduxjs/toolkit";
const initialState={
    currentuser:null,
    loading:false,
    error:null
}
const userSlice=createSlice(
    {
        name:"user2",
        initialState,
        reducers:{
            Signinstart:(state)=>{
                state.loading=true
            },
            Signinsuccess:(state,action)=>{
                state.currentuser=action.payload;
                state.loading=false;
                state.error=null;
            },
            Signinfailure:(state,action)=>{
                state.loading=false
                state.error=action.payload
            },
            uploadstart:(state)=>{
                state.loading=true
                state.error=null
            },
            uploadsuccess:(state,action)=>{
                // state.currentuser=action.payload;
                state.loading=false;
                state.error=null;
            },
            uploadfailure:(state,action)=>{
                state.loading=false
                state.error=action.payload
            }
        }
    }
)
export const {Signinfailure,Signinstart,Signinsuccess,uploadfailure,uploadstart,uploadsuccess}=userSlice.actions;
export default userSlice.reducer