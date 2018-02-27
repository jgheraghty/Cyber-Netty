// JavaScript Document
"use strict";

function setUpListeners() {

    window.alert("Working");
    document.getElementById('a1').addEventListener("click", ActivityOne, false);
    document.getElementById('a2').addEventListener("click", ActivityTwo, false);
    document.getElementById('a3').addEventListener("click", ActivityThree, false);
    document.getElementById('a4').addEventListener("click", ActivityFour, false);
    document.getElementById('a5').addEventListener("click", ActivityFive, false);
    document.getElementById('a6').addEventListener("click", ActivitySix, false);
}

// When Activity1 button is clicked
function ActivityOne() {
    var x = document.getElementById('home');
    x.innerHTML = `

    Fill in the blanks activity

    
    `;
    /*
    x.parentNode.removeChild(x);
    var y = document.createElement('activity1-content');
    //y.innerHTML = ("Stranger Danger");
    y.style.borderRadius = "0px 0px 25px 25px";
    y.style.color = "black";
    y.style.backgroundColor = "purple";
    y.style.marginTop = "80px";
    y.style.marginRight = "290px";
    y.style.marginLeft = "80px";
    y.style.fontSize = "50px";
    y.style.textAlign = "center";
    */
}

// When Activity1 button is clicked
function ActivityTwo() {}

// When Activity1 button is clicked
function ActivityThree() {}

// When Activity1 button is clicked
function ActivityFour() {}

// When Activity1 button is clicked
function ActivityFive() {}

// When Activity1 button is clicked
function ActivitySix() {}