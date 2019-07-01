import React from "react";
import "./App.css";
import MemoryCard from "./MemoryCard.js";

function generateDeck() {
    const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
    const deck = [];
    for (let i = 0; i < 16; i++) {
        generateDeck.push({
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
    render() {
        const cardsJSX = this.state.deck.map((card, index) => {
            return <MemoryCard />;
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
