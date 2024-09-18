import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { tasks } from '../../processes/list';

export const TasksEntitiesAdapter = createEntityAdapter();

const initialState = TasksEntitiesAdapter.getInitialState();

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(tasks.fulfilled, (state, action) => {
      TasksEntitiesAdapter.setMany(state, action.payload.data || []);
    });
  },
});

export const { selectAll: getAllTasks } = TasksEntitiesAdapter.getSelectors((state) => state.entities.task);

export default TaskSlice.reducer;
