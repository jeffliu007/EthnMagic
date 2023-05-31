import { FaRegTimesCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { useGlobalState } from "../store";

const TxStatus = () => {
  const [txStat] = useGlobalState("txStat");

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transform transition-transform duration 280 ${
        txStat.show ? `scale-100` : `scale-0`
      }
      }`}
    >
      <div
        className=" flex flex-col justify-center items-center bg-[#1d1d1d] shadow-lg shadow-[#1e1a2b] rounded-md w-5/12 lg:w-4/12 h-7/12 p-7 min-w-min px-10 pb-2
    "
      >
        {txStat.color == "red" ? (
          <>
            <FaRegTimesCircle className="text-red-700 text-5xl" />
            <p className="text-white mt-3 mb-2">Load Message Here....</p>
          </>
        ) : (
          <>
            <BsCheck2Circle className="text-green-700 text-5xl" />
            <p className="text-white mt-3 mb-2">{txStat.msg}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TxStatus;
