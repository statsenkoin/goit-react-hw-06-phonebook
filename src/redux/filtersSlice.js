import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//     state: ''
// }
const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      // action code
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
