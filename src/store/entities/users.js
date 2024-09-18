import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { register } from '../../processes/auth';

export const UserEntityAdapter = createEntityAdapter();

const initialState = UserEntityAdapter.getInitialState();

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      UserEntityAdapter.setOne(state, action.payload.data);
    });
  },
});

export const { selectById: getUserById } = UserEntityAdapter.getSelectors((state) => state.entities.users);

export default UserSlice.reducer;
