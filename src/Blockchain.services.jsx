import Web3 from "web3";

import {
  setGlobalState,
  useGlobalState,
  setTxStatus,
  getGlobalState,
} from "./store";
import abi from "./abis/EthnMagicV1.json";

const { ethereum } = window;

window.web3 = new Web3(ethereum);
window.web3 = new Web3(window.web3.currentProvider);

const getEthereumContract = async () => {
  const connectedAccount = getGlobalState("connectedAccount");

  if (connectedAccount) {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const networkData = abi.networks[networkId];

    if (networkData) {
      const contract = new web3.eth.Contract(abi.abi, networkData.address);
      return contract;
    } else {
      return null;
    }
  } else {
    return getGlobalState("contract");
  }
};

export const reportError = (error) => {
  setTxStatus(JSON.stringify(error), "red");
  throw new Error("No ethereum object.");
};

export const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask to continue");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0].toLowerCase());
  } catch (error) {
    reportError(error);
  }
};

export const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      const updatedAccs = await ethereum.request({ method: "eth_accounts" });
      if (updatedAccs.length > 0) {
        setGlobalState("connectedAccount", updatedAccs[0].toLowerCase());
        await isWallectConnected();
      }
    });

    if (accounts && accounts.length > 0) {
      setGlobalState("connectedAccount", accounts[0].toLowerCase());
    } else {
      alert("Please connect wallet");
      console.log("No accounts available");
    }
  } catch (error) {
    reportError(error);
  }
};

export const mintFunction = async ({
  title,
  description,
  metadataURI,
  price,
}) => {
  try {
    let price2 = price;
    price = window.web3.utils.toWei(price.toString(), "ether");
    const contract = await getEthereumContract();
    const account = getGlobalState("connectedAccount");
    const mintPrice = window.web3.utils.toWei(price2, "ether");

    await contract.methods
      .payToMint(title, description, metadataURI, price)
      .send({ from: account, value: mintPrice });
    return true;
  } catch (error) {
    reportError(error);
  }
};

export const getAllNFTS = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask to use this site");

    const contract = await getEthereumContract();

    const allNFTs = await contract.methods.getAllNFTs().call();
    const transactions = await contract.methods.getAllTransactions().call();

    setGlobalState("nfts", allNFTs);
    setGlobalState("transactions", transactions);
  } catch (err) {
    reportError(err);
  }
};

export const deleteNFT = async (id) => {
  try {
    const contract = await getEthereumContract();
    const account = getGlobalState("connectedAccount");

    await contract.methods.deleteNFT(id).send({ from: account });
    return true;
  } catch (error) {
    console.log(error);
  }
};
