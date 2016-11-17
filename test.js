// Organized Deck of Cards Array
var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

// Deck for players
var player1 = [];
var player2 = [];

// Set up war decks for both players
var warDeck1 = [];
var warDeck2 = [];

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
    console.log("The shuffled deck is " + arr + "\n");
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
    // Number of turns
    var turns = 0;

    // While they both have cards keep the game going
    while (deck1.length > 0 && deck2.length > 0) {
        // Selects the cards to be played
        var cardPlayer1 = deck1[0];
        var cardPlayer2 = deck2[0];

        // player1 beats player2
        if (cardPlayer1 > cardPlayer2) {
            // Give player2 card to player1
            deck1.push(cardPlayer2);
            deck2.shift();

            // Info about the round
            console.log("Player1 beat Player2 with a " + cardPlayer1 + " against a " + cardPlayer2 + "\n");

            // Add one turn to turn counter and log the turns
            turns++;
            console.log("This is the " + turns + " turn" + "\n");

            // Logs number of cards in both players decks
            console.log("Player1 Deck Size: " + deck1.length + "   Player2 Deck Size: " + deck2.length + "\n");
        }
        // player2 beats player1
        else if (cardPlayer2 > cardPlayer1) {
            // Give player1 card to player1
            deck2.push(cardPlayer1);
            deck1.shift();

            // Info about the round
            console.log("Player2 beat Player1 with a " + cardPlayer2 + " against a " + cardPlayer1 + "\n");

            // Add one turn to turn counter and log the turns
            turns++;
            console.log("This is the " + turns + " turn" + "\n");

            // Logs number of cards in both players decks
            console.log("Player1 Deck Size: " + deck1.length + "   Player2 Deck Size: " + deck2.length + "\n");
        }
        // Both have same card
        else {
            // To join 2 or more arrays use deck1.concat(deck2, deck3)
            while (cardPlayer1 == cardPlayer2) {
                // Put previous draw and 3 more cards to war pile and take it away from player deck
                warDeck1.push(cardPlayer1);
                deck1.shift();
                warDeck1.push(deck1[0]);
                deck1.shift();
                warDeck1.push(deck1[0]);
                deck1.shift();
                warDeck1.push(deck1[0]);
                deck1.shift();

                // Select the new card to battle
                cardPlayer1 = deck1[0];

                // Add that new card to war pile
                warDeck1.push(cardPlayer1);
                deck1.shift();


                // Repeat for player2
                // Put previous draw and 3 more cards to war pile and take it away from player deck
                warDeck2.push(cardPlayer2);
                deck2.shift();
                warDeck2.push(deck2[0]);
                deck2.shift();
                warDeck2.push(deck2[0]);
                deck2.shift();
                warDeck2.push(deck2[0]);
                deck2.shift();

                // Select the new card to battle
                cardPlayer2 = deck2[0];

                // Add that new card to war pile
                warDeck2.push(cardPlayer2);
                deck2.shift();

                // Decides the new winner
                // player1 beats player2
                if (cardPlayer1 > cardPlayer2) {
                    // Give player1 and player2 war deck to player1
                    deck1.concat(warDeck1, warDeck2);

                    // Clear both war decks
                    warDeck1 = [];
                    warDeck2 = [];

                    // Info about the round
                    console.log("Player1 beat Player2 with a " + cardPlayer1 + " against a " + cardPlayer2 + "\n");

                    // Add one turn to turn counter and log the turns
                    turns++;
                    console.log("This is the " + turns + " turn" + "\n");

                    // Logs number of cards in both players decks
                    console.log("Player1 Deck Size: " + deck1.length + "   Player2 Deck Size: " + deck2.length + "\n");
                }
                // player2 beats player1
                else if (cardPlayer2 > cardPlayer1) {
                    // Give player2 and player1 war deck to player2
                    deck2.concat(warDeck2, warDeck1);

                    // Clear both war decks
                    warDeck1 = [];
                    warDeck2 = [];

                    // Info about the round
                    console.log("Player2 beat Player1 with a " + cardPlayer2 + " against a " + cardPlayer1 + "\n");

                    // Add one turn to turn counter and log the turns
                    turns++;
                    console.log("This is the " + turns + " turn" + "\n");

                    // Logs number of cards in both players decks
                    console.log("Player1 Deck Size: " + deck1.length + "   Player2 Deck Size: " + deck2.length + "\n");
                }

                // Info about the round
                console.log("Player1 and Player2 still have the same card of " + cardPlayer1 + "\n");

                // Add one turn to turn counter and log the turns
                turns++;
                console.log("This is the " + turns + " turn" + "\n");

                // Logs number of cards in both players decks
                console.log("Player1 Deck Size: " + deck1.length + "   Player2 Deck Size: " + deck2.length + "\n");
            }
        }
    }
    // Decides the winner
    // If player1 wins
    if (deck1 > deck2) {
        console.log("Player 1 wins!!! It took " + turns + " turns" + "\n");
    }
    // If player2 wins
    else {
        console.log("Player 2 wins!!! It took " + turns + " turns" + "\n");
    }
}

var dealDeck = shuffle(numbers);

deal(player1, player2, dealDeck);

playWar(player1, player2);
