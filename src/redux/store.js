import { configureStore } from '@reduxjs/toolkit';
import { reducer, reducerForm } from './reducer';

export const store = configureStore({
  reducer: {
    userAuthorization: reducer,
    form: reducerForm,
  },
});
