import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
import { endgame } from "../BlockchainServices.js";

const LeaderBoard = ({ contestName, performance }) => {
  const [finished, setfinished] = useState(false);
  const handleEnd = async () => {
    console.log("ending");
    const res = await endgame({ contestName, performance });
    console.log(res);
    if (res) {
      setfinished(true);
    }
  };
  return (
    <div className=" h-full">
      <div className="text-white">
        <button
          className="items-center m-5 border-2 border-black font-medium text-black  py-2 px-4 hover:bg-red-600 hover:text-white shadow-lg"
          onClick={handleEnd}
        >
          {!finished ? "Result" : "Match isn't over yet! "}
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
