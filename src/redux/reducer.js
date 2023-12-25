import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonColors: '',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    addBtnColor: (state, action) => {
      state.buttonColors = action.payload;
    },
  },
});

export const { addBtnColor } = colorSlice.actions;
export default colorSlice.reducer;
