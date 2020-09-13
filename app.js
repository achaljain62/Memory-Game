document.addEventListener("DOMContentLoaded", () => {
  //card array
  const cardsArray = [
    {
      name: "joker",
      img: "images/joker.png",
    },
    {
      name: "joker",
      img: "images/joker.png",
    },
    {
      name: "king",
      img: "images/king.png",
    },
    {
      name: "king",
      img: "images/king.png",
    },
    {
      name: "queen",
      img: "images/queen.png",
    },
    {
      name: "queen",
      img: "images/queen.png",
    },
    {
      name: "jack",
      img: "images/jack.png",
    },
    {
      name: "jack",
      img: "images/jack.png",
    },
    {
      name: "acered",
      img: "images/acered.png",
    },
    {
      name: "acered",
      img: "images/acered.png",
    },
    {
      name: "aceblack",
      img: "images/aceblack.png",
    },
    {
      name: "aceblack",
      img: "images/aceblack.png",
    },
  ];

  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  var cardChosen = [];
  var cardChosenId = [];
  var cardWon = [];
  var attempts = 0;
  const result = document.querySelector("#result");
  const tries = document.querySelector("#tries");

  //create board
  function createboard() {
    for (let i = 0; i < cardsArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/unflipped.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var allCards = document.querySelectorAll("img");
    const firstCardId = cardChosenId[0];
    const secondCardId = cardChosenId[1];
    let one = allCards[firstCardId];
    let two = allCards[secondCardId];
    if (cardChosen[0] === cardChosen[1] && cardChosenId[0] != cardChosenId[1]) {
      alert("You got a match");
      one.setAttribute("src", "images/black.png");
      two.setAttribute("src", "images/black.png");
      one.removeEventListener("click", flipcard);
      two.removeEventListener("click", flipcard);
      one.setAttribute("style", "cursor:auto");
      two.setAttribute("style", "cursor:auto");
      cardWon.push(cardChosen);
    } else if (cardChosenId[0] === cardChosenId[1]) {
      alert("Choose a different card");
      one.setAttribute("src", "images/unflipped.png");
    } else {
      alert("Sorry, better luck next time");
      one.setAttribute("src", "images/unflipped.png");
      two.setAttribute("src", "images/unflipped.png");
    }

    cardChosen = [];
    cardChosenId = [];
    tries.textContent = attempts;
    result.textContent = cardWon.length;
    if (cardWon.length === cardsArray.length / 2) {
      result.textContent = "Congraturlations! You have won";
    }
  }

  //flip the card
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardChosen.push(cardsArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardsArray[cardId].img);
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 100);
      attempts++;
    }
  }

  createboard();
});
