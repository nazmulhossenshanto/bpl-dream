import React from 'react';

const Navbar = ({coin}) => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto p-4
        '>
            <div>
                <img className='h-18' src="./src/assets/logo.png" alt="" />
            </div>
            <div className='flex gap-4'>
                <p>Home</p>  
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <p className='font-bold'>{coin} Coin <i className="fa-solid fa-dollar-sign text-yellow-500"></i></p>
            </div>
        </div>
    );
};

export default Navbar;