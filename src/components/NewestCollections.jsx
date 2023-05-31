import CollectionCards from "./CollectionCards";

import { useGlobalState } from "../store";

const NewestCollections = () => {
  const [allMyNFTs] = useGlobalState("nfts");

  console.log(allMyNFTs);

  return (
    <div className="gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold opacity-80">
          {" "}
          Newest Collections
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 lg:gap-3 py-5">
          {allMyNFTs.map((nft, i) => (
            <CollectionCards key={i} allMyNFTs={nft} />
          ))}
        </div>
        <div className="flex justify-center my-5">
          <button className="shadow-sm shadow-black flex  text-white bg-[#e42575] hover:bg-[#e76c9f] md:text-xs p-3 rounded-md">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewestCollections;
