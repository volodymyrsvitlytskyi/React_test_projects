import React from 'react';
import {
  ADD_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CONTACTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
      break;
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false
      };
      break;
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
      break;
    case CLEAR_CURRENT:
      return { ...state, current: null };
      break;
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
      break;
    case CLEAR_FILTER:
      return { ...state, filtered: null };
      break;
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact._id !== action.payload)
        ],
        loading: false
      };
      break;
    default:
      return state;
  }
};
