// JavaScript Document
"use strict";

function setUpListeners() {
    document.getElementById('a1').addEventListener("click", ActivityOne(), false);
    document.getElementById('a2').addEventListener("click", ActivityTwo(), false);
    document.getElementById('a3').addEventListener("click", ActivityThree(), false);
    document.getElementById('a4').addEventListener("click", ActivityFour(), false);
    document.getElementById('a5').addEventListener("click", ActivityFive(), false);
    document.getElementById('a6').addEventListener("click", ActivitySix(), false);
    alert("Working");
}

// When Activity1 button is clicked
ActivityOne() {
    alert("hi");
    var x = document.getElementsByClassName('main-about');
    x.parentNode.removeChild(x);
    var y = document.createElement('activity1-content');
    //y.innerHTML = ("Stranger Danger");
    y.setAttribute("background-color", "red");
    y.style.backgroundColor = "purple";
    /*y.setAttribute("src", "AdeleBW.jpg");
    y.setAttribute("width", "170px");
    y.setAttribute("margin-top", "40px");
    y.setAttribute("margin-right", "30px");
    y.setAttribute("id", "newadele");*/
}

// When Activity1 button is clicked
ActivityTwo()

// When Activity1 button is clicked
ActivityThree()

// When Activity1 button is clicked
ActivityFour()

// When Activity1 button is clicked
ActivityFive()

// When Activity1 button is clicked
ActivitySix()

//When Part A is clicked:
function PartA() {
    //rotating the logo
    var a = document.getElementsByClassName('logo');
    a.style.transform = "rotate(180deg)";
    //Increasing the font sizes and colours of the top three names in the top 10 list
    var b = document.getElementById('adele');
    b.style.font = "72px";
    b.style.color = "#e63636"; // red
    var c = document.getElementById('justinbieber');
    c.style.font = "72px";
    c.style.color = "#e63636";
    var d = document.getElementById('fleureast');
    d.style.font = "72px";
    d.style.color = "#e63636";

    //Changing every paragraph to red
    var f = document.getElementsByTagName('p');
    f.style.color = "#e63636";

    //Changing ever image to black and white
    var p = document.getElementById('img2');
    p.parentNode.removeChild(p);
    var q = document.createElement("BWJB");
    q.setAttribute("src", "JustinBieber.jpg");
    q.setAttribute("width", "170px");
    q.setAttribute("margin-top", "40px");
    q.setAttribute("margin-left", "30px");
    q.setAttribute("margin-bottom", "40px");
    q.setAttribute("id", "newjustinbieber");

    var r = document.getElementById('img3');
    r.parentNode.removeChild(r);
    var s = document.createElement("BWFE");
    s.setAttribute("src", "FleurEast.jpg");
    s.setAttribute("width", "170px");
    s.setAttribute("margin-top", "40px");
    s.setAttribute("margin-right", "30px");
    s.setAttribute("margin-bottom", "40px");
    s.setAttribute("id", "newfleureast");

    var x = document.getElementById('img1');
    x.parentNode.removeChild(x);
    var y = document.createElement("BWAdele");
    y.setAttribute("src", "AdeleBW.jpg");
    y.setAttribute("width", "170px");
    y.setAttribute("margin-top", "40px");
    y.setAttribute("margin-right", "30px");
    y.setAttribute("id", "newadele");



}

//When Part B is clicked
function PartB() {
    //Removing the first heading above Adele information and replacing it with song title
    var a = document.getElementById('headerA');
    a.parentNode.removeChild(a);
    var b = document.createElement('header1');
    b.innerHTML = "Adele - Hello";



    //Removing second heading above JB and Fleur East and replacing with song titles
    var c = document.getElementById('headerB');
    c.parentNode.removeChild(c);
    var d = document.createElement('header2');
    d.innerHTML = "Justin Bieber - Sorry";
    d.innerHTML = "Fleur East - Sax";

    //Fix the h1s 

    /*var e = document.getElementById('p');
    e[0].style.font = "100px";
    e[0].style.color = "#e63636";*/

    //Removing initial banner image
    var h = document.getElementsByClassName = "main-banner";
    h.parentNode.removeChild(h);

    //Slideshow to replace the single banner image from original homepage


    var slideshow = document.getElementById("mySlide");
    var slideholder = document.createElement('img');
    slideholder.setAttribute("id", "");

    var slideArray = ["images/onedirection.jpg", "images/maroon5.jpg", "images/fleureast.jpg", "images/littlemix.jpg", "images/Adele.jpg", "images/Eminem.jpg", "justinbieber.jpg"];

    var slideIndex = 0;

    function imageChange() {
        slideholder.setAttribute("src", slideArray[slideIndex]);
        slideIndex++;
        if (slideIndex >= slideArray.length) {
            slideIndex = 0;
        }
    }

    var intervalHandle = setInterval(imageChange, 1500);

    slideholder.onclick = function() {
        clearInterval(intervalHandle);
    };

    slideshow.appendChild(slideholder);

    //Slideshow help from Youtube video tutorial 
}