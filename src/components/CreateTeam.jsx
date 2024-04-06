import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import PlayersList from "./PlayersList";
import { useParams } from "react-router-dom";
const CreateTeam = () => {
  const { match_id } = useParams();
  console.log(match_id);
  return (
    <div className="gradient-container h-full font-mono">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 justify-around mt-[10px] mx-[30px] rounded-3xl pb-6 bg-slate-100">
          <div className="flex justify-center items-center">
            <h2 className="font-semibold mx-auto pb-3 text-black">RR</h2>
          </div>
          <div className="text-black">
            <h1 className="font-bold flex justify-center pt-3 text-[20px]">Indian Premier League T20</h1>
            <center className="m-3 gap-4 p-2 ">
              <h2 className="font-semibold mx-auto pb-3">Vs</h2>
              <h4 className="font-light">Starts at Fri 07:30 PM</h4>
            </center>

            <center className="m-4">
              {" "}
              <h1>Ground: WankheSwami Monsighn Stadium, Jaipur</h1>
            </center>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="font-semibold mx-auto pb-3 text-black">GT</h2>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-[#000000] underline text-[30px] font-extrabold py-4">
          Select your Team
        </h1>
      </div>
      <PlayersList matchId={match_id} />
    </div>
  );
};

export default CreateTeam;
