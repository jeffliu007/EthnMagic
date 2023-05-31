import Transaction from "./Transaction";

const RecentTransactions = () => {
  return (
    <div className="gradient-bg-bottom">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold opacity-80">
          Most Recent Transactions
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-2 py-2 mt-4">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Transaction key={i} tx={i} />
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

export default RecentTransactions;
