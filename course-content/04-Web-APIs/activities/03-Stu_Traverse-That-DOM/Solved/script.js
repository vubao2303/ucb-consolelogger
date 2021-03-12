var artDiv = document.getElementById("articles");
// var artDiv = document.body.children[1];
var mainDiv = document.getElementById("main");
// var mainDiv = document.body.children[0];

// document.body.children[1].children[0].children[1].style.color = "blue";
artDiv.children[0].lastElementChild.style.color = "blue";
// artDiv.children[0].children[1].style.color = "blue";
artDiv.children[0].style.fontSize = "50px";
artDiv.previousElementSibling.style.background = "black";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";
mainDiv.style.fontSize = "50px";
