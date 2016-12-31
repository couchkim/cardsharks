// Display a card when the page first loads, and 
// give users a "higher" and "lower" button. 
// When they click, a new card should be chosen and 
// displayed along with the player's guess. If the player 
// was correct they should be able to guess again. 
// If they were wrong then they should lose the round.
// The same card should not be able to come up more 
// than once in a single match.

// Need to get first card and load all three buttons on page load

let deck = [];
let currentCard = 0;

function init(){
   getDeck();

let getCardHigher = document.querySelector("#higher");
getCardHigher.addEventListener('click', compareHigher);

let getCardLower = document.querySelector("#lower");
getCardLower.addEventListener('click', compareLower);

let newGame = document.querySelector("#newGame");
newGame.addEventListener('click', startGame);

}

function getDeck(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://deckofcardsapi.com/api/deck/new/draw/?count=5');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        // for(let i=0; i < response.cards.length; i++){
            deck = response.cards;
   
             flipCard(deck[currentCard]);
    
    });
request.send();
};

function flipCard(newCard){
    let card = document.createElement('li');

    let parent = document.querySelector('#cards');
    parent.appendChild(card);

    let cardImage = document.createElement('img');
    cardImage.src = newCard.image;
    card.appendChild(cardImage);

    currentCard = currentCard + 1;

};

function compareHigher(){
    flipCard(deck[currentCard]);
   
    if(deck[currentCard].value > deck[currentCard-1].value){
       return "Congratulations.  Pick Again."}
       else{
           return "Sorry, you lose!";   
       }

};

function compareLower(){
    flipCard(deck[currentCard]);
   
    if(deck[currentCard].value < deck[currentCard-1].value){
       return "Congratulations.  Pick Again."}
       else{
           "Sorry, you lose!"
       }
};

function startGame(){
    removeAll();
    currentCard = 0;
    getDeck();
};

function removeAll(){
    document.querySelector('#cards').innerHTML = "";
}


// Need to load getCard when higher OR lower button is clicked
// Then compare new card to first card.  Two different functions? If correct button was pushed
// display message to click again.  If not, display message saying sorry
// the game is over.

// Need to clear cards when the new game button is clicked and load a card

// Need to create a tally of games won and lost and change the
// values accordingly.


window.addEventListener('load', init);
