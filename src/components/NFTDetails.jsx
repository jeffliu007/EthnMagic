import { FaTimes } from "react-icons/fa";
import testImage from "../assets/heistMonkeys.jpeg";
import { useState } from "react";
import { useGlobalState, setGlobalState } from "../store";

const NFTDetails = () => {
  const [modal] = useGlobalState("showModal");

  const handleFormSubmit = (e) => {
    closeModal();
  };

  const openUpdateModal = () => {
    closeModal();
    setGlobalState("updateModal", "scale-100");
  };

  const closeModal = () => {
    setGlobalState("showModal", "scale-0");
  };

  const generateRandomWallet = () => {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
    let res1 = "";
    let res2 = "";

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      res1 += randomCharacter;
    }

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      res2 += randomCharacter;
    }

    return "0x" + res1 + "...." + res2;
  };

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transform transition-transform duration 280 ${modal} text-white`}
    >
      <div
        className="bg-[#1d1d1d] shadow-lg shadow-[#1e1a2b] rounded-md w-11/12 lg:w-8/12 md:w-1q/12 h-7/12 p-7
    "
      >
        <div className="flex justify-between items-center">
          <p className="opacity-85">Purchasing NFT...</p>
          <button
            type="button"
            className="border-0 bg-transparent"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col justify-center items-center rounded-md mt-4">
          <div className="shrink-0 h-40 w-70 overflow-hidden">
            <img
              src={testImage}
              className="h-full w-full object-cover cursor-pointer  rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start rounded-md mt-5">
          <h4 className="text-white font-semibold text-lg">Title</h4>
          <p className="text-s my-1 text-gray-400">paragraph</p>

          <div className="flex justify-between items-center mt-3 text-white">
            <div className="flex flex-col">
              <small>Owner address: </small>
              <small className="text-pink-800">{generateRandomWallet()}</small>
            </div>
            <div>
              <small>Current Price </small>
              <p>0.99 ETH</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full mt-3  space-x-5">
          <button className=" flex mt-4  w-full justify-center items-center text-white bg-[#e42575] hover:bg-[#e76c9f] p-3 rounded-md shadow-sm shadow-black">
            Purchase
          </button>
          <button
            onClick={openUpdateModal}
            className=" flex mt-4 w-full justify-center items-center text-white bg-[#e42575] hover:bg-[#e76c9f] p-3 rounded-md shadow-sm shadow-black"
          >
            Update Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
