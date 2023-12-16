import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// Simpan token ke dalam variabel global jika perlu
let authToken = null;

// Mengatur token setelah login berhasil
const setAuthToken = (token) => {
  authToken = token;
  localStorage.setItem("token", token);
};

// Action untuk melakukan login dan mendapatkan token
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (credentials) => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      setAuthToken(data.token); //Untuk Simpan token setelah login berhasil
      return data;
    } else {
      throw new Error(data.error); //Untuk Handle error jika login gagal
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      authToken = null; //Untuk Reset token setelah logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succes";
        state.user = action.payload;
        Swal.fire({
          icon: "success",
          title: "Login Berhasil!",
        })
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: action.error.message,
        })
      });
  },
});

export const { setUser, logoutUser } = loginSlice.actions;
export const selectUser = (state) => state.login.user;

export default loginSlice.reducer;
