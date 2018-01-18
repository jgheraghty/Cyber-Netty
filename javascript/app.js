var newUser = document.getElementById("username");
var signUp = document.getElementById("btnSignUp");

function signUp() {
    // Get a reference to the database service
    var database = firebase.database().ref();

    var userInput = username.value;

    database.ref("userName").push(userInput);
    
    /*commented out
    // set value of Test (or create if it does not exist)
    database.ref("userNameB").set("Anthony");
    // get value of Test
    database.ref("userName").once("value").then(function (data) {
        console.log(data.val());
    });*/
}


/*var mainText = document.getElementById("mainText");
var submit = document.getElementById("submit");

function Sub() {
    // Get a reference to the database service
    var database = firebase.database();

    //Get user inputted text
    var messageText = mainText.value;

    // set value (or create if it does not exist)
    database.ref("userNom").push(messageText);
}*/

/*// Get a reference to the database service
var database = firebase.database();
// set value of Test (or create if it does not exist)
database.ref("userNom").push("Linda");
// get value of Test
database.ref("userNom").once("value").then(function (data) {
    console.log(data.val());
});*/