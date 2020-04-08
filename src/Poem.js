import React from "react";

class Poem extends React.Component {

  state ={
    clicked: false
  }

  handleClick = (e) => {
    this.setState ({
      clicked: !this.state.clicked 
    })
    
  }
  

  render() {
    // console.log(this.props.poem)
    let {title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title} </h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleClick} > {this.state.clicked ? "Marked as Read" : "Marked as Unread"}</button>
      </div>
    );
  }
}

export default Poem;
