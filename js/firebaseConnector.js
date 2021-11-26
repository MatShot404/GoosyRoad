// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGMXAc8aYktHbeBMjQ5eFP20hDVUlw6jk",
    authDomain: "goosyroad.firebaseapp.com",
    projectId: "goosyroad",
    storageBucket: "goosyroad.appspot.com",
    messagingSenderId: "637731042520",
    appId: "1:637731042520:web:e9158bc9828ed2f4c193ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getNames(db) {
//     const nameCol = collection(db, 'users');
//     const nameSnapshot = await getDocs(nameCol);
//     const nameList = nameSnapshot.docs.map(doc => doc.data());
//     return nameList;
// }

// getNames(db).then(nameList => {
//     console.log(nameList);
// });



export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };