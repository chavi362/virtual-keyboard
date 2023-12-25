import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonColors: '',
};

const keyboardButtonsClor = createSlice({
  name: 'color',
  initialState,
  reducers: {
    addBtnColor: (state, action) => {
      state.buttonColors = action.payload;
    },
  },
});

export const { addBtnColor } = keyboardButtonsClor.actions;
export default keyboardButtonsClor.reducer;
