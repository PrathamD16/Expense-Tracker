import React from "react";

function TranList({ transaction, amount }) {
  return (
    <div className="mx-6 mt-2 flex items-center">
      <div className="bg-gray-200 p-2 rounded-sm text-xl hover:bg-purple-900 hover:text-white cursor-pointerx">
        <button>X</button>
      </div>
      <div className={`${amount < 0 ? `bg-gradient-to-r from-gray-200 to-red-600`:`bg-gradient-to-r from-gray-200 to-green-600`} flex p-2 rounded-sm text-xl text-white justify-between px-3 flex-1 flex-grow`}>
        <p className="text-black font-medium">{transaction}</p>
        <p className="text-white">₹{Math.abs(amount)}</p>
      </div>
    </div>
  );
}

export default TranList;
