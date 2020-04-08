import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poemsArray: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(r => r.json())
    .then(poemsArray => this.setState({poemsArray: poemsArray}))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poemsArray={this.state.poemsArray} />
      </div>
    );
  }
}

export default App;
