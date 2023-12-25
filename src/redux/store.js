import { configureStore } from "@reduxjs/toolkit";
import buttonColor from "./keyboardButtonsClor";


const store = configureStore({
  reducer:
  {
    color: buttonColor,
  } 
});

export default store;
