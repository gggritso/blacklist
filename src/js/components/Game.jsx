import React, { Component, Fragment } from "react";

import { Card } from "./Card.jsx";
import { GameKeeper } from "../GameKeeper";

export class Game extends Component {
  constructor(props) {
    super(props);

    this.keeper = new GameKeeper(window.location.hash.slice(1));

    this.revealNextCard = this.revealNextCard.bind(this);
    this.setCurrentCard = this.setCurrentCard.bind(this);

    this.state = {
      url: this.keeper.URL,
      cards: this.keeper.cards,
      currentCard: this.keeper.cards[0]
    };
  }

  render() {
    return (
      <div className="game">
        <h1 className="game__name">Scootegaries</h1>
        <input
          type="text"
          value={this.state.url}
          readOnly
          className="game__url"
        />

        {this.state.cards.indexOf(this.state.currentCard) !==
          this.state.cards.length - 1 && (
          <button
            className="game__next-card-button"
            onClick={this.revealNextCard}
          >
            Reveal Next Card
          </button>
        )}

        <div className="game__container">
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
}
