import { FaTimes } from "react-icons/fa";
import testImage from "../assets/heistMonkeys.jpeg";
import { useState } from "react";
import { useGlobalState, setGlobalState, setTxStatus } from "../store";
import { create } from "ipfs-http-client";
import { mintFunction } from "../Blockchain.services";
import { setLoadMsg } from "../store";

const auth =
  `Basic ` +
  Buffer.from(
    `2QU39j4MzK5BuwsFcWjAS3G4uly` + `:` + `00e5eb19cd9c0f17e3d48a7a226626c2`
  ).toString(`base64`);

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const CreateNFTModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [modal] = useGlobalState("modal");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price) return;

    setGlobalState("modal", "scale-0");
    setLoadMsg("Uploading Resource...");

    // alert("Minting NFT...");

    try {
      const created = await client.add(imgUrl);
      setLoadMsg("Upload Complete");
      const metadataURI = `https://ipfs.io/ipfs/${created.path}`;
      const newNFT = { title, description, price, metadataURI };
      setLoadMsg("Initializing transaction...");
      setImgUrl(metadataURI);
      await mintFunction(newNFT);
      closeModal();
      setTxStatus("Mint Success!", "green");
    } catch (error) {
      console.log("File error", error);
      setTxStatus("Mint Failed!", "red");
    }
    closeModal();
  };

  const changeNFTImg = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setCoverImg(file);
      setImgUrl(e.target.files[0]);
    };
  };

  const formReset = () => {
    setCoverImg(null);
    setImgUrl("");
    setDescription("");
    setPrice("");
    setTitle("");
  };

  const closeModal = () => {
    setGlobalState("modal", "scale-0");
    formReset();
  };

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transform transition-transform duration 280 ${modal}`}
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
            <p className="">Creating NFT...</p>
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
            <label className="block">
              <span className="sr-only">Choose NFT Cover Art</span>
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp, image/gif, image/jpg"
                required
                className="block w-full text-sm text-slate-400 file:mr-5 file:py-1.5 file:px-3 hover:file:bg-[#dfdfdf] focus:outline-none cursor-pointer"
                onChange={changeNFTImg}
              />
            </label>
          </div>
          <div
            className="flex justify-between items-center bg-[#2d2d2d] p-1 rounded-md mt-6
          "
          >
            <input
              type="text"
              required
              className="block w-full text-sm text-slate-400 border-0 bg-transparent focus:ring-0"
              name="Project Name"
              placeholder="Project Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
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
          <div
            className="flex justify-between items-center bg-[#2d2d2d] p-1 rounded-md mt-6
          "
          >
            <textarea
              type="text"
              required
              className="block w-full text-sm text-slate-400 border-0 bg-transparent focus:ring-0 resize-none"
              name="Description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="shadow-sm shadow-black flex justify-center  mt-6 lg:w-4/6  md:w-2/6 text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-xs p-3 rounded-md "
              type="submit"
            >
              Mint Your New NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNFTModal;
