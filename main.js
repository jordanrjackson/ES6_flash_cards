document.addEventListener('DOMContentLoaded', () => {
    // Add new card button
    let addCard = document.querySelector('.add-card');
    let overlay = document.querySelector('.overlay');
    // close menu button
    let closeMenu = document.querySelector('.close-menu');
    // New Card Form
    let frontCard = document.querySelector('#front-card');
    let backCard = document.querySelector('.new-card-form');
    let cardForm = document.querySelector('.new-card-form')

    addCard.addEventListener('click', )
    
    addCard.addEventListener('click', () => {
        /overlay.style.display = "flex";
        closeMenu.addEventListener('click', () => {
            overlay.style.display = 'none'
        }
    });

        cardForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("it works!");
        })
});

    function displayCards(){
        cardContainer.innerHTML = "";
        cardArray.forEach((card) => {
            let listItem = document.createElement('li');
            let cardFrontTitle = document.createElement('p');
            cardFrontTitle.innerHTML = card.front
            listItem.appendChild(cardFrontTitle);
            let cardBackAnswer = document.createElement('p');
            cardBackAnswer.innerHTML = card.back;
            cardContainer.appendChild(listItem);
            
            cardContainer.appendChild(listItem);
        });
    }

String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
    };

function Card(question, answer){
  this.question_value = question;
  this.answer_value = answer;

  this.display = function(side){
      if( side === 0 ){
          return this.question_value;
      }else{
          return this.answer_value;
      }
  };
}

var cards_handle = {
  cards: [],
  card_ind: 0,
  card_button: document.getElementById("card_button"),
  card_text: document.getElementById("card_text"),
  card_position: document.getElementById("position_index"),
  card_side: 0,

  cardAdd: function(answer, question){
      this.cards.push( new Card(answer, question) );
  },
  card_update: function(){
      var cur_card = this.cards [ this.cardInd ];
      this.cardText.innerHTML = curCard.display( this.card_side );
      this.cardTPosition.innerHTML = (this.card_ind+1)+"/"+this.cards.length;
  },
  card_flip: function(){
      this.cardSide = (this.cardSide + 1) % 2;
  },
  card_move: function(moveBy){
        this.cardInd += moveBy;
        if( this.cardInd < 0 ){
        this.cardInd += this.cards.length;
        }
        this.cardInd = this.card_ind % this.cards.length;

        this.card_side = 0;
        this.cardUpdate();
  },
  card_tap: function(){
      this.cardFlip();
      this.cardUpdate();
  }
};

cards_handle.cardAdd("Let","Variable Scoped to Block");
cards_handle.cardAdd("Constant","Fixed Variable");
cards_handle.cardAdd("=>","Arrow Function");
cards_handle.cardAdd("for...of Loop","Iterates Through List of Elements");
cards_handle.cardAdd("...","Spread Syntax");
cards_handle.cardAdd("Set","Stores Unique Values of Any Type");
cards_handle.cardAdd("This","Lots of Things");
cards_handle.cardUpdate();

var user_enter = function(){
  var new_question = document.getElementById("new_question"),
      new_answer = document.getElementById("new_answer");

  if( new_question.value.isEmpty() || new_answer.value.isEmpty() )
      return;

  cards_handle.cardAdd(new_question.value,new_answer.value);
  new_question.value="";
  new_answer.value="";
  cards_handle.cardUpdate();
}

cards_handle.card_button.addEventListener("click", function(){ cards_handle.cardTap();} );