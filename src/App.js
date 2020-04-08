import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    clicked: false
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
      .then( res => res.json())
      .then( poemArray => {
        this.setState({
          poems: poemArray
        })
        // console.log(poemArray)
      })
  }

  handleClick = e => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  addAPoem = poemObj => {
    let formattedPoem = {
      title: poemObj.title,
      content: poemObj.content,
      author: poemObj.autho
    }

    fetch("http://localhost:6001/poems",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify( formattedPoem)
    })
      .then( res => res.json())
      .then( newPoem => {
        let newArr = [...this.state.poems, newPoem]
        this.setState({
          poems: newArr
        })
      })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm addAPoem={this.addAPoem} />}
        </div>
        <PoemsContainer poemArray={this.state.poems} />
      </div>
    );
  }
}

export default App;
