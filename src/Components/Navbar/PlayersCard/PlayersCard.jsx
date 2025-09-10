 import React from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
 
 const PlayersCard = ({players}) => {
    return (
        <div>
            {/* available players */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
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