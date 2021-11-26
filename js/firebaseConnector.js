// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

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

// async function getNames(db) {*
//     const nameCol = collection(db, 'users');
//     const nameSnapshot = await getDocs(nameCol);
//     const nameList = nameSnapshot.docs.map(doc => doc.data());
//     return nameList;
// }

// getNames(db).then(nameList => {
//     console.log(nameList);
// });



const auth = getAuth();
signInAnonymously(auth)
    .then(() => {
        console.log("Signed in anonymously");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    // Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) { // User is signed in.
        const userId = user.uid;
        console.log(userId);
    } else { // User is signed out.
        // ...
    }
});