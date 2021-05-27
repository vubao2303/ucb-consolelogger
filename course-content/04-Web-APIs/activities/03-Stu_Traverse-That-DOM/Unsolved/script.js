// var artDiv = document.getElementById("articles");
// // var artDiv = document.body.children[1];
// var mainDiv = document.getElementById("main");
// // var mainDiv = document.body.children[0];

// // document.body.children[1].children[0].children[1].style.color = "blue";
// artDiv.children[0].lastElementChild.style.color = "blue";
// // artDiv.children[0].children[1].style.color = "blue";
// artDiv.children[0].style.fontSize = "50px";
// artDiv.previousElementSibling.style.background = "black";

// mainDiv.childNodes[1].style.textDecoration = "underline";
// mainDiv.lastElementChild.style.fontSize = "50px";
// mainDiv.firstElementChild.style.color = "orange";
// mainDiv.lastElementChild.parentElement.style.fontSize = "40px";
// mainDiv.style.fontSize = "50px";



// * Target the div with the ID of`articles`.
var divArticle = document.getElementById("articles")
// beacause the dive only have one articel so that became its child 0 
// Change its font size to `50px`.
divArticle.children[0].style.fontSize = "50px"

// Change its last childs to have a font color of`blue`.
// in this case there are 2 child, so the second child index[1] is the last child
divArticle.children[0].children[1].style.color = "blue"
// Or you can do it this way to ensure the last child will always be blue
// // divArticle.children[0].lastElementChild.style.color = "blue";

// Change its previous sibling to have a background color of `black`.
// the previous sibbling of article is div with the id of main, 
// so this will make main's background turn black
divArticle.previousElementSibling.style.background = "black";

// * Target the div with the ID of `main`.
// queryselector is another way to target an element in document 
var divMain = document.querySelector("#main")

// * Change its second child node so the text is `underlined`.

// divMain.children[1].style.textDecoration = "underline"

divMain.childNodes[1].style.textDecoration = "underline";
// * Change its last child element to have a font size of `50px`.

divMain.lastElementChild.style.fontSize = "50px"

// * Change its first child element to have a font color of `orange`.

// * Change its last child elements parent to have a font size of `40px`.






console.log(document)
console.log(divArticle.children[0]);
console.log(divMain)