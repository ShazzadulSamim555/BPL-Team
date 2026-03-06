import React, { useState } from "react";

const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  purchasePl,
  setPurchasePl,
}) => {
  const [selected, isSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("$").join("").split(",").join("")
    );

    if (availableBalance < playerPrice) {
      alert("Not Enough Coins");
      return;
    }

    isSelected(true);
    setAvailableBalance(availableBalance - playerPrice);

    setPurchasePl([...purchasePl,playerData]);

  };

  
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure className="rounded-lg">
          <img
            className="w-full h-[300px] object-cover"
            src={player.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex space-x-2">
            <h2 className="card-title w-5">
              <img
                src="https://img.icons8.com/?size=100&id=99268&format=png&color=000000"
                alt=""
              />
            </h2>
            <h3 className="font-bold">{player.name}</h3>
          </div>
          <div className="flex justify-between border-b-1 border-gray-600">
            <div className="flex space-x-1 items-center">
              <img
                className="w-4 h-4"
                src="https://img.icons8.com/?size=100&id=ghUYkV5dNITx&format=png&color=000000"
                alt=""
              />
              <p className="text-gray-500 text-sm">{player.country}</p>
            </div>

            <div>
              <h3 className="btn">
                {player.type === "Both" ? "All Rounder" : player.type}
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-bold">Rating</h2>

            <div className="flex justify-between">
              <h2 className="font-bold">{player.type}</h2>
              <h2 className="text-gray-700">{player.role}</h2>
            </div>

            <div className="flex justify-between">
              <h2 className="font-bold text-gray-700">
                <span className="text-black">Price: </span>
                {player.price}
              </h2>
              <h2
                disabled={selected}
                onClick={() => {
                  handleSelected(player);
                }}
                className="btn "
              >
                {selected ? "Selected" : "Choose Player"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
