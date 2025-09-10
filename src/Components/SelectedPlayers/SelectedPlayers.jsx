import React from "react";

const SelectedPlayers = ({ selectedPlayer }) => {
  const { player_image, player_name, batting_hand } = selectedPlayer;
  return (
    <div>
      <div className="flex p-4 justify-between items-center border-2 border-gray-400 mt-5 rounded-lg">
        {/* left side */}
        <div className="flex items-center gap-2">
            <div>
      <img className="h-12 rounded-lg" src={player_image} alt="" />
            </div>
            <div>
                <h3 className="font-bold">{player_name}</h3>
                <p className="text-gray-400">{batting_hand}</p>
            </div>
        </div>
        {/* right side */}
        <button className="btn">
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
