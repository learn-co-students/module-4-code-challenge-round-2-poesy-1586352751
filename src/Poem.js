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
        {this.state.clicked ?
        
        
        <>
        <h3 style={{opacity:.54}}>{title} </h3>
        <p style={{opacity:.54}}>{content}</p>
        <p>
          <strong style={{opacity:.54}}>- By {author}</strong>
        </p>
        </>
        
        :
       
        <>
        <h3>{title} </h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        </>
        }
        
      
        <button onClick={this.handleClick} > {this.state.clicked ? "Mark as Read" : "Mark as Unread"}</button>
      </div>
    );
  }
}

export default Poem;
