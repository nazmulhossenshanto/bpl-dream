 import React from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
 
 const PlayersCard = ({players}) => {
    return (
        <div>
            {/* available players */}
            <div>
                {
                    players.map((player)=>(
                        <AvailablePlayers
                        player={player}
                        ></AvailablePlayers>
                    ))
                }
            </div>
            {/* selected players */}
        </div>
    );
 };
 
 export default PlayersCard;