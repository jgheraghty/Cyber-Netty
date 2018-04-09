// JavaScript Document
"use strict";

function setUpListeners() {
    document.getElementById('a1').addEventListener("click", StrangerDanger, false);
    document.getElementById('a2').addEventListener("click", TheInternet, false);
    document.getElementById('a3').addEventListener("click", Sharing, false);
    document.getElementById('a4').addEventListener("click", PersonalInformation, false);
    document.getElementById('a5').addEventListener("click", CyberBullying, false);
    document.getElementById('a6').addEventListener("click", Protocol, false);
}

// Drag and Drop for Stranger Danger
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// When Activity1 button is clicked
function StrangerDanger() {
    var one = document.getElementById('home');
    one.innerHTML = `
    <!--<div>
        <div class="panel panel-default">
            <div class="panel-body mask">Stranger Danger</div>                    
        </div>

        <div class="panel-body">True or False: You should never meet anyone you met online in person?</div>
            <br>
            <button type="button" id="true">True</button>
            <button type="button" id="false">False</button>        
        </div>

        <button onclick="TrueorFalse()" class="btnSubmit" type="submit">Submit</button>        
    </div> --> 

    <form id="quiz" name="quiz">

    <p>_______ of people you talk to or interact with online</p>
    <input id="textbox" type="text" name="question1"/>

    <p>Some people use the internet as a _____ to hide behind to be destructive to others</p>
    <input id="mc" type="radio" name="question2" value="hat">Hat<br>    
    <input id="mc" type="radio" name="question2" value="beach ball">Beach Ball<br>
    <input id="mc" type="radio" name="question2" value="mask">Mask<br>

    <p>You should never meet anyone you met online in person</p>
    <input id="mc" type="radio" name="question3" value="true">True<br>
    <input id="mc" type="radio" name="question3" value="false">False<br>

    <input id="button" type="button" value="Submit" onclick="Check()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>

    `;

    /*<h2>Match the Numbers!</h2>
        <div id="content">
            <div id="deck"> </div>
            <div id="cardPlace"> </div>
            <div id="win">                    
                <h2>Match the Numbers!</h2>
                <button onclick="play()">Play!</button>
            </div>
        </div>*/

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

function Check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Ans1") {
        correct++;
    }

    if (question2 == "Ans2") {
        correct++;
    }

    if (question3 == "Ans3") {
        correct++;
    }

    var messages = ["You did it!", "Almost there..", "Try again"];

    var range;

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[range];
}

function TrueorFalse() {

}

// When Activity2 button is clicked
function TheInternet() {
    var two = document.getElementById('home');
    two.innerHTML = `         

    <div class="panel panel-default">
        <div class="panel-body mask">The Internet</div>                    
    </div>
<div class="panel-body">What is the internet?</div>
    <form>
        <input type="radio" name="internet" value="this" checked> This<br>
        <input type="radio" name="internet" value="that"> That<br>
        <input type="radio" name="internet" value="other"> Other  
    </form> 

    <button id="correctInternet" class="btnSubmit" type="submit">Submit</button>
    `;
}

function correctInternet() {

}

// When Activity3 button is clicked
function Sharing() {
    var three = document.getElementById('home');
    three.innerHTML = `<h1>Personal Information</h1>

    <form action="">
Everything is <input type="text" name="publicWord" value=""><br>
<br>
<button onclick="Share()" class="btnSubmit" type="submit">Submit</button>
</form>
    `;
}

function Share() {

}

// When Activity4 button is clicked
function PersonalInformation() {
    var four = document.getElementById('home');
    four.innerHTML = `
    <div class="panel panel-default">
    <div class="panel-body mask">Pictures and Opinions</div>                    
</div>
<div class="panel-body">Click the correct boxes</div>

<form action="">
<input type="checkbox" name="pandos" value="One">This
<br>
<input type="checkbox" name="pandos" value="Two">This 
<br>
<input type="checkbox" name="pandos" value="Three">That
<br>
<input type="checkbox" name="pandos" value="Four">And That 
</form>

<button onclick="PInfo()" class="btnSubmit" type="submit">Submit</button>
    `;
}

function PInfo() {

}

// When Activity5 button is clicked
function CyberBullying() {
    var five = document.getElementById('home');
    five.innerHTML = `
    <div class="panel panel-default">
    <div class="panel-body mask">Cyber Bullying</div>                    
</div>
<div class="panel-body"></div>
<form>
        <input type="radio" name="bully" value="this" checked> This<br>
        <input type="radio" name="bully" value="that"> That<br>
        <input type="radio" name="bully" value="other"> Other  
    </form>


<button onclick="CyberBully()" class="btnSubmit" type="submit">Submit</button>
    
    `;
}

function CyberBully() {

}

// When Activity6 button is clicked
function Protocol() {
    var six = document.getElementById('home');
    six.innerHTML = `<h1>Protocol</h1>

    <p>Fill in the blanks activity</p>
    
    `;
}