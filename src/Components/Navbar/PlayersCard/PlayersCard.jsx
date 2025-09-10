import React from "react";
import AvailablePlayers from "../../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../../SelectedPlayers/SelectedPlayers";

const PlayersCard = ({
  players,
  handlSelectedPlayer,
  selectedPlayers,
  removePlayer,
  handleStatus,
  status,
}) => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <h2 className="text-2xl font-bold">
          Selected Player ( {selectedPlayers.length} / {players.length})
        </h2>
        <div className="text-gray-400">
          <button
            onClick={() => handleStatus(true)}
            className={`btn cursor-pointer p-3 rounded-lg ${status ? 'bg-[#E7FE29] font-bold text-black'  : 'bg-transparent text-gray-400'}`}
          >
            Available
          </button>
          <button
            onClick={() => handleStatus(false)}
            className={`btn cursor-pointer p-3 rounded-lg ${!status ? 'bg-[#E7FE29] font-bold text-black'  : 'bg-transparent text-gray-400'}`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {status ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {players.map((player) => (
            <AvailablePlayers
              key={player.id}
              player={player}
              handlSelectedPlayer={handlSelectedPlayer}
            ></AvailablePlayers>
          ))}
        </div>
      ) : (
        <div>
          {selectedPlayers.map((selectedPlayer, idx) => (
            <SelectedPlayers
              key={idx}
              selectedPlayer={selectedPlayer}
              removePlayer={removePlayer}
            ></SelectedPlayers>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayersCard;
