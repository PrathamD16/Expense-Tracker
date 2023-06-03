import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

function Transactions() {
  const [name, setName] = useState("");
  const [amt, setAmt] = useState(0);

  const { data: session } = useSession();
  const emailId = session.user.email;

  const submitHandler = (e) => {
    //Creating unique username
    var user_name = session.user.email;
    
    const trsaction = { name, amt, user_name };
    axios
      .post("http://localhost:3000/api/dataPost/", trsaction)
      .then(() => console.log("Posted"));
    setName("");
    setAmt(0);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className="mt-3 space-y-3 mx-6">
      <h1 className="text-xl font-medium">Add New Transaction</h1>
      <div className="flex flex-grow">
        <input
          className="bg-blue-200 p-3 rounded-md flex-1 outline-none"
          placeholder="Transaction"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-grow">
        <input
          className="bg-blue-200 p-3 rounded-md flex-1 outline-none"
          placeholder="Amount"
          type="number"
          onChange={(e) => setAmt(e.target.value)}
        />
      </div>
      <div className="flex">
        <button
          type="submit"
          className="flex-1 text-white p-2 bg-purple-400 hover:bg-purple-800 rounded-lg focus:bg-purple-800"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
}

export default Transactions;
