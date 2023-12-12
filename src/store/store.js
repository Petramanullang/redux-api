import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/authSlice.js";
import usersReducer from "../reducer/userSlice.js";


const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
  },
});

export default store;
