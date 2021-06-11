
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import 'firebase/firestore';
import config from "./config";
export const app = firebase.initializeApp(config);
export const auth = app.auth();
export const firestore = app.firestore();
const db = firebase.firestore();
export default firebase;
export const loginf = async (user) => {
// if (firebase.app.length) {
//   firebase.initializeApp(config);
console.log(user);
try {
    var getOptions = {
        email: user.username
    };
    const data = await db.collection("users").where("email", "==",user.email ).get();
    const items = data.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    console.log(items);
    for (let i=0;i<items.length;i++){
        if (items[i].password===user.password){
            return items[i]
        }
    }
    return []
    // return items;
  } catch (err) {
    return [];
  }
}

export const regis = async(user)=>{
    try {
        console.log(user);
        const data = db.collection("users");
        await data.add(user);
        console.log(data);
        return {success:"ok"}
      } catch (err) {
      }
}


