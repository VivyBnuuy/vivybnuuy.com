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
let webCommissionsCloseElement = document.getElementsByClassName("exit-icon")[1];
let portfolioCloseElement = document.getElementsByClassName("exit-icon")[2];

// Get Terms of Service element classes
let tosCategoryHeaders = document.getElementsByClassName("commissions__tos__section__header");
let tosCategoryContents = document.getElementsByClassName("commissions__tos__section");

// Get Web Dev Commissions element classes
let webCommissionsElement = document.getElementsByClassName("webdev")[0];
let webCommissionsButton = document.getElementsByClassName("buttons__comms-webdev")[0];

function buttonListeners() {
    // Commissions
    commissionsButtonElement.addEventListener("click", showTarget);
    commissionsCloseElement.addEventListener("click", closeTarget);

    // Web Dev Commissions
    webCommissionsButton.addEventListener("click", showTarget);
    webCommissionsCloseElement.addEventListener("click", closeTarget);

    // Portfolio
    portfolioButtonElement.addEventListener("click", showTarget);
    portfolioCloseElement.addEventListener("click", closeTarget);

    // Terms of Service category headers
    for (let i = 0; i < 14; i++) {
        tosCategoryHeaders[i].addEventListener("click", toggleTermsCategory);
    }
}

// Toggles Terms of Service categories when header is clicked
function toggleTermsCategory(source) {
    let clickedElement = source.currentTarget;
    let categoryState = (getComputedStyle(clickedElement.nextElementSibling));
    let chevron = clickedElement.lastElementChild;

    if (categoryState.getPropertyValue("display") == "none") {
        clickedElement.nextElementSibling.style = "display: block";
        chevron.style = "rotate: 180deg";   
           
    } else {
        clickedElement.nextElementSibling.style.animationName = "fade-out";
        chevron.style = "rotate: 0deg";

        setTimeout(function() {
            clickedElement.nextElementSibling.style = "display: none";  
        }, 200);
    }
}

// Shows website sections depending on which button is clicked
function showTarget(source) {
    let clickedElement = source.currentTarget;

    window.scrollTo({top: 0, behavior: "smooth"});
    
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

        // Web Dev Commissions
        case (clickedElement.className == "buttons buttons__comms-webdev"):
            commissionsElement.style.animationName = "fade-out";

            setTimeout(function() {
                commissionsElement.style = "display: none;";
                webCommissionsElement.style = "display: grid";
                webCommissionsElement.style.animationName = "fade-in";
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
            commissionsElement.style.animationName = "fade-out";

            setTimeout(function() {
                commissionsElement.style = "display: none;";
                cardElement.style = "display: grid;";
                cardElement.style.animationName = "fade-in";
            }, 500);
            break;

        // Web Dev Commissions
        case (clickedElement.className == "webdev-card__info__links exit-icon"):
            webCommissionsElement.style.animationName = "fade-out";

            setTimeout(function() {
                webCommissionsElement.style = "display: none;";
                commissionsElement.style = "display: grid;";
                commissionsElement.style.animationName = "fade-in";
            }, 500);
            break;

        // Portfolio    
        case (clickedElement.className == "portfolio-card__info__links exit-icon"):
            portfolioElement.style.animationName = "fade-out";

            setTimeout(function() {
                portfolioElement.style = "display: none;";
                cardElement.style = "display: grid;";
                cardElement.style.animationName = "fade-in";
            }, 500);
    }
}

// Add event listeners on page load
document.onload = buttonListeners();