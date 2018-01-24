var mainText = document.getElementById("mainText");
var submit = document.getElementById("submit");

/*var username = document.getElementById("name");
var emailaddress = document.getElementById("email");
var pass = document.getElementById("pwd");
var cpass = document.getElementById("cpwd");*/

function Sub() {

/*--------- Sign Up -----------------------------------*/
/*    var databaseRef = firebase.database();

    var nameInput = username.value;
    var emailInput = emailaddress.value;
    var passInput = pass.value;
    var cpassInput = cpass.value;

    //var newUserInput = username.value;

    //Storing all form data
    databaseRef.ref("users").push({
        username: "nameInput",
        email: "emailInput",
        password: "passInput",
        confirm: "cpassInput"
    });
*/
/*---------------------------------------------------------*/

    /* -------------- Works -------------------*/
    // Get a reference to the database service
    var database = firebase.database();

    //Get user inputted text
    var messageText = mainText.value;

    // set value (or create if it does not exist)
    database.ref("userNom").push(messageText);
    /* -----------------------------------------*/


/*// Get a reference to the database service
var database = firebase.database();
// set value of Test (or create if it does not exist)
database.ref("userNom").push("Linda");
// get value of Test
database.ref("userNom").once("value").then(function (data) {
    console.log(data.val());
});*/

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  
}