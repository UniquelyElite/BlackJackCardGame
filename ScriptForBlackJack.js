var deck = ['A', 'A', 'A', 'A', 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 'K', 'K', 'K', 'K'];
var deck2 = ['', ''];
var drawnCard = "";
var cardCounter = 52;
var totalValueNon = 0;
var totalValue = 0;
var placeHolder = 'Flipped';
var dealersTotalValue = 0;
var outcome = 'Undecided Yet';
var whosTotalValue = 0;
var whosTotalValue2 = 0;

function start() {
    titleHeading.style.visibility="hidden"
    titleParagraph.style.visibility="hidden"
    dealersTable.style.visibility="visible"
    yourTable.style.visibility="visible"
    var randomCard = Math.floor(Math.random() * cardCounter);
    drawnCard = deck.splice(randomCard, 1);
    cardCounter = cardCounter - 1;
    deck2[0] = drawnCard;
    console.log(drawnCard + ' was drawn for dealers Hidden Card.')
    console.log(cardCounter + ' cards are left in the deck.')
    console.log(deck2[0] + ' (deck2[0]) should equal ' + drawnCard)
    dealersCardDisplay.innerHTML = dealersCardDisplay.innerHTML + placeHolder + ', ';
    foldButton.style.visibility="visible";
    hitButton.style.visibility="visible";
    startButton.style.visibility="hidden";
    drawCard();
    dealerDrawCard1st();
    drawCard();
    return drawnCard;
}
function dealerDrawCard1st() {
    var randomCard = Math.floor(Math.random() * cardCounter);
    drawnCard = deck.splice(randomCard, 1);
    dealersCardDisplay.innerHTML = dealersCardDisplay.innerHTML + drawnCard + ', ';
    deck2[1] = drawnCard;
    console.log(drawnCard + ' was drawn for dealers display.');
    cardCounter = cardCounter - 1;
    console.log(cardCounter + ' cards are left in the deck.')
    console.log(deck2[1] + ' (deck2[1]) should equal ' + drawnCard)
    totalValueNon = totalValueNon + drawnCard
    switch (totalValueNon) {
        case '0A':
            dealersTotalValue = dealersTotalValue + 11;
            break;
        case '02':
            dealersTotalValue = dealersTotalValue + 2;
            break;
        case '03':
            dealersTotalValue = dealersTotalValue + 3;
            break;
        case '04':
            dealersTotalValue = dealersTotalValue + 4;
            break;
        case '05':
            dealersTotalValue = dealersTotalValue + 5;
            break;
        case '06':
            dealersTotalValue = dealersTotalValue + 6;
            break;
        case '07':
            dealersTotalValue = dealersTotalValue + 7;
            break;
        case '08':
            dealersTotalValue = dealersTotalValue + 8;
            break;
        case '09':
            dealersTotalValue = dealersTotalValue + 9;
            break;
        case '010':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        case '0J':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        case '0Q':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        case '0K':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        default:
            dealersTotalValue = dealersTotalValue + 'ERROR';
            
    }
    totalValueNon = 0;
    console.log(dealersTotalValue + ' is the dealers total value in cards.')
    }

function dealerRevealCard() {
    dealersCardDisplay.innerHTML = deck2[0] + ', ' + deck2[1] + ', ';
    totalValueNon = totalValueNon + deck2[0];
    switch (totalValueNon) {
        case '0A':
            dealersTotalValue = dealersTotalValue + 11;
            break;
        case '02':
            dealersTotalValue = dealersTotalValue + 2;
            break;
        case '03':
            dealersTotalValue = dealersTotalValue + 3;
            break;
        case '04':
            dealersTotalValue = dealersTotalValue + 4;
            break;
        case '05':
            dealersTotalValue = dealersTotalValue + 5;
            break;
        case '06':
            dealersTotalValue = dealersTotalValue + 6;
            break;
        case '07':
            dealersTotalValue = dealersTotalValue + 7;
            break;
        case '08':
            dealersTotalValue = dealersTotalValue + 8;
            break;
        case '09':
            dealersTotalValue = dealersTotalValue + 9;
            break;
        case '010':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        case '0J':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        case '0Q':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        case '0K':
            dealersTotalValue = dealersTotalValue + 10;
            break;
        default:
            dealersTotalValue = dealersTotalValue +100;
            
    }
    totalValueNon = 0;
    console.log(dealersTotalValue + ' is the dealers total value')
    if (dealersTotalValue >= 17) {
        outcomeCalculator();
    } else {
        dealerDrawCard();
    }
    }

function drawCard() {
    var randomCard = Math.floor(Math.random() * cardCounter);
    drawnCard = deck.splice(randomCard, 1);
    cardDisplay.innerHTML = cardDisplay.innerHTML + drawnCard + ', ';
    console.log(drawnCard + ' was drawn for the players displayed cards.');
    cardCounter = cardCounter - 1;
    console.log(cardCounter + ' cards are left in the deck.')
    whosTotalValue2 = 80100000101101101011000100110010101110010;
    totalValueCalculator();
    if (totalValue >= 21) {
        dealerRevealCard();
    }
    return drawnCard;
}

function dealerDrawCard() {
    var randomCard = Math.floor(Math.random() * cardCounter);
    drawnCard = deck.splice(randomCard, 1);
    dealersCardDisplay.innerHTML = dealersCardDisplay.innerHTML + drawnCard + ', ';
    console.log(drawnCard + ' was drawn for the dealers display.');
    cardCounter = cardCounter - 1;
    console.log(cardCounter + ' cards are left in the deck.')
    whosTotalValue2 = 801001100011011110111011001100101;
    totalValueCalculator();
    if (dealersTotalValue <= 16) {
        dealerDrawCard();
    } else {
        outcomeCalculator();
    }
}
function fold() {
    dealerRevealCard();
}
function outcomeCalculator() {
    if (dealersTotalValue === totalValue) {
        outcome = 'tied';
    } else if (dealersTotalValue >= 22 && totalValue >= 22) {
        outcome = 'tied'
    } else if (dealersTotalValue <= 21 && totalValue >= 22) {
        outcome = 'lost';
    } else if (dealersTotalValue >= 22 && totalValue <= 21) {
        outcome = 'won';
    } else if (dealersTotalValue < totalValue) {
        outcome = 'won'
    } else if (dealersTotalValue > totalValue) {
        outcome = 'lost'
    }
    console.log(outcome);
    hitButton.style.visibility='hidden';
    foldButton.style.visibility='hidden';
    outcomeRestartButton.style.visibility='visible';
    outcomeRestartButton.innerText = 'You ' + outcome + '! Click here to restart!';
}
function totalValueCalculator() {
totalValueNon = totalValueNon + drawnCard;
    switch (totalValueNon) {
        case '0A':
            whosTotalValue = 11;
            break;
        case '02':
            whosTotalValue = 2;
            break;
        case '03':
            whosTotalValue = 3;
            break;
        case '04':
            whosTotalValue = 4;
            break;
        case '05':
            whosTotalValue = 5;
            break;
        case '06':
            whosTotalValue = 6;
            break;
        case '07':
            whosTotalValue = 7;
            break;
        case '08':
            whosTotalValue = 8;
            break;
        case '09':
            whosTotalValue = 9;
            break;
        case '010':
            whosTotalValue = 10;
            break;
        case '0J':
            whosTotalValue = 10;
            break;
        case '0Q':
            whosTotalValue = 10;
            break;
        case '0K':
            whosTotalValue = 10;
            break;
        default:
            whosTotalValue = 'ERROR';
            
    }
    totalValueNon = 0;
    if (whosTotalValue2 == 80100000101101101011000100110010101110010) {
        totalValue = totalValue + whosTotalValue;
        console.log(totalValue + ' is your total value in cards.')
    } else if (whosTotalValue2 == 801001100011011110111011001100101) {
        dealersTotalValue = dealersTotalValue + whosTotalValue;
        console.log(dealersTotalValue + ' is the dealers total value in cards.');
    }
    }
