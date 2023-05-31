import sappySeal from "../assets/sappySeal.png";
import monsterBanner from "../assets/monsterBanner.png";
import { useGlobalState, setGlobalState } from "../store";

const HeroSection = () => {
  const [modal] = useGlobalState("modal");

  const openModal = () => {
    setGlobalState("modal", "scale-100");
  };

  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-9">
      <div className="md:w-3/6 w-full">
        <div className="opacity-82">
          <h1 className="text-white font-bold text-5xl">
            The Place To Curate
            <br /> NFTs, <br />
            <span> Digital Art</span>
          </h1>
          <p className="text-gray-400 font-semibold mt-3 text-sm">
            Mint and add to your own collection
          </p>
        </div>
        <div className="mt-11 text-white opacity-80 font-bold">
          <p>Start your new collection now</p>
        </div>
        <div className="flex mt-5">
          <button
            className="shadow-sm shadow-black flex  text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-s p-3 rounded-md"
            onClick={openModal}
          >
            Create NFT
          </button>
        </div>
      </div>
      <div className="shadow-sm shadow-black md:w-2/5 w-full mt-12 md:mt-0 overflow-hidden">
        <img
          className="h-58 w-full object-cover rounded-md"
          src={sappySeal}
          alt="Hero Cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
