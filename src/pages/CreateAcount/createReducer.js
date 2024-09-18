import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../processes/auth';

const regSlice = createSlice({
  name: 'reg',
  intialState: {
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading = true;
      });
  },
});

export const getRegState = (state) => state.reg;

export default regSlice.reducer;
