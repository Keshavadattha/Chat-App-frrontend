
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyC884bNyvoA0VYZm-Uh6jXy5651JgoPU20",
  authDomain: "chatapp-56e4a.firebaseapp.com",
  projectId: "chatapp-56e4a",
  storageBucket: "chatapp-56e4a.firebasestorage.app",
  messagingSenderId: "747734478941",
  appId: "1:747734478941:web:1b83416075509aa1349db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const Signup = async (username,email,password) => {
    try {
const res=await createUserWithEmailAndPassword(auth,password);

const user = res.user;
await setDoc(doc(db,"users",user.uid),{
    id:user.uid,
    username:username.toLowerCase(),
    email,
    name:"",
    avatar:"",
    bio:"TAGGEDELEY",
    lastseen:Date.now()
})
await setDoc(doc(db,"chats",user.uid),{
    chatData:[]
})
    } catch (error) {
console.error(error)
toast.error(error.code)
    }
}
export{Signup}