import React, { Component } from 'react';
import './App.css';

class Grading extends Component {

  
  render() {
    return (
           
      <div>
        <form onSubmit={this.props.answerHandler}>    
        <input type="text" name="answer"/>
        <button >Submit</button>
     </form> 
      </div>
    );
  }
}

export default Grading;
