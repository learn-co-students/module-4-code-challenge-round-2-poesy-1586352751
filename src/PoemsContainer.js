import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  // Option#2
  // arrayComponents = () => {
  //   let arrayOfPoem = this.props.poemArray.map( poem => {
  //     return <Poem key={poem.id} poem={ poem } /> don't forget the key
  //   })

  //   return arrayOfPoem
  // }

  render() {
    
    let arrayComponents = this.props.poemArray.map( poem => {
      return <Poem key={poem.id} poem={poem} /> // lost quite a bit of time because I fogot to close the component -> />
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
