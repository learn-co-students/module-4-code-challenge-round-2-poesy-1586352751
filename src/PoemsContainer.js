import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  

  arrayofComponents = () => this.props.poems.map((poem) => {
    return <Poem key={poem.id} poem={poem}/>
  })

  render() {
    // console.log(this.props.poems)
    // console.log(this.arrayofComponents)
    return (
      <div className="poems-container">
        {
          this.arrayofComponents()
        }
      </div>
    );
  }
}

export default PoemsContainer;
