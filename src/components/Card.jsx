import React, { useState } from "react";
import { fetchUsers } from "../reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const showModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
  };

  const hideModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Variabel untuk animasi
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
    <div>
      <button
        onClick={logoutUser}
        className="text-black bg-white h-16 w-full md:w-40 md:absolute md:h-10 md:rounded-lg flex justify-center items-center fixed bottom-0 z-10 right-[0%] md:right-[6%] md:top-[4%]">
        <p className="text-xl">Log Out</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-9 h-7 ml-3 mt-1 stroke-1 md:w-10 md:h-10 md:hidden">
          <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-20 md:grid-cols-2 lg:grid-cols-3 place-items-center space-y-5 ">
        {users.map((user) => (
          <motion.div
            key={user.id}
            className="min-w-[300px] bg-opacity-30 bg-white backdrop:blur-xl rounded-lg shadow"
            initial="hidden"
            animate="visible"
            variants={variants}>
            <a href="#">
              <motion.img
                className="rounded-t-lg w-full h-56 object-cover"
                src={user.avatar}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </a>
            <motion.div
              className="p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                  {user.email}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                {user.first_name} {user.last_name}
              </p>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-[#22092C] rounded-lg">
                  Edit
                </a>
                <button
                  onClick={showModal}
                  href=""
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#22092C] rounded-lg">
                  Delete
                </button>
              </div>

              <div
                id="modal"
                aria-hidden="true"
                className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${
                  isModalOpen ? "" : "hidden"
                }`}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                  <div className="relative p-4 text-center bg-white rounded-lg top-[35%] shadow dark:bg-gray-800 sm:p-5">
                    <button
                      onClick={hideModal}
                      type="button"
                      className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <svg
                      className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
                    </svg>
                    <p className="mb-4 text-gray-500 dark:text-gray-300">
                      Are you sure you want to delete this User?
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                      <button
                        onClick={hideModal}
                        type="button"
                        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        No, cancel
                      </button>
                      <button
                        onClick={hideModal}
                        type="submit"
                        className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        Yes, I'm sure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
