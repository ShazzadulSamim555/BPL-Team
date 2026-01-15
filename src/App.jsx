import { Suspense, useState } from "react";
import "./App.css";

import Available from "./AvailablePlayers/Available";
import Navbar from "./Navbar";
import Selected from "./SelectedPlayers/Selected";

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

function App() {
  const playerPromise=fetchPlayers();

  const [toggle,setToggle]=useState(true);

  return (
    <>
      <Navbar></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <div className="font-bold">
          <button onClick={()=>setToggle(true)} className={`border-2 border-gray-500 rounded-l-xl border-r-0 p-2 px-5 ${toggle===true? "bg-cyan-400": ""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`border-2 border-gray-500 rounded-r-xl border-l-0 p-2 px-5 ${toggle===false? "bg-cyan-400": ""}`}>Selected</button>
        </div>
      </div>

      {
        toggle=== true?<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Available playerPromise={playerPromise}></Available>
      </Suspense>: <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Selected></Selected>
      </Suspense>
      
      }
      
    </>
  );
}

export default App;
