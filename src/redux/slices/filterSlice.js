import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSort: {
    name: "популярности",
    sortProperty: "rating",
  },
  activeCategory: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },

    setActiveSort: (state, action) => {
      state.activeSort = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;
