import { Suspense, useState } from "react";
import "./App.css";

import Available from "./AvailablePlayers/Available";
import Navbar from "./Navbar";
import Selected from "./SelectedPlayers/Selected";

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};
const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);

  const [availableBalance, setAvailableBalance] = useState(700000);

  const [purchasePl,setPurchasePl]=useState([]);

  const removePlayer=(p)=>{
    // console.log(p);
    const filteredData=purchasePl.filter(ply=> ply.id !== p.id);
    console.log(filteredData);
    setPurchasePl(filteredData);

    setAvailableBalance(parseInt(availableBalance) + parseInt(p.price.split("$").join("").split(",").join("")));
  }


  return (
    <>
      <Navbar available={availableBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">{ toggle === true ? "Available Players" : `Selected Players ( ${purchasePl.length}/6)`}</h2>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`border-2 border-gray-500 rounded-l-xl border-r-0 p-2 px-5 ${
              toggle === true ? "bg-cyan-400" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-2 border-gray-500 rounded-r-xl border-l-0 p-2 px-5 ${
              toggle === false ? "bg-cyan-400" : ""
            }`}
          >
            Selected <span>({purchasePl.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Available
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
            purchasePl={purchasePl}
            setPurchasePl={setPurchasePl}
          ></Available>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
        <Selected purchasePl={purchasePl} removePlayer={removePlayer}></Selected>
        </Suspense>
      )}
    </>
  );
}

export default App;
