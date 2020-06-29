//creating cards for the deck
class Card{
  constructor(value, suite, link){
    this.value = value;
    this.suite = suite;
    this.link = link;
  }
}

//deck array that holds all cards
var deck = [
  new Card(1, "Hearts", "images/AH.jpg"),
  new Card(2, "Hearts", "images/2H.jpg"),
  new Card(3, "Hearts", "images/3H.jpg"),
  new Card(4, "Hearts", "images/4H.jpg"),
  new Card(5, "Hearts", "images/5H.jpg"),
  new Card(6, "Hearts", "images/6H.jpg"),
  new Card(7, "Hearts", "images/7H.jpg"),
  new Card(8, "Hearts", "images/8H.jpg"),
  new Card(9, "Hearts", "images/9H.jpg"),
  new Card(10, "Hearts", "images/10H.jpg"),
  new Card(10, "Hearts", "images/JH.jpg"),
  new Card(10, "Hearts", "images/QH.jpg"),
  new Card(10, "Hearts", "images/KH.jpg"),
  
  new Card(1, "Spades", "images/AS.jpg"),
  new Card(2, "Spades", "images/2S.jpg"),
  new Card(3, "Spades", "images/3S.jpg"),
  new Card(4, "Spades", "images/4S.jpg"),
  new Card(5, "Spades", "images/5S.jpg"),
  new Card(6, "Spades", "images/6S.jpg"),
  new Card(7, "Spades", "images/7S.jpg"),
  new Card(8, "Spades", "images/8S.jpg"),
  new Card(9, "Spades", "images/9S.jpg"),
  new Card(10, "Spades", "images/10S.jpg"),
  new Card(10, "Spades", "images/JS.jpg"),
  new Card(10, "Spades", "images/QS.jpg"),
  new Card(10, "Spades", "images/KS.jpg"),

  new Card(1, "Clubs", "images/AC.jpg"),
  new Card(2, "Clubs", "images/2C.jpg"),
  new Card(3, "Clubs", "images/3C.jpg"),
  new Card(4, "Clubs", "images/4C.jpg"),
  new Card(5, "Clubs", "images/5C.jpg"),
  new Card(6, "Clubs", "images/6C.jpg"),
  new Card(7, "Clubs", "images/7C.jpg"),
  new Card(8, "Clubs", "images/8C.jpg"),
  new Card(9, "Clubs", "images/9C.jpg"),
  new Card(10, "Clubs", "images/10C.jpg"),
  new Card(10, "Clubs", "images/JC.jpg"),
  new Card(10, "Clubs", "images/QC.jpg"),
  new Card(10, "Clubs", "images/KC.jpg"),

  new Card(1, "Diamonds", "images/AD.jpg"),
  new Card(2, "Diamonds", "images/2D.jpg"),
  new Card(3, "Diamonds", "images/3D.jpg"),
  new Card(4, "Diamonds", "images/4D.jpg"),
  new Card(5, "Diamonds", "images/5D.jpg"),
  new Card(6, "Diamonds", "images/6D.jpg"),
  new Card(7, "Diamonds", "images/7D.jpg"),
  new Card(8, "Diamonds", "images/8D.jpg"),
  new Card(9, "Diamonds", "images/9D.jpg"),
  new Card(10, "Diamonds", "images/10D.jpg"),
  new Card(10, "Diamonds", "images/JD.jpg"),
  new Card(10, "Diamonds", "images/QD.jpg"),
  new Card(10, "Diamonds", "images/KD.jpg"),
];

var handDealer = [];
var pointsDealer = [];
var handValueDealer = 0;

var handPlayer = [];
var pointsPlayer = [];
var handValuePlayer = 0;

var cardsDealer = 0;
var cardsDealt = false;
var gameOver = false;

//Functions

function shuffle(array){
  for (var i = array.length -1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return this;
}

function displayCardDealer(Card){
  if (cardsDealer == 0){
    var cardImageDealer = document.createElement("img");
    cardImageDealer.src = "images/Green_back.jpg";

    var displayHandDealer = document.getElementById("handDealer");
    displayHandDealer.appendChild(cardImageDealer);
  }
  else{
    var cardImageDealer = document.createElement("img");
    cardImageDealer.src = Card.link;

    var displayHandDealer = document.getElementById("handDealer");
    displayHandDealer.appendChild(cardImageDealer);
  }
}

function displayCardPlayer(Card){
  var cardImagePlayer = document.createElement("img");
  cardImagePlayer.src = Card.link;
  var displayHandPlayer = document.getElementById("handPlayer");
  displayHandPlayer.appendChild(cardImagePlayer);
}

function drawCardDealer(){
  shuffle(deck);
  var dealtCardDealer = deck.pop();
  handDealer.push(dealtCardDealer);
  handValueDealer += dealtCardDealer.value;
  displayCardDealer(dealtCardDealer);
  cardsDealer += 1;
}

function drawCardPlayer(){
  shuffle(deck);
  var dealtCardPlayer = deck.pop();
  handPlayer.push(dealtCardPlayer);
  handValuePlayer += dealtCardPlayer.value;
  displayCardPlayer(dealtCardPlayer);
}

function updatePointsDealer(points){
  document.getElementById("pointsDealer").innerHTML = points
}

function updatePointsPlayer(points){
  document.getElementById("pointsPlayer").innerHTML = points;
}

function gameOver(value){
  if (gameOver == true){

  }
  else{
    
  }
}

document.getElementById("btnDeal").addEventListener("click", function(){
  //deal button logic
  if (cardsDealt == false){
    drawCardDealer();
    drawCardDealer();
    drawCardPlayer();
    drawCardPlayer();
  }
  else{
    pass;
  }

  cardsDealt = true;
});

document.getElementById("btnHit").addEventListener("click", function(){
  //hit botton logic
  if (cardsDealt == true && gameOver == false){
    drawCardPlayer();
    if (handValuePlayer > 21){
      updatePointsPlayer("Bust. You Lose.");
      gameOver = True;
      updatePointsDealer(handValueDealer);
    }
  }
});

document.getElementById("btnStand").addEventListener("click", function(){
  //write stand logic here
  if (cardsDealt == true && gameOver == false){
    updatePointsDealer(handValueDealer);
    if (handValuePlayer > 21){
      updatePointsPlayer("Bust. You Lose.");
    }
    else if (handValuePlayer > handValueDealer){
      updatePointsPlayer("You Win.");
    }
    else{
      updatePointsPlayer("Dealer Wins. You Lose.");
    }
  }
})


