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
         deck = response.cards;
        

        // for(let i=0; i < deck.length; i++){
        //     if(deck[i].value = "KING"){
        //         deck[i].value = 13}
        //     else if(deck[i].value = "QUEEN"){
        //         deck[i].value = 12}else
        //     if(deck[i].value = "JACK"){
        //         deck[i].value = 11}else
        //     if(deck[i].value = "ACE"){
        //         deck[i].value = 14
        //     }};
    
                       
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
    // removeMessages();
    flipCard(deck[currentCard]);
   
    if(deck[currentCard].value >= deck[currentCard-1].value){
        console.log(deck[currentCard].value);
        console.log(deck[currentCard-1].value);
       let parent = document.querySelector('#cardButtons');
       let winMessage = document.createElement('h2');
       winMessage.setAttribute('id', 'win');
       winMessage.textContent =  "Congratulations.  Pick Again.";
       parent.appendChild(winMessage);
    } 
       else{
        let parent = document.querySelector('#cardButtons');
       let loseMessage = document.createElement('h2');
       loseMessage.setAttribute('id', 'lose');
       loseMessage.textContent =  "Sorry, you lose!";
       parent.appendChild(loseMessage);   
       }

};

function compareLower(){
  
    flipCard(deck[currentCard]);
   
    if(deck[currentCard].value <= deck[currentCard-1].value){
       return "Congratulations.  Pick Again."}
       else{
           "Sorry, you lose!"
       }
};

function startGame(){
    removeCards();
    removeMessages();
    currentCard = 0;
    getDeck();
};

function removeCards(){
    document.querySelector('#cards').innerHTML = "";

};

function removeMessages(){
    document.querySelector('#win').innerHTML = "";
    document.querySelector('#lose').innerHTML = "";
};


// Need to load getCard when higher OR lower button is clicked
// Then compare new card to first card.  Two different functions? If correct button was pushed
// display message to click again.  If not, display message saying sorry
// the game is over.

// Need to clear cards when the new game button is clicked and load a card

// Need to create a tally of games won and lost and change the
// values accordingly.


window.addEventListener('load', init);
