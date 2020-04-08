import React, {Component} from "react";

class NewPoemForm extends Component {

  state ={
    title: '',
    content: '',
    author: ''
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
