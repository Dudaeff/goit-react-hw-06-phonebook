import { actionTypes } from './constants';

export const addContact = contact => {
  return {
    type: actionTypes.addContact,
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: actionTypes.deleteContact,
    payload: id,
  };
};

export const setFilter = text => {
  return {
    type: actionTypes.filter,
    payload: text,
  };
};
