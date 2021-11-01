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
    removeCategory: (state) => {
      
        state.categories=[]
    },
  }
});

//Actions
export const {
  addCategory,
  removeCategory
} = slice.actions;


//Getters
export const selectCategories = (state) => state.categories.categories;

export default slice.reducer;
