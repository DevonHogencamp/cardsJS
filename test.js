// Organized Deck of Cards Array
var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

// Deck for players
var player1 = [];
var player2 = [];

// Shuffle the Organized Deck of Cards
function shuffle(arr) {
    // Current array index of the card being shuffled
    // -1 because index starts from 0 not 1
    var currentIndex = arr.length - 1;

    // While there are still cards that need to be shuffled
    while (currentIndex >= 0) {
        // The random place in the deck the card will go
        var randomIndex = Math.floor(Math.random() * currentIndex);

        // Grabs the card in the place of the shuffled card
        var temporary = arr[currentIndex];

        // Makes the Card go into the random spot
        arr[currentIndex] = arr[randomIndex];

        // Puts the other card in the shuffled cards spot
        arr[randomIndex] = temporary;

        // After a card is shuffle move on to the next one
        currentIndex -= 1;
    }

    // Return the shuffled deck
    return arr;
}

// Deals the cards to both players
function deal(deck1, deck2, deal) {
    // Goes to end of deck to start dealing
    var currentIndex = deal.length -1;

    // While there is still cards to deal, deal
    while (currentIndex >= 0) {
        // Gives one card to player1 and takes it away from the deal deck
        deck1.push(deal[currentIndex]);
        deal.pop();

        currentIndex--;

        // Gives one card to player2 and takes it away from the deal deck
        deck2.push(deal[currentIndex]);
        deal.pop();

        currentIndex--;
    }

    // Give the players their decks
    player1 = deck1;
    player2 = deck2;
}

// This will make the 2 players play the Game of war
function playWar(deck1, deck2) {
    // While they both have cards keep the game going
    while (deck1.length > 0 && deck2.length > 0) {
        // player1 beats player2
        if (cardPlayer1 > cardPlayer2) {
            // Give player2 card to player1
            deck1.push(deck2[0]);
            deck2.shift();
        }
        // player2 beats player1
        else if (player2 > player1) {
            // Give player1 card to player2
            deck2.push(deck1[0]);
            deck1.shift();
        }
        // Both have same card
        else {
            // To join 2 or more arrays use deck1.concat(deck2, deck3)
        }

    }
}

var dealDeck = shuffle(numbers);

deal(player1, player2, dealDeck);

console.log(player1);
console.log(player2);
