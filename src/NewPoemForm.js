import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: 'hello',
    content: '',
    author: ''
  }

  handleAllInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(event, 'hello from submit')
    event.preventDefault()
    this.props.addNewPoem(this.state)
  }


  render() {

    return (

      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input 
          placeholder="Title"
          name='title'
          value={this.state.title}
          onChange={this.handleAllInput}
        />
        <input 
          placeholder="Author"
          name="author"
          value={this.state.author}
          onChange={this.handleAllInput} />
        <textarea 
          placeholder="Write your masterpiece here..." 
          name='content'
          value={this.state.content}
          onChange={this.handleAllInput}
          rows={10} />
        <input 
          type="submit" 
          value="Share your masterpiece" />
        </form>
    );
  }
}

export default NewPoemForm;
