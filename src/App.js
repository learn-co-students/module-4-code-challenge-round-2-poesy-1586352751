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

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm} >Show/hide new poem form</button>
          {this.state.formClicked && <NewPoemForm addOnePoemViaForm={this.addOnePoemViaForm} />}
        </div>
        <PoemsContainer poemsArray={this.state.poemsArray} />
      </div>
    );
  }
}

export default App;
