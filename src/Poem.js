import React from "react";

class Poem extends React.Component {

  state = {
    clicked: false
  }

  changeState = (event) => {
    console.log(event, "hello wisconsin")
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleDelete = (event) => {
    console.log(event, 'i am a delete')
    this.props.deleteOnePoem(this.props.poem.id)
  }


  render() {


    let {title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
        <strong>- By {author}</strong>
        </p>
        <button onClick={this.changeState}>{this.state.clicked ? 'Mark as Read' : 'Mark as Unread'}</button><br></br>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Poem;
