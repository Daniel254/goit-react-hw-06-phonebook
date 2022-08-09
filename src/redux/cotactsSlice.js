import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(...action.payload.contacts);
    },
    remove(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

export default contactsSlice.reducer;
export const { add, remove, setFilter } = contactsSlice.actions;
