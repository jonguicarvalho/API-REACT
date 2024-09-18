import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../app/client';

export const index = createAsyncThunk('list-index', async () => {
  const { data, error } = await client({
    method: 'get',
    url: '/list',
  });

  return { data, error };
});

export const tasks = createAsyncThunk('tasks-index', async (id) => {
  const { data, error } = await client({
    method: 'get',
    url: `/task/${id}`,
  });

  return { data, error };
});
