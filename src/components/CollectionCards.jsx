import sappySeal from "../assets/sappySeal.png";
import { useGlobalState, setGlobalState } from "../store";
import { deleteNFT } from "../Blockchain.services";

const CollectionCards = ({ allMyNFTs }) => {
  // const randomPriceGenerator = () => {
  //   const randomNum = (Math.random() * (0.99 - 0.05) + 0.05).toFixed(2);

  //   const randomETH = randomNum + "ETH";

  //   return randomETH;
  // };

  function weiToEth(wei) {
    const ether = wei / 10 ** 18; // 1 Ether = 10^18 Wei
    return ether;
  }

  const showModal = () => {
    setGlobalState("showModal", "scale-100");
  };

  return (
    <div className="w-full overflow-hidden my-1 p-4 bg-[#2a1b36] rounded-md shadow-md shadow-black text-white">
      <img
        src={allMyNFTs.metadataURI}
        alt="NFT holder"
        className="rounded-md h-60 w-full object-cover mb-3"
      />
      <h4>{allMyNFTs.title}</h4>
      <p className="text-sm opacity-60 mt-2">{allMyNFTs.description}</p>
      <div className="flex justify-between items-center mt-5">
        <div>
          <p>Current Price</p>
          <p className="mt-2">{`${weiToEth(allMyNFTs.price)} ETH`}</p>
        </div>
        <button
          onClick={showModal}
          className={`mt-5 shadow-sm shadow-black flex  text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-xs p-2 rounded-md `}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CollectionCards;
