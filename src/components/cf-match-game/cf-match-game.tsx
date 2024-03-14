import { Component, State, Prop, Event, EventEmitter, h } from '@stencil/core';
import { Card } from "../cards";

@Component({
  tag: 'cf-match-game',
  styleUrl: 'cf-match-game.scss',
  shadow: true,
})
export class CfMatchGame {
  // A list of all the unique types of cards that will show up in the game
  @Prop() readonly cards: Card[] = [];

  // The currently selected card
  @State() selected = "";

  // Emits once all cards have been matched. Event detail contains the number of
  // pairs of cards the user had to select to match each card.
  @Event() finished!: EventEmitter<number>;

  render() {
    return (
      <div class="match-game">
        {this.cards.map((card) => (
          <button
            class={{
              "match-game__card": true,
              "match-game__card--flipped": card.id == this.selected,
              "match-game__card--selected": card.id == this.selected,
            }}
            onClick={() => this.selected = card.id}>
            <div class="match-game__card-front">
              <img class="match-game__card-image" src={card.image}></img>
              <div>{card.name}</div>
            </div>
            <div class="match-game__card-back">
              <img class="match-game__brand-squiggle" src="assets/brand-squiggle.png"></img>
            </div>
          </button>
        ))}
      </div>
    );
  }
}
