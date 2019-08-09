var CARDS_PER_ROUND = 4,
  PICKED = [];

function encodeGameURL(cards) {
  var rets = [],
    enc = [];

  var currentCard;
  for (var y = 0; y < cards.length; y += 1) {
    enc = [];
    currentCard = cards[y];

    for (var i = 0; i < currentCard[1].length; i += 1) {
      enc.push(CATEGORIES.indexOf(currentCard[1][i]).toString(16));
    }

    rets.push(currentCard[0] + enc.join("+"));
  }

  return rets.join("|");
}

function decodeGameURL(url) {
  var cards = [],
    letter = "";

  if (url == "#" || url == "") {
    return null;
  }

  var hashes = url.split("|");

  for (var y = 0; y < hashes.length; y += 1) {
    var letter = hashes[y].slice(0, 1),
      categoryNumbers = hashes[y].slice(1).split("+"),
      categories = [];

    for (var i = 0; i < categoryNumbers.length; i += 1) {
      var categoryIndex = parseInt(categoryNumbers[i], 16);
      categories.push(CATEGORIES[categoryIndex]);
    }

    var card = [letter, categories];
    cards.push(card);
  }

  return cards;
}

function appendCard(cardIndex, card) {
  var s = "";
  s +=
    '<div class="card" data-card-id="' +
    cardIndex +
    '" style="display: none;">';
  s += '<span class="letter">' + card[0] + "</span>";
  s += "<ol>";

  for (var i = 0; i < card[1].length; i += 1) {
    s += "<li>" + card[1][i] + "</li>";
  }

  s += "</ol></div>";
  s +=
    '<button data-card-id="' +
    cardIndex +
    '" class="reveal-card">Reveal Card</button><br>';

  $("#game-container").append(s);
}

function generateNewCard() {
  var card = [],
    r = Math.floor(Math.random() * LETTERS.length),
    letter = LETTERS[r],
    category = "";

  card[0] = letter;
  card[1] = [];

  for (var i = 0; i < 12; i += 1) {
    r = Math.floor(Math.random() * CATEGORIES.length);
    category = CATEGORIES[r];
    while (PICKED.indexOf(category) != -1) {
      r = Math.floor(Math.random() * CATEGORIES.length);
      category = CATEGORIES[r];
    }
    card[1].push(category);
    PICKED.push(category);
  }

  return card;
}

function generateNewGame() {
  $("#game-container").html("");
  window.location.hash = "";

  var cards = [];

  for (var i = 0; i < CARDS_PER_ROUND; i += 1) {
    card = generateNewCard();
    cards.push(card);
    appendCard(i, card);
  }

  var gameURL = window.location.origin + "/#" + encodeGameURL(cards);
  $("#game-url").val(gameURL);
}

$(function() {
  // Is this already a game? Read hash and check!
  var cards = decodeGameURL(window.location.hash.slice(1));
  if (!cards) {
    generateNewGame();
  } else {
    for (var i = 0; i < cards.length; i += 1) {
      appendCard(i, cards[i]);
    }
  }

  // Event Listeners
  $("body").on("click", ".reveal-card", function(event) {
    var cardID = $(this).data("card-id");
    $(".card[data-card-id=" + cardID + "]").show();
    $(this).hide();
  });

  $("body").on("click", ".new-game", function() {
    generateNewGame();
  });
});
