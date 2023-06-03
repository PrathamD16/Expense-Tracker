import React from "react";

function TranList({ transaction, amount }) {
  return (
    <div className="mx-6 mt-2 flex items-center">
      <div className="bg-purple-500 p-2 text-white rounded-sm text-xl hover:bg-purple-900 cursor-pointer">
        <p>X</p>
      </div>
      <div className={`${amount < 0 ? `bg-red-600`:`bg-green-600`} flex p-2 rounded-sm text-xl text-white justify-between px-3 flex-1 flex-grow`}>
        <p>{transaction}</p>
        <p>₹{amount}</p>
      </div>
    </div>
  );
}

export default TranList;
