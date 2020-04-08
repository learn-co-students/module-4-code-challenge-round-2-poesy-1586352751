import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
      poems: [],
      clicked: false,
      
  }

  handleClick = (e) => {
    console.log("hello from click")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  componentDidMount () {
    fetch ('http://localhost:6001/poems')
    .then (r => r.json())
    .then (poems => {
      this.setState({
        poems: poems 
      })
    })
  }

  addOnePoem = (poemObj) => {
    fetch ('http://localhost:6001/poems' , {
      method: "POST",
      headers: {
        "content-type": "application/json"},
      body: JSON.stringify(poemObj)
     })
      .then(r=>r.json())
      .then((newPoem)=> {
      let NewArrayOfPoems = [...this.state.poems, newPoem]
      this.setState({
        poems: NewArrayOfPoems
      })
    })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.clicked ? <NewPoemForm addOnePoem={this.addOnePoem} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
