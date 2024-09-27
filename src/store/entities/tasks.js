import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { tasks } from '../../processes/list';
import { remove, store, update } from '../../processes/create';

export const TasksEntitiesAdapter = createEntityAdapter({
  selectId: (task) => task.id || '',
});

const initialState = TasksEntitiesAdapter.getInitialState({
  loggedIn: true,
});

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(tasks.fulfilled, (state, action) => {
      TasksEntitiesAdapter.setMany(state, action.payload.data);
    });
    builder.addCase(store.fulfilled, (state, action) => {
      TasksEntitiesAdapter.setOne(state, action.payload.data);
    });
    builder.addCase(update.fulfilled, (state, action) => {
      TasksEntitiesAdapter.updateOne(state, {
        id: action.payload.data.id,
        changes: {
          task: action.payload.data.task,
          due_date: action.payload.data.due_date,
          check: action.payload.data.check,
        },
      });
    });
    builder.addCase(remove.fulfilled, (state, action) => {
      TasksEntitiesAdapter.removeOne(state, action.payload.data.id);
    });
  },
});

export const { selectAll: getAllTasks, selectById: getIdTask } = TasksEntitiesAdapter.getSelectors(
  (state) => state.entities.task,
);

export default TaskSlice.reducer;
