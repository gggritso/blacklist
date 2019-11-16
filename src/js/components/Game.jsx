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
    this.copyURLToClipboard = this.copyURLToClipboard.bind(this);

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
      <div className="p-8 font-mono">
        <h1 className="flex flex-grow-0 items-center my-16 text-20">
          <span className="mr-auto">
            Blacklist {this.state.round && `Round ${this.state.round}`}
          </span>

          {this.state.gameIsOn && (
            <span className="fixed top-0 right-0 p-2 bg-white text-16">
              {this.state.countdown}
            </span>
          )}

          {!isLastRound && !this.state.gameIsOn && (
            <button
              onClick={this.nextRound}
              disabled={this.state.gameIsOn}
              className="p-2 bg-black text-white"
            >
              {isFirstRound ? "Start" : "Next"} →
            </button>
          )}
        </h1>

        <div className="w-full flex py-8">
          <input
            type="text"
            value={this.state.url}
            readOnly
            className="block flex-1 border"
          />
          <button onClick={this.copyURLToClipboard} className="ml-8">
            Copy URL
          </button>
        </div>

        {currentCard && this.state.gameIsOn && (
          <span className="block w-full text-30 text-white bg-black p-16 my-8 text-center">
            {currentCard.letter}
          </span>
        )}

        <div>
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

  copyURLToClipboard() {
    navigator.clipboard.writeText(this.state.url).then(() => {
      alert("Copied!");
    });
  }

  updateCountdown() {
    this.setState({
      countdown: this.timer.getTime()
    });
  }

  nextRound() {
    const nextRound = this.state.round ? this.state.round + 1 : 1;

    this.setState({
      round: nextRound,
      gameIsOn: true
    });

    this.timer.start(ROUND_DURATION);
  }

  finishRound() {
    this.timer.reset();

    this.setState({
      gameIsOn: false
    });
  }
}
