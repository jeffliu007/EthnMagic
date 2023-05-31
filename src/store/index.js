import { createGlobalState } from "react-hooks-global-state";

export const { setGlobalState, useGlobalState, getGlobalState } =
  createGlobalState({
    modal: "scale-0",
    showModal: "scale-0",
    updateModal: "scale-0",
    loading: { show: false, msg: "Dynamic msg here" },
    txStat: { show: false, msg: "Success", color: "green" },
    connectedAccount: "",
    nft: null,
    nfts: [],
    transactions: [],
    contract: null,
  });

export const setTxStatus = (msg, color = "green") => {
  setGlobalState("loading", { show: false, msg: "" });
  setGlobalState("txStat", { show: true, msg, color });

  setTimeout(() => {
    setGlobalState("txStat", { show: false, msg, color });
  }, 6000);
};

export const setLoadMsg = (msg) => {
  setGlobalState("loading", { show: true, msg });
};

export const smallAddress = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};
