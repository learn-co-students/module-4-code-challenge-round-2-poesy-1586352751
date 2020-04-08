import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    const poemCards = this.props.poemsArray.map(poemPOJO => 
      <Poem
        key={poemPOJO.id} 
        poem={poemPOJO} 
        deleteOnePoemViaCard={this.props.deleteOnePoemViaCard}   
      />)

    return (
      <div className="poems-container">
        {poemCards}
      </div>
    );
  }
}

export default PoemsContainer;
