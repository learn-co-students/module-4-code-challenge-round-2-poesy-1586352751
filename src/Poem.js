import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = (event) => {
    this.setState({read: !this.state.read})
  }

  render() {
    const {title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleClick} >{this.state.read? "You've read this poem" : "Mark as read"}</button>
      </div>
    );
  }
}

export default Poem;
