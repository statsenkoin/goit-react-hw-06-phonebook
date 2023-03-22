import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//     state: ''
// }
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    setStatusContacts(state, action) {
      // action code
    },
  },
});

export const { setStatusContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
