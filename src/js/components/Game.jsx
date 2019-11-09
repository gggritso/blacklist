import React, { Component, Fragment } from "react";

import { Card } from "./Card.jsx";
import { GameBox } from "../GameBox";
import { Timer } from "../Timer";

const ROUND_COUNT = 4;
const ROUND_DURATION = 0.1;

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

    return (
      <div className="game">
        <h1 className="game__name">
          {this.state.youAreGameMaster ? "[Master] " : " "}
          Scootegaries
        </h1>
        <h2 className="game__countdown">{this.state.countdown}</h2>

        <input
          type="text"
          value={this.state.url}
          readOnly
          className="game__url"
        />

        {!isLastRound && (
          <button
            className="game__next-round-button"
            onClick={this.nextRound}
            disabled={this.state.gameIsOn}
          >
            Next Round
          </button>
        )}

        {currentCard && this.state.gameIsOn && <h3>{currentCard.letter}</h3>}

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
