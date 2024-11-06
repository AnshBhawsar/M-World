import { configureStore } from '@reduxjs/toolkit'
import  movieReducer  from './reducers/movieSlice'
import  tvReducer  from './reducers/tvSlice'
import personReducer from './reducers/personSlice'



export const store = configureStore({
  reducer: {
  
    person:personReducer,
    movie:movieReducer,
    tv:tvReducer,
  },

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())