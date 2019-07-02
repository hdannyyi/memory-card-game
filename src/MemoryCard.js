import React from "react";
import "./MemoryCard.css";

class MemoryCard extends React.Component {
    render() {
        let memoryCardInnerClass = "MemoryCardInner";

        if (this.props.isFlipped === true) {
            memoryCardInnerClass += " flipped";
        }

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img
                            src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"
                            alt="card back"
                        />
                    </div>
                    <div className="MemoryCardFront">{this.props.symbol}</div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;
