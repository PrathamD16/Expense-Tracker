import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

function Stats({balance}) {
  const {data: session} = useSession()

  return (
    <div className="p-2 mx-6 mt-2">
      {/* Balance */}
      <div className="font-semibold">
        <p>YOUR BALANCE</p>
        <p className="text-3xl">₹{balance}</p>
      </div>
      {/* Total INCOME and EXPENSE */}
      <div className="mt-2 border-2 flex items-center justify-around p-5 text-xl font-medium shadow-md rounded-xl">
        <div className="">
          <p className="">INCOME</p>
          <p className="text-green-600">₹12312</p>
        </div>
        <div className="">
          <p className="">EXPENSES</p>
          <p className="text-red-600">₹213132</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
