/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const suits = ["♠️", "♣️", "♦️", "♥️"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
var suit = suits[Math.floor(Math.random() * suits.length)];
var value = values[Math.floor(Math.random() * values.length)];

function toggleImg() {
  var x = document.getElementById("ace");
  x.style.display === "flex"
    ? (x.style.display = "none")
    : (x.style.display = "none");
  var x = document.getElementById("ace2");
  x.style.display === "flex"
    ? (x.style.display = "none")
    : (x.style.display = "none");
  var x = document.getElementById("ace3");
  x.style.display === "flex"
    ? (x.style.display = "none")
    : (x.style.display = "none");
  var x = document.getElementById("ace4");
  x.style.display === "flex"
    ? (x.style.display = "none")
    : (x.style.display = "none");
}

document.clickFunction = clickFunction => {
  var suit = suits[Math.floor(Math.random() * suits.length)];
  var value = values[Math.floor(Math.random() * values.length)];
  if (suit === "♦️" || suit === "♥️") {
    document.querySelector("#suitTop").style.color = "red";
    document.querySelector("#suitBottom").style.color = "red";
    document.querySelector("#cardName").style.color = "red";
  } else {
    document.querySelector("#suitTop").style.color = "black";
    document.querySelector("#suitBottom").style.color = "black";
    document.querySelector("#cardName").style.color = "black";
  }
  document.querySelector("#suitTop").innerHTML = suit;
  document.querySelector("#suitBottom").innerHTML = suit;
  document.querySelector("#cardName").innerHTML = value;
};

document.clickFunction2 = clickFunction => {
  var suit = suits[Math.floor(Math.random() * suits.length)];
  var value = values[Math.floor(Math.random() * values.length)];

  if (suit === "♦️" || suit === "♥️") {
    document.querySelector("#suitTop2").style.color = "red";
    document.querySelector("#suitBottom2").style.color = "red";
    document.querySelector("#cardName2").style.color = "red";
  } else {
    document.querySelector("#suitTop2").style.color = "black";
    document.querySelector("#suitBottom2").style.color = "black";
    document.querySelector("#cardName2").style.color = "black";
  }
  document.querySelector("#suitTop2").innerHTML = suit;
  document.querySelector("#suitBottom2").innerHTML = suit;
  document.querySelector("#cardName2").innerHTML = value;
};

document.clickFunction3 = clickFunction => {
  var suit = suits[Math.floor(Math.random() * suits.length)];
  var value = values[Math.floor(Math.random() * values.length)];
  if (suit === "♦️" || suit === "♥️") {
    document.querySelector("#suitTop3").style.color = "red";
    document.querySelector("#suitBottom3").style.color = "red";
    document.querySelector("#cardName3").style.color = "red";
  } else {
    document.querySelector("#suitTop3").style.color = "black";
    document.querySelector("#suitBottom3").style.color = "black";
    document.querySelector("#cardName3").style.color = "black";
  }
  document.querySelector("#suitTop3").innerHTML = suit;
  document.querySelector("#suitBottom3").innerHTML = suit;
  document.querySelector("#cardName3").innerHTML = value;
};

document.clickFunction4 = clickFunction => {
  var suit = suits[Math.floor(Math.random() * suits.length)];
  var value = values[Math.floor(Math.random() * values.length)];
  if (suit === "♦️" || suit === "♥️") {
    document.querySelector("#suitTop4").style.color = "red";
    document.querySelector("#suitBottom4").style.color = "red";
    document.querySelector("#cardName4").style.color = "red";
  } else {
    document.querySelector("#suitTop4").style.color = "black";
    document.querySelector("#suitBottom4").style.color = "black";
    document.querySelector("#cardName4").style.color = "black";
  }
  document.querySelector("#suitTop4").innerHTML = suit;
  document.querySelector("#suitBottom4").innerHTML = suit;
  document.querySelector("#cardName4").innerHTML = value;
};

var btn = document.getElementById("myBtn");
btn.addEventListener("click", toggleImg);
