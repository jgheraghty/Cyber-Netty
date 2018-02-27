//Authentication with Firebase

/*------------- On pressing login button ------------*/
//User log in to site via Firebase Authentication
function UserLogin() {
    if (firebase.auth().currentUser) {
        // start logOut
        firebase.auth().logOut();
        // end logOut
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 6) {
            alert('Please enter your parents email address.');
            return;
        }
        if (password.length < 6) {
            alert('Please enter a safe password.');
            return;
        }
        // Sign in with email and password.
        // start authorisation with email
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // error handling
            var errorCode = error.code;
            var errorMessage = error.message;
            // wrong password input
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('userLog').disabled = false;
        });
        // end authorisation with email
    }
    document.getElementById('userLog').disabled = true;
}
/*------------- On pressing sign up button ------------*/

function UserSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 6) {
        alert('Please enter your parents email address.');
        return;
    }
    if (password.length < 6) {
        alert('Please enter a safe password.');
        return;
    }
    // Sign in with email and password
    // start create account with email
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // error handling
        var errorCode = error.code;
        var errorMessage = error.message;
        // Weak password
        if (errorCode == 'auth/weak-password') {
            alert('The password you entered is not safe enough.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
    // end create account with email
}

/*------------- Verification email ------------*/

function sendEmailVerification() {
    // start sendemailverification
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent to user
        // alert to user
        alert('Email Verification Sent!');
    });
    // end sendemailverification
}

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // start email and password]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email sent to user
        // alert to user
        alert('Password Reset Email Sent!');

    }).catch(function(error) {
        // error handling
        var errorCode = error.code;
        var errorMessage = error.message;
        // email invalid error
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
    });
    // end email and password
}
/**
 * StateChanged handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function StateChanged() {
    // waiting for authentication state changes
    // start change state]
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('verifyEmail').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            document.getElementById('userLog-status').textContent = 'Signed in';
            document.getElementById('userLog').textContent = 'Sign out';
            document.getElementById('UserAccount').textContent = JSON.stringify(user, null, '  ');
            if (!emailVerified) {
                document.getElementById('verifyEmail').disabled = false;
            }
            // [END_EXCLUDE]
        } else {
            // User is signed out.

            document.getElementById('userLog-status').textContent = 'Signed out';
            document.getElementById('userLog').textContent = 'Sign in';
            document.getElementById('UserAccount').textContent = 'null';

        }
        // user can log in again
        document.getElementById('userLog').disabled = false;

    });
    // [END change state]
    document.getElementById('userLog').addEventListener('click', UserLogin, false);
    document.getElementById('UserSign').addEventListener('click', UserSignUp, false);
    document.getElementById('verifyEmail').addEventListener('click', sendEmailVerification, false);
    document.getElementById('resetPass').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
    StateChanged();
};