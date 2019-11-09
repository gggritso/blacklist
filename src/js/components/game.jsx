import React, { Component, Fragment } from "react";

import { Card } from "./card.jsx";
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
}
