import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contest from "./components/Contest";
import CreateTeam from "./components/CreateTeam";
import ContestCreation from "./components/ContestCreation";
import CurrentContest from "./components/CurrentContest";
import LeaderBoard from "./components/LeaderBoard";
import Metastart from "./components/Metastart";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/createTeam/:match_id" element={<CreateTeam />} />
        <Route path="/createContest" element={<ContestCreation />} />
        <Route
          path="/currentContest/:contestname"
          element={<CurrentContest />}
        />
        <Route path="/leaderBoard" element={<LeaderBoard />} />
        <Route path="/work" element={<Metastart />} />
        {/* Default route */}
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
