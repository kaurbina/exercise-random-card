
let title = document.createElement("h1");
title.innerHTML = "Cards";
let att = document.createAttribute("style");
att.value = "color: red; text-align: center; margin-bottom: 1rem";
title.setAttributeNode(att);
document.body.appendChild(title);

let container = document.createElement("div");
document.body.appendChild(container);
document.getElementsByTagName("div")[0].setAttribute("class", "container");

let divCards = document.createElement("div");
document.querySelector(".container").appendChild(divCards);
document.getElementsByTagName("div")[1].setAttribute("class", "card");

let divTop = document.createElement("div");
document.querySelector(".card").appendChild(divTop);
document.getElementsByTagName("div")[2].setAttribute("class", "divTop");

let singleTop = document.createElement("p");
document.querySelector(".divTop").appendChild(singleTop);
document.getElementsByTagName("p")[0].setAttribute("id", "singleTop");

let divContent = document.createElement("div");
document.querySelector(".card").appendChild(divContent);
document.getElementsByTagName("div")[3].setAttribute("class", "divContent");

let content = document.createElement("p");
document.querySelector(".divContent").appendChild(content);
document.getElementsByTagName("p")[1].setAttribute("class", "content");
document.getElementsByTagName("p")[1].setAttribute("id", "content");

let divBottom = document.createElement("div");
let att1 = document.createAttribute("style");
att1.value = "transform: rotatex(175deg)";
divBottom.setAttributeNode(att1);
document.querySelector(".card").appendChild(divBottom);
document.getElementsByTagName("div")[4].setAttribute("class", "divBottom");

let singleBottom = document.createElement("p");
document.querySelector(".divBottom").appendChild(singleBottom);
document.getElementsByTagName("p")[2].setAttribute("id", "singleBottom");

function loadCards () {

    let cardTop = document.getElementById("singleTop");
    
    let cardBottom =  document.getElementById("singleBottom");  
        
    let cards = ['heart', 'spade', 'loz', 'clubs', 'diams'];

    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; 
    
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    
    cardTop.setAttribute("class", singleCard);
    cardTop.setAttribute("class", cardTop.getAttribute('class') +' positionTop');

    document.getElementById("content").innerHTML = singleNumber;

    cardBottom.setAttribute("class", singleCard);
    cardBottom.setAttribute("class", singleBottom.getAttribute('class') +' positionBottom');

}

window.onload = () => {
    loadCards();
}