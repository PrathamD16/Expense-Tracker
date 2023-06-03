// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../firebase";
import {doc, addDoc, collection} from 'firebase/firestore'


export default async function handler(req, res) {
  const { name, amt, user_name } = req.body;
  await addDoc(collection(db, 'users'),{
    user_name: user_name,
    transaction: name,
    amount: amt
  })
}
