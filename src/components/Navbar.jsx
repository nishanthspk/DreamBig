import React, { useState } from "react";
import Logo from '../assets/logo.png'
import "./nav.css";
import Button from "../components/Button.js";
import Connect from "./Connects.js";
const Navbar = ({ handleConnect }) => {
  const [account, setAccount] = useState();

  return (
    <div className="text-white m-0 p-0 bg-transparent border">
      <div className="flex justify-between pt-2 pl-5 ml-[100px] mr-[75px] pr-[30px]">
        <div>
          <a href="/landing">
            <img
              src={Logo}
              className="bg-contain w-12 h-12 rounded-full"
              alt="icon"
            />
          </a>
        </div>
        <div className="flex gap-3">
          {/* Account Display */}
          <div>
            {account ? (
              <span className="text-[#B48325]">{account}</span>
            ) : (
              <Connect />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
