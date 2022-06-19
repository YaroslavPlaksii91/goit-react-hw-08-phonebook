import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
