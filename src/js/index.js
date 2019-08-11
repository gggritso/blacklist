import { CATEGORIES } from "./categories";
import { LETTERS } from "./letters";

const CARDS_PER_ROUND = 4,
  PICKED = [];

$(() => {
  // Is this already a game? Read hash and check!
  const cards = decodeGameURL(window.location.hash.slice(1));
  if (!cards) {
    generateNewGame();
  } else {
    for (let i = 0; i < cards.length; i += 1) {
      appendCard(i, cards[i]);
    }
  }

  // Event Listeners
  $("body").on("click", ".reveal-card", event => {
    const cardID = $(event.target).data("card-id");
    $(".card[data-card-id=" + cardID + "]").show();
    $(event.target).hide();
  });

  $("body").on("click", ".new-game", () => {
    generateNewGame();
  });
});

const encodeGameURL = cards => {
  const rets = [],
    enc = [];

  let currentCard;
  for (let y = 0; y < cards.length; y += 1) {
    enc = [];
    currentCard = cards[y];

    for (let i = 0; i < currentCard[1].length; i += 1) {
      enc.push(CATEGORIES.indexOf(currentCard[1][i]).toString(16)); //eslint-disable-line no-magic-numbers
    }

    rets.push(currentCard[0] + enc.join("+"));
  }

  return rets.join("|");
};

const decodeGameURL = url => {
  const cards = [];

  if (url === "#" || url === "") {
    return null;
  }

  const hashes = url.split("|");

  for (let y = 0; y < hashes.length; y += 1) {
    const letter = hashes[y].slice(0, 1),
      categoryNumbers = hashes[y].slice(1).split("+"),
      categories = [];

    for (let i = 0; i < categoryNumbers.length; i += 1) {
      const categoryIndex = parseInt(categoryNumbers[i], 16);
      categories.push(CATEGORIES[categoryIndex]);
    }

    cards.push([letter, categories]);
  }

  return cards;
};

const appendCard = (cardIndex, card) => {
  let s = "";
  s += '<div class="card" data-card-id="' + cardIndex + '" style="display: none;">';
  s += '<span class="letter">' + card[0] + "</span>";
  s += "<ol>";

  for (let i = 0; i < card[1].length; i += 1) {
    s += "<li>" + card[1][i] + "</li>";
  }

  s += "</ol></div>";
  s += '<button data-card-id="' + cardIndex + '" class="reveal-card">Reveal Card</button><br>';

  $("#game-container").append(s);
};

const generateNewCard = () => {
  const card = [],
    r = Math.floor(Math.random() * LETTERS.length),
    letter = LETTERS[r];

  let category = "";

  card[0] = letter;
  card[1] = [];

  for (let i = 0; i < 12; i += 1) {
    r = Math.floor(Math.random() * CATEGORIES.length);
    category = CATEGORIES[r];
    while (PICKED.indexOf(category) !== -1) {
      r = Math.floor(Math.random() * CATEGORIES.length);
      category = CATEGORIES[r];
    }
    card[1].push(category);
    PICKED.push(category);
  }

  return card;
};

const generateNewGame = () => {
  $("#game-container").html("");
  window.location.hash = "";

  const cards = [];

  for (let i = 0; i < CARDS_PER_ROUND; i += 1) {
    const card = generateNewCard();
    cards.push(card);
    appendCard(i, card);
  }

  const gameURL = window.location.origin + "/#" + encodeGameURL(cards);
  $("#game-url").val(gameURL);
};