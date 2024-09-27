import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../app/client';
import { check } from 'prettier';

export const store = createAsyncThunk('task-store', async ({ formData, list_id }) => {
  const { data, error } = await client({
    method: 'post',
    url: `/task/${list_id}`,
    data: formData,
  });

  return { data, error };
});

export const update = createAsyncThunk('task-update', async ({ formData, task_id }) => {
  const { data, error } = await client({
    method: 'put',
    url: `/task/${task_id}`,
    data: formData,
  });

  return { data, error };
});

export const remove = createAsyncThunk('task-delete', async (id) => {
  const { data, error } = await client({
    method: 'delete',
    url: `/task/${id}`,
  });

  return { data, error };
});

export const store_list = createAsyncThunk('list-store', async (formData) => {
  const { data, error } = await client({
    method: 'post',
    url: '/list',
    data: formData,
  });

  return { data, error };
});

export const update_list = createAsyncThunk('task-update', async ({ formData, id }) => {
  const { data, error } = await client({
    method: 'put',
    url: `/list/${id}`,
    data: formData,
  });
  return { data, error };
});

export const remove_list = createAsyncThunk('task-delete', async (id) => {
  const { data, error } = await client({
    method: 'delete',
    url: `/list/${id}`,
  });

  return { data, error };
});
