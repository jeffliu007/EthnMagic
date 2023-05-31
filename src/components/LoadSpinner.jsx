import { setGlobalState, useGlobalState } from "../store";

const LoadSpinner = () => {
  const [loading] = useGlobalState("loading");

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transform transition-transform duration 280 ${
        loading.show ? `scale-100` : "scale-0"
      }`}
    >
      <div
        className="bg-[#1d1d1d] shadow-lg shadow-[#1e1a2b] rounded-md w-6/12 lg:w-4/12 h-7/12 p-7 min-w-min px-10 pb-2
    "
      >
        <div className="flex flex-col text-white opacity-75">
          <div className="flex justify-center items-center mb-3 gap-4">
            <div className="lds-dual-ring"></div>{" "}
            <p className="text-lg">Processing...</p>
          </div>
          <small className="flex justify-center mb-1">{loading.msg}</small>
        </div>
      </div>
    </div>
  );
};

export default LoadSpinner;
