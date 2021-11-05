import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "categories",
  initialState: {    
    categories: []
  },
  reducers: {
    addCategory: (state, action) => {
      
      state.categories.push(action.payload);
    },
    removeByCategory: (state,action) => {      
      state.categories = state.categories.filter((category) => category !== action.payload)
    },
    removeCategory: (state) => {
      
        state.categories=[]
    },
  }
});

//Actions
export const {
  addCategory,
  removeByCategory,
  removeCategory
} = slice.actions;


//Getters
export const selectCategories = (state) => state.categories.categories;

export default slice.reducer;
