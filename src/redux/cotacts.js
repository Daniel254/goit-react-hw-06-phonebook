import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.items.push(...action.payload.contacts);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    setContactFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  blacklist: ['filter'],
};

export const getContactsFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export default persistReducer(persistConfig, contactsSlice.reducer);
export const { addContacts, removeContact, setContactFilter } =
  contactsSlice.actions;
