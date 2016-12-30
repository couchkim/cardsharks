// Display a card when the page first loads, and 
// give users a "higher" and "lower" button. 
// When they click, a new card should be chosen and 
// displayed along with the player's guess. If the player 
// was correct they should be able to guess again. 
// If they were wrong then they should lose the round.
// The same card should not be able to come up more 
// than once in a single match.

// Need to get first card and load all three buttons on page load

function init(){
    loadCardNewDeck();

let getCardHigher = document.querySelector("#higher");
getCardHigher.addEventListener('click', compareHigher);

let getCardLower = document.querySelector("#lower");
getCardLower.addEventListener('click', compareLower);

let newGame = document.querySelector("#newGame");
newGame.addEventListener('click', startGame);

}

function loadCardNewDeck(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://deckofcardsapi.com/api/deck/"new"/draw/?count=5');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);

        
            let firstCard = response[0].cards;        
        
        console.log(firstCard.value);

        showCard();

    });
request.send();
};

function showCard(){
    let card = document.createElement('li');

    let parent = document.querySelector('#cards');
    parent.appendChild(card);

    let cardImage = document.createElement('p');
    cardImage.textContent = card[i].image;
    card.appendChild(cardImage);

};

function compareHigher(){
    if(card[i+1] >= card[i]){
        card[i] = card[i+1];
        
        showCard();
    }
};

function compareLower(){

};

function startGame(){

};



// Need to load getCard when higher OR lower button is clicked
// Then compare new card to first card.  Two different functions? If correct button was pushed
// display message to click again.  If not, display message saying sorry
// the game is over.

// Need to clear cards when the new game button is clicked and load a card

// Need to create a tally of games won and lost and change the
// values accordingly.


window.addEventListener('load', init);
