import React from "react";
import navImg from "./assets/logo.png"
import coin from './assets/coin.webp'

const Navbar = ({available}) => {
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex space-x-3 items-center">
          <span>{available}</span>
          <span>Coin</span>
          <img className="w-[20px] h-[20px]" src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
