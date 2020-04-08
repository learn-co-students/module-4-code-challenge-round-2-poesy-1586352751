import React, {Component} from "react";

class NewPoemForm extends Component {

  state ={
    title: '',
    content: '',
    author: ''
  }

  handleAllInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.addAPoem( this.state )
    this.setState({
      title: '',
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input name="title" placeholder="Title" onChange={this.handleAllInputs} value={this.state.title} />
        <input name="author" placeholder="Author" onChange={this.handleAllInputs} value={this.state.author} />
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} onChange={this.handleAllInputs} value={this.state.content } />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
