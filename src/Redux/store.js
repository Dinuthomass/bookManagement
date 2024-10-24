import { configureStore } from "@reduxjs/toolkit";
import addSlice from './Slice/addSlice'

const store = configureStore({
    reducer:{
        addReducer:addSlice
    }
})
export default store