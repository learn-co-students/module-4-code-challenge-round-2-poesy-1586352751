import React from "react";

class NewPoemForm extends React.Component {
  // if persistence doesn't work try removing null, haven't done that before
  state = {
    id: null,
    title: '',
    content: '',
    author: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newPoemPOJO = {...this.state}
    this.props.addOnePoemViaForm(newPoemPOJO)

  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit} >
        <input 
          name="title" 
          placeholder="Title" 
          value={this.state.title} 
          onChange={this.handleChange}
        />
        <input 
          name="author" 
          placeholder="Author" 
          value={this.state.author}
          onChange={this.handleChange} 

        />
        <textarea 
          name="content"
          placeholder="Write your masterpiece here..." 
          rows={10} 
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
