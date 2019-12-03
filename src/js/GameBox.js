import CATEGORIES from "./data/CATEGORIES";
import LETTERS from "./data/LETTERS";

const PICKED_LETTERS = [];
const PICKED_CATEGORIES = [];

const CARDS_PER_GAME = 4;
const LETTERS_PER_CARD = 12;

export class GameBox {
  constructor(encodedCards) {
    if (encodedCards) {
      this.cards = this.decodeGameURL(encodedCards);
    } else {
      this.cards = this.generateCards(CARDS_PER_GAME);
    }

    this.URL = window.location.origin + "/#" + this.encodeGameURL(this.cards);
  }

  generateCards(count) {
    const cards = [];

    for (let i = 0; i < count; i += 1) {
      cards.push(this.generateCard());
    }

    return cards;
  }

  generateCard() {
    const card = {
      letter: null,
      categories: [],
      isVisible: false
    };

    let r = Math.floor(Math.random() * LETTERS.length);
    let letter = LETTERS[r];

    while (PICKED_LETTERS.indexOf(letter) !== -1) {
      r = Math.floor(Math.random() * LETTERS.length);
      letter = LETTERS[r];
    }

    PICKED_LETTERS.push(letter);

    let category = "";

    card.letter = letter;

    for (let i = 0; i < LETTERS_PER_CARD; i += 1) {
      r = Math.floor(Math.random() * CATEGORIES.length);
      category = CATEGORIES[r];
      while (PICKED_CATEGORIES.indexOf(category) !== -1) {
        r = Math.floor(Math.random() * CATEGORIES.length);
        category = CATEGORIES[r];
      }
      card.categories.push(category);
      PICKED_CATEGORIES.push(category);
    }

    return card;
  }

  encodeGameURL(cards) {
    let rets = [],
      enc = [];

    let currentCard;
    for (let y = 0; y < cards.length; y += 1) {
      enc = [];
      currentCard = cards[y];

      for (let i = 0; i < currentCard.categories.length; i += 1) {
        enc.push(CATEGORIES.indexOf(currentCard.categories[i]).toString(16)); //eslint-disable-line no-magic-numbers
      }

      rets.push(currentCard.letter + enc.join("-"));
    }

    return rets.join("_");
  }

  decodeGameURL(url) {
    const cards = [];

    if (url === "#" || url === "") {
      return null;
    }

    const hashes = url.split("_");

    for (let y = 0; y < hashes.length; y += 1) {
      const letter = hashes[y].slice(0, 1),
        categoryNumbers = hashes[y].slice(1).split("-"),
        categories = [];

      for (let i = 0; i < categoryNumbers.length; i += 1) {
        const categoryIndex = parseInt(categoryNumbers[i], 16);
        categories.push(CATEGORIES[categoryIndex]);
      }

      cards.push({ letter, categories, isVisible: false });
    }

    return cards;
  }
}
