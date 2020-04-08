import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: "",
  }

  handSubmit = (e) => {
    e.preventDefault()
    this.props.addOnePoem(this.state)
  }

  handleAllInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let {title, author, content} = this.state
    
    return (

        <form className="new-poem-form" onSubmit={this.handSubmit}>
        <input placeholder="Title" 
                name= "title"
                id="title"
                value={title}
                onChange={this.handleAllInput}
        />
        <input  placeholder="Author"
                name= "author"
                value={author}
                onChange={this.handleAllInput}
        />
        <textarea placeholder="Write your masterpiece here..." rows={10} 
                name= "content"
                value={content}
                onChange={this.handleAllInput}
          />
        <input type="submit" value="Share your masterpiece" />
        </form>
        
  
    );
  }
}

export default NewPoemForm;
