// JavaScript Document
"use strict";

function setUpListeners() {
    document.getElementById('a1').addEventListener("click", StrangerDangerActivity, false);
    document.getElementById('a2').addEventListener("click", TheInternetActivity, false);
    document.getElementById('a3').addEventListener("click", SharingActivity, false);
    document.getElementById('a4').addEventListener("click", PersonalInformationActivity, false);
    document.getElementById('a5').addEventListener("click", CyberBullyingActivity, false);
    document.getElementById('a6').addEventListener("click", ProtocolActivity, false);
}

// Drag and Drop for Stscorer Danger
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
function StrangerDangerActivity() {
    var one = document.getElementById('home');
    one.innerHTML = `
    <!--<div>
        <div class="panel panel-default">
            <div class="panel-body mask">Stscorer Danger</div>                    
        </div>

        <div class="panel-body">True or False: You should never meet anyone you met online in person?</div>
            <br>
            <button type="button" id="true">True</button>
            <button type="button" id="false">False</button>        
        </div>

        <button onclick="TrueorFalse()" class="btnSubmit" type="submit">Submit</button>        
    </div> --> 

    <form id="quiz" name="quiz">

    <p class="questions">Question 1: _______ of people you talk to or interact with online</p>
    <!--<input id="textbox" type="text" name="question1"/>-->
    <input id="mc" type="radio" name="question1" value="take care">Take Care<br>
    <input id="mc" type="radio" name="question1" value="beware">Beware<br>
    <input id="mc" type="radio" name="question1" value="think">Think<br>

    <p class="questions">Question 2: Some people use the internet as a _____ to hide behind to be destructive to others</p>
    <input id="mc" type="radio" name="question2" value="hat">Hat<br>    
    <input id="mc" type="radio" name="question2" value="beach ball">Beach Ball<br>
    <input id="mc" type="radio" name="question2" value="mask">Mask<br>

    <p class="questions">Question 3: You should never meet anyone you met online in person</p>
    <input id="mc" type="radio" name="question3" value="true">True<br>
    <input id="mc" type="radio" name="question3" value="false">False<br>

    <input id="button" type="button" value="Submit" onclick="StrangerDanger()">
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
    //y.innerHTML = ("Stscorer Danger");
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

function StrangerDanger() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "beware") {
        correct++;
    }

    if (question2 == "mask") {
        correct++;
    }

    if (question3 == "true") {
        correct++;
    }

    var messages = ["You did it!", "Not quite!", "Try again"];

    var score;

    if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 3) {
        score = 1;
    }
    if (correct > 2) {
        score = 0;
    }

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity2 button is clicked
function TheInternetActivity() {
    var two = document.getElementById('home');
    two.innerHTML = `         

    <!--<div class="panel panel-default">
        <div class="panel-body mask">The Internet</div>                    
    </div>
<div class="panel-body">What is the internet?</div>
    <form>
        <input type="radio" name="internet" value="this" checked> This<br>
        <input type="radio" name="internet" value="that"> That<br>
        <input type="radio" name="internet" value="other"> Other  
    </form> 

    <button id="correctInternet" class="btnSubmit" type="submit">Submit</button>-->

    <form id="quiz" name="quiz">

    <p class="questions">Question:</p>
    <p>The Internet is a</p>
    <input id="textbox" type="text" name="question1"/>
    <p> of networks, a networking infrastructure. It</p>
    <input id="textbox" type="text" name="question2"/>
    <p> globally, forming a network in which any computer can</p>
    <input id="textbox" type="text" name="question3"/>
    <p> with any other computer, as long as they are both connected to the</p>
    <input id="textbox" type="text" name="question4"/><p>.</p>

    <h2>Suggested words:</h2>
    <p>communicate</p>
    <p>massive network</p>
    <p>connects millions of computers together</p>

    <input id="button" type="button" value="Submit" onclick="TheInternet()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>
    `;
}

function TheInternet() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 == "massive network") {
        correct++;
    }

    if (question2 == "connects millions of computers together") {
        correct++;
    }

    if (question3 == "communicate") {
        correct++;
    }

    if (question4 == "internet") {
        correct++;
    }

    var messages = ["You did it!", "Almost there..", "Three more..", "Try again"];

    var score;

    if (correct < 1) {
        score = 3;
    }
    if (correct > 0 && correct < 4) {
        score = 2;
    }
    if (correct > 2) {
        score = 1;
    }
    if (correct > 1) {
        score = 0;
    }

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity3 button is clicked
function SharingActivityActivity() {
    var three = document.getElementById('home');
    three.innerHTML = `<form id="quiz" name="quiz">

    <p class="questions">Question 1: The internet is like.. </p>
    <input id="mc" type="radio" name="question1" value="option1">Floating through the sky in a hot air balloon<br>
    <input id="mc" type="radio" name="question1" value="option2">Hanging out with Netty on the beach<br>
    <input id="mc" type="radio" name="question1" value="option3">Standing on the street, shouting into a megaphone<br>

    <!--<p class="questions">Question 2: </p>
    <input id="mc" type="radio" name="question2" value=""><br>    
    <input id="mc" type="radio" name="question2" value=""><br>

    <p class="questions">Question 3: </p>
    <input id="mc" type="radio" name="question3" value=""><br>
    <input id="mc" type="radio" name="question3" value=""><br>
    <input id="mc" type="radio" name="question3" value=""><br>-->

    <input id="button" type="button" value="Submit" onclick="Share()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>

    `;
}

function Share() {
    var question1 = document.quiz.question1.value;
    /*var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;*/
    var correct = 0;

    if (question1 == "option3") {
        correct++;
    }

    /*if (question2 == "") {
        correct++;
    }

    if (question3 == "") {
        correct++;
    }*/

    var messages = ["You did it!", "Not quite!", "Try again"];

    var score;

    if (correct) {
        score = 1;
    }
    /*if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 3) {
        score = 1;
    }
    if (correct > 2) {
        score = 0;
    }*/

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity4 button is clicked
function PersonalInformationActivityActivity() {
    var four = document.getElementById('home');
    four.innerHTML = `
    <form id="quiz" name="quiz">

    <p class="questions">Question 1: True or False, it's okay to give your password to your friends </p>
    <input id="mc" type="radio" name="question1" value="true">True<br>
    <input id="mc" type="radio" name="question1" value="false">False<br>

    <p class="questions">Question 2: Why must you never share your important details online?</p>
    <input id="mc" type="radio" name="question2" value="identity">Someone could steal your identity<br>    
    <input id="mc" type="radio" name="question2" value="disappear">Your information will disappear<br>

    <p class="questions">Question 3: What important details should you never put online</p>
    <input id="mc" type="radio" name="question3" value="option1">Shoe size, best friend, favourite food<br>
    <input id="mc" type="radio" name="question3" value="option2">Full name, date of birth, address and password<br>
    <input id="mc" type="radio" name="question3" value="option3">Favourite colour, favourite game<br>

    <input id="button" type="button" value="Submit" onclick="PInfo()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>

<!--<form action="">
<input type="checkbox" name="pandos" value="One">This
<br>
<input type="checkbox" name="pandos" value="Two">This 
<br>
<input type="checkbox" name="pandos" value="Three">That
<br>
<input type="checkbox" name="pandos" value="Four">And That 
</form>-->
    `;
}

function PInfo() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "false") {
        correct++;
    }

    if (question2 == "identity") {
        correct++;
    }

    if (question3 == "option2") {
        correct++;
    }

    var messages = ["You did it!", "Not quite!", "Try again"];

    var score;

    if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 3) {
        score = 1;
    }
    if (correct > 2) {
        score = 0;
    }

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity5 button is clicked
function CyberBullyingActivityActivity() {
    var five = document.getElementById('home');
    five.innerHTML = `
    <form id="quiz" name="quiz">

    <p class="questions">Question:</p>
    <p>A Cyber Bullying is the use of </p>
    <input id="textbox" type="text" name="question1"/>
    <p> to harass, threaten, embarrass, or </p>
    <input id="textbox" type="text" name="question2"/>
    <p>another person.</p>

    <h2>Suggested words:</h2>
    <p>target</p>
    <p>technology</p>
    
    
    <input id="button" type="button" value="Submit" onclick="CyberBully()">
    </form>

    <div id="after_submit">
    <p id="number_correct">
    <p id="message"></p>
    
    `;
}

function CyberBully() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var correct = 0;

    if (question1 == "technology") {
        correct++;
    }

    if (question2 == "target") {
        correct++;
    }

    var messages = ["You did it!", "Try again"];

    var score;

    if (correct < 1) {
        score = 2;
    }
    if (correct > 0 && correct < 2) {
        score = 1;
    }

    document.getElementById('after_submit').style.visibility = "visible";
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct";
    document.getElementById('message').innerHTML = messages[score];
}

// When Activity6 button is clicked
function ProtocolActivity() {
    var six = document.getElementById('home');
    six.innerHTML = `<h1>ProtocolActivity</h1>
    
    `;
}

function Protocol() {}