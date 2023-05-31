import PageHeader from "./components/PageHeader";
import HeroSection from "./components/HeroSection";
import NewestCollections from "./components/NewestCollections";
import CreateNFTModal from "./components/CreateNFTModal";
import NFTDetails from "./components/NFTDetails";
import UpdateNFTModal from "./components/UpdateNFTModal";
import LoadSpinner from "./components/LoadSpinner";
import TxStatus from "./components/TxStatus";
import RecentTransactions from "./components/RecentTransactions";
import { useEffect } from "react";
import { getAllNFTS, isWallectConnected } from "./Blockchain.services";

const App = () => {
  useEffect(async () => {
    await isWallectConnected();
    await getAllNFTS();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-header">
        <PageHeader />
        <HeroSection />
      </div>

      <NewestCollections />
      <CreateNFTModal />
      <NFTDetails />
      <RecentTransactions />
      <UpdateNFTModal />
      <LoadSpinner />
      <TxStatus />
    </div>
  );
};

export default App;
