import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/authSlice.js";


const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
