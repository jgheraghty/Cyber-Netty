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

/*// Drag and Drop for Stranger Danger
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
}*/

// When Activity1 button is clicked
function ActivityOne() {
    
    var one = document.getElementById('home');

    one.innerHTML = `<h1>Stranger Danger!</h1>
    <div>
        <p>Match cards - what one is the odd one out?</p>

        <p>Beware of people you talk to or <div id="interactSlot">?</div> with online</p>

        <div id="interactDrag"><img id="module" src="images/Info_Netty.svg"/></div>      
    </div>    
    `;
    alert("works");
    mypic = document.getElementById('module');
    mypic.addEventListener("dragstart", StartDrag, false);
    mypic.addEventListener("dragend", DragEnd, false);
    interactSlot = document.getElementById('interactSlot');
    interactSlot.addEventListener("dragenter", DragEnter, false);
    interactSlot.addEventListener("dragleave", DragLeave, false);
    interactSlot.addEventListener("dragover", function(e) {e.preventDefault();}, false);
    interactSlot.addEventListener("drop", Dropped, false);
    
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

    /*function StrangerModules() {
        alert("works");
        mypic = document.getElementById('module');
        mypic.addEventListener("dragstart", StartDrag, false);
        mypic.addEventListener("dragend", DragEnd, false);
        interactSlot = document.getElementById('interactSlot');
        interactSlot.addEventListener("dragenter", DragEnter, false);
        interactSlot.addEventListener("dragleave", DragLeave, false);
        interactSlot.addEventListener("dragover", function(e) {e.preventDefault();}, false);
        interactSlot.addEventListener("drop", Dropped, false);
    }*/
    
    function StartDrag(e) {
        var code = '<img src="images/Info_Netty.svg"/>';
        e.dataTransfer.setData('Text', code);
    }
    
    function Dropped(e) {
        e.preventDefault();
        interactSlot.innerHTML = e.dataTransfer.getData('Text');
    }

    function DragEnd(e) {
        pic = e.target;
        pic.style.visibility = "hidden";
    }

    function DragEnter(e) {
        e.preventDefault();
        interactSlot.style.background = "skyblue";
        interactSlot.style.border = "3px solid green";
    }

    function DragLeave(e) {
        e.preventDefault();
        interactSlot.style.background = "white";
        interactSlot.style.background = "3px solid yellow";
    }

    

    

    window.addEventListener("load", StrangerModules, false);
}

// When Activity2 button is clicked
function ActivityTwo() {
    var two = document.getElementById('home');
    two.innerHTML = `<h1>The Internet</h1>
    
    <p>Key press activity</p>
    
    `;
}

// When Activity3 button is clicked
function ActivityThree() {
    var three = document.getElementById('home');
    three.innerHTML = `<h1>Personal Information</h1>

    <p>Key press activity</p>
    `;
}

// When Activity4 button is clicked
function ActivityFour() {
    var four = document.getElementById('home');
    four.innerHTML = `<h1>Pictures and Opinions</h1>

    <p>Fill in the blanks activity</p>
    `;
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