// JavaScript Document
"use strict";

function setUpListeners() {
    document.getElementById('a1').addEventListener("click", ActivityOne, false);
    document.getElementById('a1').addEventListener("load", StrangerModules, false);
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
        <p>Beware of people you talk to or <div id="interactSlot" ondrop="dropped()">?</div> with online</p>

        <div id="interactDrag"><img id="module" src="images/Info_Netty.svg"/></div>      
    </div> 
    
    <script src="../javascript/activities.js"></script>
    `;
    
    function StrangerModules() {
        alert("works");
        mypic = document.getElementById('module');
        mypic.addEventListener("dragstart", StartDrag, false);
        mypic.addEventListener("dragend", DragEnd, false);
        interactSlot = document.getElementById('interactSlot');
        interactSlot.addEventListener("dragenter", DragEnter, false);
        interactSlot.addEventListener("dragleave", DragLeave, false);
        interactSlot.addEventListener("dragover", function(e) {e.preventDefault();}, false);
        interactSlot.addEventListener("drop", Dropped, false);
    }
    
    function startDrag(e) {
        var code = '<img src="images/Info_Netty.svg"/>';
        e.dataTransfer.setData('Text', code);
    }
    
    function dropped(e) {
        e.preventDefault();
        interactSlot.innerHTML = e.dataTransfer.getData('Text');
    }

    function dragEnd(e) {
        pic = e.target;
        pic.style.visibility = "hidden";
    }

    function dragEnter(e) {
        e.preventDefault();
        interactSlot.style.background = "skyblue";
        interactSlot.style.border = "3px solid green";
    }

    function dragLeave(e) {
        e.preventDefault();
        interactSlot.style.background = "white";
        interactSlot.style.background = "3px solid yellow";
    }
    //window.addEventListener("load", StrangerModules, false);
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