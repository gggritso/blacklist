import React, { Component, Fragment } from "react";

import { Card } from "./card.jsx";

import { CATEGORIES } from "../categories";
import { LETTERS } from "../letters";

const PICKED_LETTERS = [];
const PICKED_CATEGORIES = [];

export class Game extends Component {
  constructor(props) {
    super(props);

    this.generateCards = this.generateCards.bind(this);
    this.revealNextCard = this.revealNextCard.bind(this);
    this.setCurrentCard = this.setCurrentCard.bind(this);

    let cards = this.decodeGameURL(window.location.hash.slice(1));

    if (!cards) cards = this.generateCards(4);

    this.state = {
      url: window.location.origin + "/#" + this.encodeGameURL(cards),
      currentCard: cards[0],
      cards
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Scootegaries</h1>
        <input type="text" id="game-url" value={this.state.url} readOnly />

        {this.state.cards.indexOf(this.state.currentCard) !==
          this.state.cards.length - 1 && (
          <button className="reveal-card" onClick={this.revealNextCard}>
            Reveal Next Card
          </button>
        )}

        <div id="game-container">
          {this.state.cards.map((card, i) => (
            <Fragment key={card.letter}>
              <Card {...card} isVisible={card === this.state.currentCard} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }

  revealNextCard() {
    this.setCurrentCard(
      this.state.cards[this.state.cards.indexOf(this.state.currentCard) + 1]
    );
  }

  setCurrentCard(card) {
    this.setState({
      ...this.state,
      currentCard: card
    });
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

    for (let i = 0; i < 12; i += 1) {
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

      rets.push(currentCard.letter + enc.join("+"));
    }

    return rets.join("|");
  }

  decodeGameURL(url) {
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

      cards.push({ letter, categories, isVisible: false });
    }

    return cards;
  }
}
