import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/MovieSlicer';
import useReducer from '../features/user/UserSlicer';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user:useReducer,
  },
});
