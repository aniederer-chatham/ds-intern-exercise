import { Component, Host, State, h } from '@stencil/core';
import cardTemplates from "../cards";
import { shuffle } from "../../utility"

// You shouldn't edit this file or the corresponding scss file to answer this question.
// We're only looking at the component in `src/components/cf-match-game/cf-match-game.tsx`

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  @State() lastGame = 0;
  @State() cards = shuffle(cardTemplates.flatMap(card => [
    { id: card.name + "1", ...card },
    { id: card.name + "2", ...card }
  ]));

  render() {
    return (
      <Host>
        <header>
          <h1>Chatham Design Systems Interview - App Exercise</h1>
        </header>
        <main>
          <h2>{this.lastGame ? `Finished in ${this.lastGame} moves!` : 'Design Systems Team Match Game!'}</h2>
          <cf-match-game
            class="match-game"
            cards={this.cards}
            onFinished={({ detail }) => {
              this.lastGame = detail
            }}>
          </cf-match-game>
        </main>
      </Host>
    );
  }
}
