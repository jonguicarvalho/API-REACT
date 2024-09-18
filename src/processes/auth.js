import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../app/client';

export const login = createAsyncThunk('auth/login', async (formData) => {
  const { data, error } = await client({
    method: 'post',
    url: '/tokens',
    data: formData,
  });

  return { data, error };
});

export const register = createAsyncThunk('auth/create-account', async (formData) => {
  const { data, error } = await client({
    method: 'post',
    url: '/todo',
    data: formData,
  });

  return { data, error };
});
