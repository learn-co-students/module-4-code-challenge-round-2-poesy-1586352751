import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    clicked: false
  }

  changeState = (event) => {
    console.log(event, "i've been clicked")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(r => r.json())
    .then(poems => {
      this.setState({
        poems: poems
      })
    })
  }

  addNewPoem = (newPoem) => {
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPoem)
    })
    .then(r => r.json())
    .then((newlyCreatedPoem) => {
      let newArray = [...this.state.poems, newlyCreatedPoem]
      this.setState({
        poems: newArray
      })
    })
  }

  deleteOnePoem = (id) => {
    fetch(`http://localhost:6001/poems/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(() => {
      let filteredArr = this.state.poems.filter((poemObj) => {
        return poemObj.id !== id
      })
      this.setState({
        poems: filteredArr
      })
    })
  }


  render() {

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.changeState}>Show/hide new poem form</button>
          {this.state.clicked ? <NewPoemForm addNewPoem={this.addNewPoem}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems}
                        deleteOnePoem={this.deleteOnePoem}/>
      </div>
    );
  }
}

export default App;
