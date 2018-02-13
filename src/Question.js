import React, { Component } from 'react';
import './App.css';
import Grading from "./Grading"

class Question extends Component {

  
  render() {
    return (        
      <div>
        <form onSubmit={this.props.answerHandler}>    
        <h2> Question : {this.props.question} </h2>
        <h2>category: {this.props.category}</h2>
        <h2> Value : {this.props.value} </h2>
        <h2> Score: {this.props.score} </h2>
      
     </form> 
     <Grading
        answerHandler={this.props.answerHandler}
       />
      </div>
    );
  }
}

export default Question;
