import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../pages/Login/authReducer';
import UserReducer from './entities/users';
import ListReducer from './entities/lists';
import TaskReducer from './entities/tasks';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    entities: combineReducers({
      users: UserReducer,
      lists: ListReducer,
      task: TaskReducer,
    }),
  },
});
