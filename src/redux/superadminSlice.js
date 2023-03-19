import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    superSlice:null,
    }

    export const superSlice = createSlice({
    name: 'superadmin',
    initialState,
    reducers: {
        successLogin: (state,action) => {
            state.superSlice = action.payload.super;
        },
        logout:(state)=>{
            state.superSlice=null;
        },
        updatesuper:(state,action)=>
        {
        state.superSlice.super = action.payload.super
        }
    },
    })

// Action creators are generated for each case reducer function
export const { successLogin ,logout,updatesuper} = superSlice.actions

export default superSlice.reducer