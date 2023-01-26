import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'EventState',
  initialState: {
    data: []
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    }
  },
});

export const {
  setData
} = slice.actions;

export const selectData = state => state.EventState.data;


export default slice.reducer;
