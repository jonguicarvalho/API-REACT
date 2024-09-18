import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { index } from '../../processes/list';

export const ListEntitiesAdapter = createEntityAdapter();

const initialState = ListEntitiesAdapter.getInitialState();

export const ListSlice = createSlice({
  name: 'lists',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(index.fulfilled, (state, action) => {
      ListEntitiesAdapter.setMany(state, action.payload.data);
    });
  },
});

export const { selectAll: getAllLists } = ListEntitiesAdapter.getSelectors((state) => state.entities.lists);

export default ListSlice.reducer;
