import transferImg from "../assets/transfer.svg";

const Transaction = (tx) => {
	return (
		<div className="flex justify-between items-center border border-gray-400 w-full shadow-md shadow-black rounded-md p-1 overflow-hidden">
			<div className="p-1">
				<img className="object-contain h-10 w-10" src={transferImg} />
			</div>
			<div>
				<p className="text-white px-2"> item 2 </p>
			</div>
		</div>
	);
};

export default Transaction;
