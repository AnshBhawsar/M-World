import { createSlice } from '@reduxjs/toolkit'
import { info } from 'autoprefixer'


const initialState = {
    info:null,
  }
  export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        loadperson:(state,action)=>{
            state.info=action.payload;
        },
        removeperson:(state)=>{
            state.info=null;
        }
     
    },
  })
  
  
  export const { loadperson,removeperson } =personSlice.actions
  
  export default personSlice.reducer