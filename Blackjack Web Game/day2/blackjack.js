const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");
const playerPoints = document.getElementById("player-points");
const dealerPoints = document.getElementById("dealer-points");
let deck = [];
let playerCards = [];
let dealerCards = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const makeDeck = (rank, suit) => {
    const card = {
        rank: rank,
        suit: suit,
        pointValue: rank > 10 ? 10 : rank,
    };
    deck.push(card);
};

for (let suit of suits) {
    for (const rank of ranks) {
    makeDeck(rank, suit);
    }
}

function getCardImagePlayer (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    playerHand.append(cardImage)
}

function getCardImageDealer (card) {
    const cardImage = document.createElement("img");
    cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
    dealerHand.append(cardImage)
}

function dealPlayer () {
    const playerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(playerCardOne);
    const playerCardTwo = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(playerCardTwo);
    playerCards.push(playerCardOne, playerCardTwo)
    playerScore = calculatePointsPlayer(playerCards, playerCards.length)
}

function dealDealer () {
    const dealerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardOne);
    const dealerCardTwo = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardTwo);
    dealerCards.push(dealerCardOne, dealerCardTwo)
    dealerScore = calculatePointsDealer(dealerCards, dealerCards.length)
}

function dealHand () {
    playerHand.innerHTML = null
    dealerHand.innerHTML = null
    playerCards = []
    dealerCards = []
    dealPlayer();
    dealDealer();
}

function hitPlayer () {
    const playerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImagePlayer(playerCardOne);
    playerCards.push(playerCardOne)
    playerScore = calculatePointsPlayer(playerCards, playerCards.length)
    if (playerPoints.innerText > 21) {
        playerPoints.innerText = ("BUST! You lose. Press Deal to Play Again!")
    }
}

function hitDealer () {
    const dealerCardOne = deck[Math.floor(Math.random()*deck.length)];
    getCardImageDealer(dealerCardOne);
    dealerCards.push(dealerCardOne)
    dealerScore = calculatePointsDealer(dealerCards, dealerCards.length)
}

function stand () {
    if (dealerPoints.innerText < 16) {
        hitDealer();
    }
}

function hit () {
    
}

const cardPoints = (hand = [], score = 0) => {
    for (const card of hand) {
        switch (card.pointValue) {
            case "ace":
                if (score > 10) score += 1;
                if (score <= 10) score += 11;
                break;
            case "jack":
                score += 10;
                break;
            case "queen":
                score += 10;
                break;
            case "king":
                score += 10;
                break;
            default:
                score += card.pointValue
        }
    }
    return score;
}

function calculatePointsPlayer (playerCards) {
    let score = 0;
    score = cardPoints(playerCards, score)
    playerPoints.innerText = score
    return score;
}

function calculatePointsDealer (dealerCards) {
    let score = 0;
    score = cardPoints(dealerCards, score)
    dealerPoints.innerText = score
    return score;
}



window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

dealButton.addEventListener("click", dealHand, calculatePointsDealer(dealerCards, 0), calculatePointsPlayer(playerCards, 0))
hitButton.addEventListener("click", hitPlayer, calculatePointsDealer(dealerCards, 0), calculatePointsPlayer(playerCards, 0))
standButton.addEventListener("click", stand, calculatePointsDealer(dealerCards, 0), calculatePointsPlayer(playerCards, 0))