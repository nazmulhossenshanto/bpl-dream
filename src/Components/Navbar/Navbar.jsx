import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                <img src="/src/assets/logo.png" alt="" />
            </div>
            <div>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <p>0 Coin <i class="fa-solid fa-dollar-sign"></i></p>
            </div>
        </div>
    );
};

export default Navbar;