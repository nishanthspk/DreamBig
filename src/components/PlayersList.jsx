import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { CreateTeam } from "../BlockchainServices";

const PlayersList = ({ matchId }) => {
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [credits, setCredits] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [select, setSelect] = useState([]);
  const navigate = useNavigate();

  const fetchAPI = async () => {
    const storedData = JSON.parse(localStorage.getItem("myteam"));
    if (storedData) {
      setSelect(storedData);
      return;
    }
    const options = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`,
      headers: {
        "X-RapidAPI-Key": "9b118b0c0dmsh14abcc471abbd5cp16b2e9jsn8fb2030c6ddf",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const team1 = response.data.matchInfo.team1;
      const team2 = response.data.matchInfo.team2;
      setTeam1Players(team1.playerDetails);
      setTeam2Players(team2.playerDetails);
      localStorage.setItem("myTeam", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  var spent = 0;
  const [spending, setSpending] = useState(0);

  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers((prev) => prev.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers((prev) => [...prev, playerId]);
    }
  };

  const handleSelect = () => {
    spent = spending + spent;
  };

  useEffect(() => {
    handleSelect();
    spent += spending;
    console.log(spending);
    console.log(spent);
  }, [spending]);
  const team_players = [];
  const teamplayer1 = () =>
    team1Players.map((player, index) => {
      if (
        player.role === "Batsman" ||
        player.role === "Bowler" ||
        player.role === "WK-Batsman" ||
        player.role === "Bowling Allrounder"
      ) {
        const isSelected = selectedPlayers.includes(player.id);
        return (
          <div
            id={index}
            className={`flex bg-[#0C0F0C] p-5 rounded-3xl gap-4 ${
              isSelected ? "bg-green-500" : ""
            }`}
            onClick={() => {
              if (isSelected) {
                setSelectedPlayers(
                  selectedPlayers.filter((selected) => selected !== player.id)
                );
              } else if (selectedPlayers.length < 11) {
                setSelectedPlayers([...selectedPlayers, player.id]);
              } else if (selectedPlayers.length === 11) {
                alert("you can select only  11 players");
              }
            }}
          >
            <div>
              <h1 className="text-[#feb561]">{player.fullName}</h1>
              <h4 className="text-[#000000]">{player.role}</h4>
            </div>
            <div>
              <p className="text-[#000000]">
                (
                {player.role === "Batsman" || player.role === "WK-Batsman"
                  ? "10"
                  : "9"}
                )
              </p>
            </div>
          </div>
        );
      }
    });

  const teamplayer2 = () =>
    team2Players.map((player, index) => {
      if (
        player.role === "Batsman" ||
        player.role === "Bowler" ||
        player.role === "WK-Batsman" ||
        player.role === "Bowling Allrounder"
      ) {
        const isSelected = selectedPlayers.includes(player.id);

        return (
          <div
            key={player.id}
            id={player.id}
            className={`flex bg-[#0C0F0C] p-5 rounded-3xl gap-4 ${
              isSelected ? "bg-green-500" : ""
            }`}
            onClick={() => {
              if (isSelected) {
                setSelectedPlayers(
                  selectedPlayers.filter((selected) => selected !== player.id)
                );
              } else if (selectedPlayers.length < 11) {
                setSelectedPlayers([...selectedPlayers, player.id]);
              } else if (selectedPlayers.length === 11) {
                alert("you can select only  11 players");
              }
            }}
          >
            <div>
              <h1 className="text-[#feb561]">{player.fullName}</h1>
              <h4 className="text-[#c4c4c4]">{player.role}</h4>
            </div>
            <div>
              <p className="text-[#c4c4c4]">
                (
                {player.role === "Batsman" || player.role === "WK-Batsman"
                  ? "10"
                  : "9"}
                )
              </p>
            </div>
          </div>
        );
      }
    });

  console.log(selectedPlayers);

  function SelectedPlayers({ selectedPlayers, teamPlayers }) {
    const players = teamPlayers.filter((player) =>
      selectedPlayers.includes(player.id)
    );

    return (
      <div className="p-5 text-black">
        <h2>Selected Players from team :</h2>
        {console.log(players)}
        {players.map((player) => (
          <div key={player.id} className="p-4">
            <span>{player.fullName}</span>
          </div>
        ))}
      </div>
    );
  }
  // function CreditHandler({ selectedPlayers, teamPlayers }) {
  //   console.log(selectedPlayers, teamPlayers);
  //   const players = teamPlayers.filter((player) =>
  //     selectedPlayers.includes(player.id)
  //   );

  //   let credit = credits;

  //   players.map((player) => {
  //     if (player.role === "Batsman") {
  //       setCredits(credit + 10);
  //     } else if (player.role === "WK-Batsman") {
  //       setCredits(credit + 10);
  //     } else if (player.role === "Bowler") {
  //       setCredits(credit + 9);
  //     } else if (player.role === "Bowling Allrounder") {
  //       setCredits(credit + 9);
  //     }
  //     return "thiru";
  //   });
  // }

  // const teamCreateHandler = async (selectedPlayers) => {
  //   const res = await CreateTeam({ selectedPlayers });
  //   console.log(res);
  // };
  const handleSelectTeam = async () => {
    if (selectedPlayers.length === 11) {
      console.log(selectedPlayers);
      console.log("team selected");
      const res = await CreateTeam({ selectedPlayers });
      console.log(res);
      if (res) {
        navigate("/createContest");
      }
    } else {
      console.log("Team of 11 players is required");
    }
  };
  return (
    <>
      <div className=" flex flex-row justify-between mx-[75px] ">
        <div className="flex flex-col gap-4 flex-wrap ">{teamplayer1()}</div>
        <div className="flex justify-center items-stretch text-white">
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            teamPlayers={team1Players}
          />

          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            teamPlayers={team2Players}
          />
        </div>
        <div className="flex flex-col gap-4 flex-wrap-reverse mx-3 ">
          {teamplayer2()}
        </div>
      </div>

      <div className="flex justify-center items-center pb-5 ">
        {/* <button className="border-white py-2 px-5 border bg-white font-semibold text-[#182152] rounded-3xl">
          Credits remaining: <span className="text-[#9E9E9E]">{credits}</span> /{" "}
          <span className="text-[#B48325]">100</span>
        </button> */}
      </div>

      <div className="flex justify-center items-center pb-5">
        {/* <Link to="/createContest"> */}
        <button
          className="items-center m-5 border-2 border-black font-medium  py-2 px-4 hover:bg-red-600 hover:text-white shadow-lg"
          onClick={handleSelectTeam}
        >
          Save Team
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default PlayersList;
