import React from 'react';

const Navbar = ({coin}) => {
    return (
        <div className='fixed top-0 left-0 w-full bg-white/30 backdrop-blur-sm shadow-md z-50'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-4  
        '>
            <div>
                <img className='h-18' src="./src/assets/logo.png" alt="" />
            </div>
            <div className='flex gap-4 text-black font-bold'>
                <p>Home</p>  
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <p className='font-bold'>{coin} Coin <i className="fa-solid fa-dollar-sign text-yellow-500"></i></p>
            </div>
        </div>
        </div>
    );
};

export default Navbar;