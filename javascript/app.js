// JavaScript Document
"use strict";

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

<<<<<<< HEAD

    /*// Get a reference to the database service
    var database = firebase.database();
    // set value of Test (or create if it does not exist)
    database.ref("userNom").push("Linda");
    // get value of Test
    database.ref("userNom").once("value").then(function (data) {
        console.log(data.val());
    });*/

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });


}


/*----- Match Activity -------*/
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}

var correctNumber = 0;
$(play);
 
function play() {

    //high win message for next game
    $('#win').hide();
    $('#win').css({
        left: '680px',
        top: '400px',
        width: 0,
        height: 0
    });

    //set the deck
    correctNumber = 0;
    $('#deck').html('');
    $('#cardPlace').html('');

    //shuffle the cards
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.sort(function () { return Math.random() - 0.5 });

    for (var i = 0; i < 10; i++) {
        $('<div>' + numbers[i] + '</div>').data('number', numbers[i]).attr('id', 'card' + numbers[i]).appendTo('#deck').draggable({
            containment: '#content',
            stack: '#deck div',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    for (var i = 1; i <= 10; i++) {
        $('<div>' + words[i - 1] + '</div>').data('number', i).appendTo('#cardPlace').droppable({
            accept: '#deck div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }
}

function handleCardDrop(event, ui) {
    var placeNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    if (placeNumber == cardNumber) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
        ui.draggable.draggable('option', 'revert', false);
        correctNumber++;
    }

    if (correctNumber == 10) {
        $('#win').show();
        $('#win').animate({
            left: '650px',
            top: '550px',
            width: '400px',
            height: '100px',
            opacity: 1
        });
    }

}

=======

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

  
>>>>>>> cda5e8a567796f737fc3e585c23d35175f9140d1
}