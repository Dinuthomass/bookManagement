
import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "books",
    initialState: {
        books: [] 
    },
    reducers: {
        addbook: (state, action) => {
            state.books.push(action.payload); 
        }
    }
})
export const { addbook } = addSlice.actions;
export default addSlice.reducer;
