"use strict";

// Get content element classes
let portfolioElement = document.getElementsByClassName("portfolio")[0];
let cardElement = document.getElementsByClassName("contents")[0];

// Get button element classes
let portfolioButtonElement = document.getElementsByClassName("buttons__portfolio")[0];
let portfolioCloseEelemnent = document.getElementsByClassName("exit-icon")[0];

function buttonListeners() {
    portfolioButtonElement.addEventListener("click", showPortfolio);
    portfolioCloseEelemnent.addEventListener("click", closePortfolio);
}

function showPortfolio() {
    cardElement.style = "display: none;";

    // Keeps the portfolio element from flashing onto the screen at the same time as the card is hidden
    setTimeout(function() {portfolioElement.style = "display: grid;";}, 10);
}

function closePortfolio() {
    portfolioElement.style = "display: none;";
    cardElement.style = "display: grid;";
}

document.onload = buttonListeners();