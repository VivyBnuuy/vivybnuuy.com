"use strict";

// Get content element classes
let portfolioElement = document.getElementsByClassName("portfolio")[0];
let commissionsElement = document.getElementsByClassName("commissions")[0];
let cardElement = document.getElementsByClassName("contents")[0];

// Get button element classes
let commissionsButtonElement = document.getElementsByClassName("buttons__commissions")[0];
let portfolioButtonElement = document.getElementsByClassName("buttons__portfolio")[0];

// Get close icon element classes
let commissionsCloseElement = document.getElementsByClassName("exit-icon")[0];
let portfolioCloseElement = document.getElementsByClassName("exit-icon")[1];

function buttonListeners() {
    // Portfolio
    portfolioButtonElement.addEventListener("click", showPortfolio);
    portfolioCloseElement.addEventListener("click", closePortfolio);

    // Commissions
    commissionsButtonElement.addEventListener("click", showCommissions);
    commissionsCloseElement.addEventListener("click", closeCommissions);
}

function showCommissions() {
    cardElement.style = "display: none;";

    // Keeps the portfolio element from flashing onto the screen at the same time as the card is hidden
    setTimeout(function() {commissionsElement.style = "display: grid;";}, 10);
}

function showPortfolio() {
    cardElement.style = "display: none;";

    // Keeps the portfolio element from flashing onto the screen at the same time as the card is hidden
    setTimeout(function() {portfolioElement.style = "display: grid;";}, 10);
}

function closeCommissions() {
    commissionsElement.style = "display: none;";
    cardElement.style = "display: grid;";
}

function closePortfolio() {
    portfolioElement.style = "display: none;";
    cardElement.style = "display: grid;";
}

document.onload = buttonListeners();