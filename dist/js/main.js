"use strict";

// Get content element classes
let cardElement = document.getElementsByClassName("contents")[0];
let commissionsElement = document.getElementsByClassName("commissions")[0];
let portfolioElement = document.getElementsByClassName("portfolio")[0];

// Get button element classes
let commissionsButtonElement = document.getElementsByClassName("buttons__commissions")[0];
let portfolioButtonElement = document.getElementsByClassName("buttons__portfolio")[0];

// Get close icon element classes
let commissionsCloseElement = document.getElementsByClassName("exit-icon")[0];
let portfolioCloseElement = document.getElementsByClassName("exit-icon")[1];

function buttonListeners() {
    // Commissions
    commissionsButtonElement.addEventListener("click", showTarget);
    commissionsCloseElement.addEventListener("click", closeTarget);

    // Portfolio
    portfolioButtonElement.addEventListener("click", showTarget);
    portfolioCloseElement.addEventListener("click", closeTarget);
}

// Shows website sections depending on which button is clicked
function showTarget(source) {
    let clickedElement = source.currentTarget;

    switch(true) {
        // Commissions
        case (clickedElement.className == "buttons buttons__commissions"):
            cardElement.style.animationName = "fade-out";

            setTimeout(function() {
                cardElement.style = "display: none;";
                commissionsElement.style = "display: grid";
                commissionsElement.style.animationName = "fade-in";
            }, 500);
            break;

        // Portfolio
        case (clickedElement.className == "buttons buttons__portfolio"):
            cardElement.style.animationName = "fade-out";

            setTimeout(function() {
                cardElement.style = "display: none;";
                portfolioElement.style = "display: grid";
                portfolioElement.style.animationName = "fade-in";
            }, 500);
    }
}

// Closes open website section and goes back to main contents
function closeTarget(source) {
    let clickedElement = source.currentTarget;

    switch(true) {
        // Commissions
        case (clickedElement.className == "commissions-card__info__links exit-icon"):
            commissionsElement.style = "display: none;";
            cardElement.style = "display: grid;";
            break;

        // Portfolio    
        case (clickedElement.className == "portfolio-card__info__links exit-icon"):
            portfolioElement.style = "display: none;";
            cardElement.style = "display: grid;";
    }
}

document.onload = buttonListeners();