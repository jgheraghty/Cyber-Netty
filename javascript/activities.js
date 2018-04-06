// JavaScript Document
"use strict";

function setUpListeners() {
    document.getElementById('a1').addEventListener("click", ActivityOne, false);
    document.getElementById('a2').addEventListener("click", ActivityTwo, false);
    document.getElementById('a3').addEventListener("click", ActivityThree, false);
    document.getElementById('a4').addEventListener("click", ActivityFour, false);
    document.getElementById('a5').addEventListener("click", ActivityFive, false);
    document.getElementById('a6').addEventListener("click", ActivitySix, false);
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
function ActivityOne() {
    var one = document.getElementById('home');
    one.innerHTML = `
    <div>
        <div class="panel panel-default">
            <div class="panel-body mask">Stranger Danger</div>                    
        </div>

        <div class="panel-body">True or False: You should never meet anyone you met online in person?</div>
            <br>
            <button type="button" id="true">True</button>
            <button type="button" id="false">False</button>        
        </div>

        <button onclick="TrueorFalse()" class="btnSubmit" type="submit">Submit</button>        
    </div>    
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

function TrueorFalse() {

}

// When Activity2 button is clicked
function ActivityTwo() {
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

// When Activity3 button is clicked
function ActivityThree() {
    var three = document.getElementById('home');
    three.innerHTML = `<h1>Personal Information</h1>

    <form action="">
Everything is <input type="text" name="publicWord" value=""><br>
<br>
<button onclick="PInfo()" class="btnSubmit" type="submit">Submit</button>
</form>
    `;
}

function PInfo() {

}

// When Activity4 button is clicked
function ActivityFour() {
    var four = document.getElementById('home');
    four.innerHTML = `
    <div class="panel panel-default">
    <div class="panel-body mask">Pictures and Opinions</div>                    
</div>
<div class="panel-body">Click the correct boxes</div>


<button onclick="PicsandOpins()" class="btnSubmit" type="submit">Submit</button>
    `;
}

function PicsandOpins() {

}

// When Activity5 button is clicked
function ActivityFive() {
    var five = document.getElementById('home');
    five.innerHTML = `<h1>Cyber Bullying</h1>

    <p>Another key press activity</p>
    
    `;
}

// When Activity6 button is clicked
function ActivitySix() {
    var six = document.getElementById('home');
    six.innerHTML = `<h1>Protocol</h1>

    <p>Fill in the blanks activity</p>
    
    `;
}