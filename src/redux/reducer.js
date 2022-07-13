import { createReducer } from '@reduxjs/toolkit';
import { actionLogin } from './actions';

const initialState = {
  users: ['Vasya', 'Sacha', 'Olya'],
  login: false,
};

export const reducer = createReducer(initialState, {
  [actionLogin]: (state, action) => {
    return {
      ...state,
      login: state.users.find(user => action.payload === user) ? true : false,
    };
  },
});
