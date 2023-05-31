import React from "react";
import appLogo from "../assets/appLogo.png";
import { connectWallet } from "../Blockchain.services";
import { useGlobalState } from "../store";
import { smallAddress } from "../store";

const PageHeader = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img className="w-32 cursor-pointer" src={appLogo} alt="app logo" />
      </div>

      <ul className="md:flex-[0.5] text-white md:flex hidden list-none items-center justify-between">
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      {connectedAccount ? (
        <button className=" flex text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-xs p-2 rounded-md shadow-sm shadow-black">
          {smallAddress(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className=" flex text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-xs p-2 rounded-md shadow-sm shadow-black"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default PageHeader;
