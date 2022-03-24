firebase.initializeApp(firebaseConfig);
this.firebaseToken = document.querySelector("#firebase-token");
this.firebaseToken.innerHTML = "Welcome !";


// User SignUp
function authRegister(event) {
    event.preventDefault();
    var registerForm = $("form[name='registerForm']");
    var reg_email = registerForm.find('#register_email').val();
    var reg_password = registerForm.find('#register_password').val();


    createUserWithEmailAndPassword(auth, reg_email, reg_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            this.firebaseToken.innerHTML = "Registered successfully !";
            console.log('Registered successfully !');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
}


// User SignIn
function authLogin(event) {
    event.preventDefault();
    var loginForm = $("form[name='loginForm']");
    var log_email = loginForm.find('#login_email').val();
    var log_password = loginForm.find('#login_password').val();

    firebase
        .auth()
        .signInWithEmailAndPassword(log_email, log_password)
        .then(function () {
            this.firebaseToken.innerHTML = "Sign-in Successful !";
            console.log('sign in successful !');
            // outputFirebaseData();
        })
        .catch(function (err) {
            alert(err.message);
        });
}

function outputFirebaseData() {
    this.firebaseToken.innerHTML = "Hello world";
}

// async function getNames(db) {
//     const nameCol = collection(db, 'users');
//     const nameSnapshot = await getDocs(nameCol);
//     const nameList = nameSnapshot.docs.map(doc => doc.data());
//     return nameList;
// }

// getNames(db).then(nameList => {
//     console.log(nameList);
// });