import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {


  // arrayComponents = () => {
  //   let arrayOfPoem = this.props.poemArray.map( poem => {
  //     return <Poem key={poem.id} poem={ poem } />
  //   })

  //   return arrayOfPoem
  // }

  render() {
    
    let arrayComponents = this.props.poemArray.map( poem => {
      return <Poem key={poem.id} poem={poem} />
    })

    console.log(this.props.poemArray)
    return (
      <div className="poems-container">
        {
          arrayComponents
        }
      </div>
    );
  }
}

export default PoemsContainer;
