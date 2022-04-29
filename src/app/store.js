import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/MovieSlicer';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
