import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { index } from '../../processes/list';
import { remove_list, store_list } from '../../processes/create';

export const ListEntitiesAdapter = createEntityAdapter();

const initialState = ListEntitiesAdapter.getInitialState();

export const ListSlice = createSlice({
  name: 'lists',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(index.fulfilled, (state, action) => {
      ListEntitiesAdapter.setMany(state, action.payload.data);
    });
    builder.addCase(store_list.fulfilled, (state, action) => {
      ListEntitiesAdapter.updateOne(state, action.payload.data);
    });
    builder.addCase(remove_list.fulfilled, (state, action) => {
      ListEntitiesAdapter.removeOne(state, action.payload.data);
    });
  },
});

export const { selectAll: getAllLists } = ListEntitiesAdapter.getSelectors((state) => state.entities.lists);
export const { selectById: getIdList } = ListEntitiesAdapter.getSelectors((state) => state.entities.lists);

export default ListSlice.reducer;
