import React, { Component, Fragment } from "react";

import { Card } from "./Card.jsx";
import { GameBox } from "../GameBox";
import { Timer } from "../Timer";

const ROUND_COUNT = 4;
const ROUND_DURATION = 3;

export class Game extends Component {
  constructor(props) {
    super(props);

    this.updateCountdown = this.updateCountdown.bind(this);

    this.nextRound = this.nextRound.bind(this);
    this.finishRound = this.finishRound.bind(this);

    const encodedGame = window.location.hash.slice(1);

    this.box = new GameBox(encodedGame);

    this.timer = new Timer();
    this.timer.onTick(this.updateCountdown);
    this.timer.onFinish(this.finishRound);

    this.state = {
      url: this.box.URL,
      cards: this.box.cards,
      round: null,
      youAreGameMaster: !encodedGame,
      gameIsOn: false
    };
  }

  render() {
    const currentCard = this.state.cards[this.state.round - 1];
    const isLastRound = this.state.round === ROUND_COUNT;
    const isFirstRound = !this.state.round;

    return (
      <div className="game">
        <h1 className="game__round-and-button">
          {this.state.round ? `Round ${this.state.round}` : "Get ready!"}

          {this.state.gameIsOn && (
            <span className="game__countdown">{this.state.countdown}</span>
          )}

          {!isLastRound && !this.state.gameIsOn && (
            <button
              className="game__next-round-button"
              onClick={this.nextRound}
              disabled={this.state.gameIsOn}
            >
              {isFirstRound ? "Start" : "Next"} →
            </button>
          )}
        </h1>

        <div className="game__url">
          <input
            type="text"
            value={this.state.url}
            readOnly
            className="game__url-input"
          />
        </div>

        {currentCard && this.state.gameIsOn && (
          <span className="game__letter">{currentCard.letter}</span>
        )}

        <div className="game__container">
          {this.state.cards.map((card, i) => (
            <Fragment key={card.letter}>
              <Card
                {...card}
                isActive={card === currentCard && this.state.gameIsOn}
                isLocked={card === currentCard && !this.state.gameIsOn}
              />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }

  updateCountdown() {
    this.setState({
      countdown: this.timer.getTime()
    });
  }

  nextRound() {
    const nextRound = this.state.round ? this.state.round + 1 : 1;

    this.timer.start(ROUND_DURATION);

    this.setState({
      round: nextRound,
      countdown: this.timer.getTime(),
      gameIsOn: true
    });
  }

  finishRound() {
    this.timer.reset();

    this.setState({
      gameIsOn: false
    });
  }
}
