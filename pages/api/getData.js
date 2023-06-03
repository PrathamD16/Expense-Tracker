import { useState } from "react";
import { db } from "../../firebase";
import { onSnapshot, collection } from "firebase/firestore";

export default async function handler(req, res) {
//   const [data, setData] = useState([]);
  onSnapshot(collection(db, "users"), (snapshot) => {
    res.status(200).json(snapshot.docs)
  });
//   res.status(200).json(data);
}
