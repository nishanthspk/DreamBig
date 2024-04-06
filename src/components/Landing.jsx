import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DreamBig from "../assets/DreamBig.png";
import { GetPrice, Register } from "../BlockchainServices";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const RegisterHandler = async () => {
    // Check if name is not empty
    if (!name.trim()) {
      console.error("Name cannot be empty");
      return;
    }

    try {
      console.log("Registering with name:", name);
      
      // Call the Register function
      const res = await Register({ name });
      
      // Check if registration was successful
      if (res) {
        console.log("Registration successful");
        navigate("/contest");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  return (
    <>
      <div className="gradient-container">
        <div className="fixed w-full top-0">
          <Navbar />
        </div>
      </div>
      <div className="gradient-container h-screen flex justify-center pt-[50px] items-stretch font-mono">
        <div>
          <div className="text-black font-semibold pt-[8%]">
            <p className="text-6xl flex justify-center">DreamBig🚀</p>
            <p className="text-4xl flex justify-center">
              A fantasy cricket application
            </p>
          </div>
          <div className="text-black flex justify-center p-3">
            <h2 className="font-medium ">
              Get started by creating your dream team
            </h2>{" "}
          </div>
          <div className="text-black flex justify-center">
            <h2 className="p-3 font-bold animate-pulse">
          
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center mt-6">
            <label className="text-black text-[25px] px-4 text-center py-5">
              Enter your name:{" "}
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered text-center input-primary w-full h-[34px] max-w-xs rounded-sm placeholder:px-3"
            />

            <center className="pt-4">
              <button
                className="items-center cursor-pointer mb-10 border-2 border-black font-medium  py-2 px-4 hover:bg-red-600 hover:text-white shadow-lg"
                type="button" // Change type to "button"
                onClick={RegisterHandler}
              >
                Submit 🡥
              </button>
            </center>
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute bottom-0 w-full opacity-5"
          src={DreamBig}
          alt=""
        />
      </div>
    </>
  );
}

export default App;
