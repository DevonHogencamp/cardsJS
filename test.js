var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
var player1 = [];
var player2 = [];

function shuffle(arr) {
    var currentIndex = arr.length - 1;

    while (currentIndex >= 0) {
        var randomIndex = Math.floor(Math.random() * currentIndex);

        var temporary = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporary;

        currentIndex -= 1;
    }

    return arr;
}

function deal(deck1, deck2, deal) {
    var currentIndex = deal.length -1;

    while (currentIndex >= 0) {
        deck1.push(deal[currentIndex]);
        deal.pop();

        currentIndex--;

        deck2.push(deal[currentIndex]);
        deal.pop();

        currentIndex--;
    }

    player1 = deck1;
    player2 = deck2;
}

function playWar(deck1, deck2) {
    while (deck1.length > 0 && deck2.length > 0) {
        var cardPlayer1 = deck1[0];
        var cardPlayer2 = deck2[0];

        // player1 beats player2
        if (cardPlayer1 > cardPlayer2) {
            // Give player2 card to player1
            deck1.push(deck2[0]);
            deck2.shift();
        }
        // player2 beats player1
        else if (player2 > player1) {
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
