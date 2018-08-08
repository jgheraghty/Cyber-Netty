//Authentication
(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD2CTlSOa_6c2FIWU1Pe-Sq8V1V0yi6uRU",
        authDomain: "project400-cybersecurity.firebaseapp.com",
        databaseURL: "https://project400-cybersecurity.firebaseio.com",
        projectId: "project400-cybersecurity",
        storageBucket: "project400-cybersecurity.appspot.com",
        messagingSenderId: "718162010119"
    };
    firebase.initializeApp(config);

    //Get elements
    const Email = document.getElementById("txtEmail");
    const Password = document.getElementById("txtPassword");
    const Join = document.getElementById("joinNetty");
    const loggedIn = document.getElementById("loggedIn");


    //Add Login event
    btnLogin.addEventListener('click', e => {
        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => {
            console.log(e.message);
        })
    })

    //Add Sign Up event
    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => {
            console.log(e.message);
        })
    })

    //Add Log Out event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            loggedIn.classList.remove('hide');
            //btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            loggedIn.classList.add('hide');
            //btnLogout.classList.add('hide');
        }
    })
});