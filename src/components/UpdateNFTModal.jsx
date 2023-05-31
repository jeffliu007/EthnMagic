import { FaTimes } from "react-icons/fa";
import testImage from "../assets/heistMonkeys.jpeg";
import { useState } from "react";
import { useGlobalState, setGlobalState } from "../store";

const UpdateNFTModal = () => {
  const [price, setPrice] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [modal] = useGlobalState("updateModal");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Updating NFT...");

    closeModal();
  };

  const formReset = () => {
    setCoverImg(null);
    setPrice("");
  };

  const closeModal = () => {
    setGlobalState("upda teModal", "scale-0");
    formReset();
  };

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transform transition-transform duration 280 ${modal} `}
    >
      <div
        className="bg-[#1d1d1d] shadow-lg shadow-[#1e1a2b] rounded-md w-11/12 lg:w-8/12 md:w-1q/12 h-7/12 p-7
      "
      >
        <form
          className="flex flex-col text-white opacity-75"
          onSubmit={handleFormSubmit}
        >
          <div className="flex justify-between items-center">
            <p className="">Updating NFT...</p>
            <button
              type="button"
              className="border-0 bg-transparent"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-md mt-4">
            <div className="shrink-0 h-40 w-70 overflow-hidden">
              <img
                src={coverImg || testImage}
                className="h-full w-full object-cover cursor-pointer  rounded-md"
              />
            </div>
          </div>

          <div
            className="flex justify-between items-center bg-[#2d2d2d] p-1 rounded-md mt-6
          "
          >
            <input
              type="number"
              required
              className="block w-full text-sm text-slate-400 border-0 bg-transparent focus:ring-0"
              name="Price"
              placeholder="ETH Sale Price"
              min={0.01}
              step={0.01}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="shadow-sm shadow-black flex justify-center  mt-6 lg:w-4/6  md:w-2/6 text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-xs p-3 rounded-md "
              type="submit"
            >
              Change Price
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNFTModal;
