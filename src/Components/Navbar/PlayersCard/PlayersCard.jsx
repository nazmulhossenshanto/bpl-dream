 import React from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';
 
 const PlayersCard = ({players, handlSelectedPlayer, selectedPlayers, removePlayer}) => {
    return (
        <div>
            {/* available players */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    players.map((player)=>(
                        <AvailablePlayers
                        key={player.id}
                        player={player}
                        handlSelectedPlayer={handlSelectedPlayer}
                        ></AvailablePlayers>
                    ))
                }
            </div>
            {/* selected players */}
            <div>
                {
                    selectedPlayers.map((selectedPlayer, idx)=>(
                        <SelectedPlayers
                        key={idx}
                        selectedPlayer={selectedPlayer}
                        removePlayer={removePlayer}
                        ></SelectedPlayers>
                    ))
                }
            </div>
        </div>
    );
 };
 
 export default PlayersCard;