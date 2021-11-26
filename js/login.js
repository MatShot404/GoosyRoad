// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyAGMXAc8aYktHbeBMjQ5eFP20hDVUlw6jk",
    authDomain: "goosyroad.firebaseapp.com",
    projectId: "goosyroad",
    storageBucket: "goosyroad.appspot.com",
    messagingSenderId: "637731042520",
    appId: "1:637731042520:web:e9158bc9828ed2f4c193ad"
};


firebase.initializeApp(firebaseConfig);
this.firebaseToken = document.querySelector("#firebase-token");
this.firebaseToken.innerHTML = "Welcome !";


// User SignUp
function authRegister(event) {
    event.preventDefault();
    var registerForm = $("form[name='registerForm']");
    var reg_email = registerForm.find('#register_email').val();
    var reg_password = registerForm.find('#register_password').val();

    firebase
        .auth()
        .createUserWithEmailAndPassword(reg_email, reg_password)
        .then(function () {
            this.firebaseToken.innerHTML = "Registered successfully !";
        })
        .catch(function (err) {
            alert(err.message);
        })
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