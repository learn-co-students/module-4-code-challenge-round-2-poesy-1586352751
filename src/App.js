import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poemsArray: [],
    formClicked: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(r => r.json())
    .then(poemsArray => this.setState({poemsArray: poemsArray}))
  }

  toggleForm = (event) => {
    this.setState({formClicked: !this.state.formClicked})
  }

  addOnePoemViaForm = (newPoem) => {
    const configObject = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPoem)
    }

    fetch('http://localhost:6001/poems', configObject)
    .then(r => r.json())
    .then(newBackendPoem => {
      const newPoemsArray = [...this.state.poemsArray, newBackendPoem]
      this.setState({poemsArray: newPoemsArray})
    })
  }

  deleteOnePoemViaCard = (poemIDToDelete) => {
    const configObject = {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    }
    fetch(`http://localhost:6001/poems/${poemIDToDelete}`, configObject)
    .then(r => r.json())
    .then(() => {
      let shortenedPoemsArray = [...this.state.poemsArray].filter(poemPOJO => poemPOJO.id != poemIDToDelete)
      // one's a string and one's a number I think
      // hence doing != instead of !==
      // cool this finally works, I'd like to know if there's a better way than adding the ID to the page's html
      // to be able to grab the ID from the delete button's onClick 
      // I feel like I did some mod 3 stuff here goin up the DOM tree to the parentNode

      this.setState({poemsArray: shortenedPoemsArray})
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm} >Show/hide new poem form</button>
          {this.state.formClicked && <NewPoemForm addOnePoemViaForm={this.addOnePoemViaForm} />}
        </div>
        <PoemsContainer 
          poemsArray={this.state.poemsArray} 
          deleteOnePoemViaCard={this.deleteOnePoemViaCard}
        />
      </div>
    );
  }
}

export default App;
