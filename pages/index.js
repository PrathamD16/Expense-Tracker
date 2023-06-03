import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Transactions from "../components/Transactions";
import { useSession } from "next-auth/react";
import TranList from "../components/TranList";
import { db, storage } from "../firebase";
import {
  onSnapshot,
  getDocs,
  query,
  collection,
  doc,
} from "firebase/firestore";

var currBalance = 0;

function index() {
  const { data: session } = useSession();
  const [userdata, setData] = useState([]);
  let userData = []
  useEffect(() => {
    async function getData() {
      onSnapshot(collection(db, "users"), (snapshot) => {
        setData(snapshot.docs);
      });
    }
    getData();
  }, [db]);  

  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <Stats balance={currBalance} />
      <h1 className="text-xl font-medium mx-6">Transaction History</h1>
      {session ? (
        userdata.map((user) =>
          user.data().user_name == session.user.email ? (
            <TranList
              key={Number(user.id)}
              transaction={user.data().transaction}
              amount={user.data().amount}
            />
          ) : (
            <></>
          )
        )
      ) : (
        <></>
      )}
      {session ? <Transactions /> : <></>}
    </div>
  );
}

export default index;
