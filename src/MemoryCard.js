import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
	  		isFlipped: false 
		};
  	}

  	clickHandler() {
		this.setState({
	  		isFlipped: !this.state.isFlipped
		})
  	}

  	render() {
		let memoryCardInnerClass = "MemoryCardInner";
	
		if (this.state.isFlipped === true) {
			memoryCardInnerClass += " flipped";
		}

		return (
	  	<div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
			<div className={memoryCardInnerClass}>
		  		<div className="MemoryCardBack">
					<img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="card back"></img>
		  		</div>
		  		<div className="MemoryCardFront">
					∆
		  		</div>
			</div>
	  	</div>
	);
  }
}

export default MemoryCard;