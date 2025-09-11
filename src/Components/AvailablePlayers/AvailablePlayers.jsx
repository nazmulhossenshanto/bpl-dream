import React from "react";

const AvailablePlayers = ({player, handlSelectedPlayer,  selectedPlayers}) => {
  const {player_image, player_name, country, batting_role, batting_hand, bowling_style, price, id} = player;
  const isSelected = selectedPlayers.some(p => p.id === id);
  return (
    <div className="mb-4">
        
      <div className="card border-2 border-gray-400 rounded-lg shadow-sm  p-6">
        <figure>
          <img className="w-full h-60 object-cover rounded-lg"
            src={player_image}
            alt="player image"
          />
        </figure>
        <div className="card-body space-y-4 mt-4">
          <h2 className="card-title font-bold"><i className="fa-solid fa-user"></i> {player_name}</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p><i className="fa-solid fa-flag"></i></p>
              <p className="font-bold">{country}</p>
            </div>
            <p className="text-gray-500  rounded-lg bg-[#D9D9D9] p-2">{batting_role}</p>
          </div>
          <hr />
          <h3 className="font-bold">Rating</h3>
          <div className="flex justify-between items-center">
            <p className="font-bold">{batting_hand}</p>
            <p className="text-gray-500">{bowling_style}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Price: ${price}</p>
            <button  onClick={()=>
              handlSelectedPlayer(player)
              } 
               className="btn  border border-[rgba(19,19,19,0.1)] rounded-md p-2 cursor-pointer hover:bg-[#E7FE29]">{isSelected ? "Selected" : "Choose Player"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
