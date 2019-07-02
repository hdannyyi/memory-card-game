import React from "react";
import "./App.css";
import MemoryCard from "./MemoryCard.js";

function generateDeck() {
    const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
    const deck = [];
    for (let i = 0; i < 16; i++) {
        deck.push({
            isFlipped: false,
            symbol: symbols[i % 8]
        });
    }
    shuffle(deck);
    return deck;
}

function shuffle(deck) {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            deck: generateDeck(),
            pickedCards: []
        };
    }

    pickCard(cardIndex) {
        if (this.state.deck[cardIndex] === "isFlipped") {
            return;
        }

        let cardToFlip = { ...this.state.deck[cardIndex], isFlipped: true };

        let newPickedCards = this.state.pickedCards.concat(cardIndex);

        let newDeck = this.state.deck.map((card, index) => {
            if (cardIndex === index) {
                return cardToFlip;
            }
            return card;
        });

        if (newPickedCards.length === 2) {
            let card1Index = [0];
            let card2Index = [1];
            let card1 = newDeck[card1Index];
            let card2 = newDeck[card2Index];
            newPickedCards = [];
            if (card1.symbol !== card2.symbol) {
                setTimeout(() => {
                    this.unflipCards(card1Index, card2Index);
                }, 1000);
            }
        }

        this.setState({ deck: newDeck, pickedCards: newPickedCards });
    }

    unflipCards(card1Index, card2Index) {
        let newDeck = this.state.deck.map(card => {
            return { ...card };
        });

        newDeck[card1Index].isFlipped = false;
        newDeck[card2Index].isFlipped = false;

        this.setState({ deck: newDeck });
    }

    render() {
        const cardsJSX = this.state.deck.map((card, index) => {
            return (
                <MemoryCard
                    symbol={card.symbol}
                    isFlipped={card.isFlipped}
                    key={index}
                    pickCard={this.pickCard.bind(this, index)}
                />
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Memory Game</h1>
                    <h3>Match cards to win</h3>
                </header>
                <div className="card-row">{cardsJSX.slice(0, 4)}</div>
                <div className="card-row">{cardsJSX.slice(4, 8)}</div>
                <div className="card-row">{cardsJSX.slice(8, 12)}</div>
                <div className="card-row">{cardsJSX.slice(12, 16)}</div>
            </div>
        );
    }
}

export default App;
