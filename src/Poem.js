import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = (event) => {
    this.setState({read: !this.state.read})
  }

  handleDelete = (event) => {
    let id = event.target.parentNode.id
    this.props.deleteOnePoemViaCard(id)
  }

  render() {
    const {id, title, content, author} = this.props.poem
    return (
      <div id={id} >
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleClick} >{this.state.read? "You've read this poem" : "Mark as read"}</button>
        <button onClick={this.handleDelete} > Delete </button>
      </div>
    );
  }
}

export default Poem;
