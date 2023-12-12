import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../reducer/authSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await dispatch(fetchLogin({ email, password }));
      Navigate("/");
      console.log("Login berhasil");
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <div className="">
      <img
        src="./src/assets/bg.png"
        alt=""
        className="w-full h-full -z-30 fixed top-0 blur-sm brightness-75 object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        <div className="flex justify-center items-center h-screen">
          <div className="rounded-xl mt-10 md:mt-0 bg-gray-700 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex flex-col justify-center items-center">
            <a
              href="#"
              className="flex items-center md:mb-6 mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
              <img
                className="w-8 h-8 mr-2"
                src="../../public/redux.svg"
                alt="logo"
              />
              Redux-API
            </a>

            <div className="md:p-6 p-3 space-y-4 md:space-y-6 ">
              <h1 className="text-xl md:mb-0 mb-2 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@reqres.in"
                    required=""
                  />
                </div>

                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    className="absolute right-0 top-7 pr-3 inset-y-0"
                    type="button"
                    onClick={handleShowPassword}>
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white stroke-2">
                        <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 m-0 text-white stroke-2">
                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-7">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 md:text-sm text-xs">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="md:text-sm text-xs font-medium text-gray-900 hover:underline dark:text-primary-500">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-700 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg text-sm py-2.5 text-center">
                  Sign in
                </button>
                <p className="text-sm font-light text-white">
                  Don't have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-300 hover:underline dark:text-primary-500">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
