import React, { use } from "react";
import PlayerCard from "../Players/PlayerCard";

const Available = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {playerData.map((player) => (
          <PlayerCard player={player}></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default Available;
