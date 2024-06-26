import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import exampleReducer from './exampleReducer';
import postsItemReducer from './bulletin/postsItemReducer';
import locationReducer from './map/locationReducer';

const rootReducer = combineReducers({
  // list of Reducers
  exampleReducer,
  postsItemReducer,
  locationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// useSelector 시
// const example = useSelector((state: RootState) => state.exampleReducer.exampleActionFunction);
