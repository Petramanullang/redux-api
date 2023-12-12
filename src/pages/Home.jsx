import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <img
        src="./src/assets/bg.png"
        alt=""
        className="w-full h-full -z-30 fixed top-0 blur-sm brightness-75 object-cover"
      />
      <div className="md:grid flex flex-col items-center">
        <h2 className="text-3xl font-bold my-7 text-white mx-auto">
          User List
        </h2>
        <Card />
      </div>
    </div>
  );
};

export default Home;
