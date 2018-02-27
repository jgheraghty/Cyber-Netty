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
    var one = document.getElementById('home');
    one.innerHTML = `<h1>Stranger Danger!</h1>

    <p>Fill in the blanks activity</p>

    
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
function ActivityTwo() {
    var two = document.getElementById('home');
    two.innerHTML = `<h1>The Internet</h1>

    <p>Fill in the blanks activity</p>

    
    `;
}

// When Activity1 button is clicked
function ActivityThree() {
    var three = document.getElementById('home');
    three.innerHTML = `<h1>Personal Information</h1>

    <p>Fill in the blanks activity</p>

    
    `;
}

// When Activity1 button is clicked
function ActivityFour() {
    var four = document.getElementById('home');
    four.innerHTML = `<h1>Pictures and Opinions</h1>

    <p>Fill in the blanks activity</p>

    
    `;
}

// When Activity1 button is clicked
function ActivityFive() {
    var five = document.getElementById('home');
    five.innerHTML = `<h1>Cyber Bullying</h1>

    <p>Fill in the blanks activity</p>

    
    `;
}

// When Activity1 button is clicked
function ActivitySix() {
    var six = document.getElementById('home');
    six.innerHTML = `<h1>Protocol</h1>

    <p>Fill in the blanks activity</p>

    
    `;
}