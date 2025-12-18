import { Suspense } from "react";
import "./App.css";

import Available from "./AvailablePlayers/Available";
import Navbar from "./Navbar";

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Available playerPromise={playerPromise}></Available>
      </Suspense>
    </>
  );
}

export default App;
