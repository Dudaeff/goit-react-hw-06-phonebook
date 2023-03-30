import { nanoid } from 'nanoid';
import { actionTypes } from './constants';

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.addContact:
      return [...state, { ...action.payload, id: nanoid() }];
    case actionTypes.deleteContact:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.filter:
      return action.payload;
    default:
      return state;
  }
};
