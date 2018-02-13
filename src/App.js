import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

class App extends Component {

  client;

  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      question:{},
      score: 0,
      inputValue: ''   
    }
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.inputValue});
    this.getNewQuestion();
  }

  getNewQuestion = () => {
    return this.client.getQuestion().then(result => {
      console.log(result.data[0])
      this.setState({
        inputValue: '',
        question: result.data[0]     
      })
    })
  }

  componentDidMount = () => {
    this.getNewQuestion();
  }

  handleSubmit(event) {
    var totalScore =0;
    event.preventDefault()
    if (event.target.answer.value ===  this.state.question.answer ){
     console.log(totalScore) 
     totalScore = this.state.score + this.state.question.value;
     console.log(totalScore) 
     this.setState({score: totalScore});
    }

    else
    {
      totalScore = this.state.score - this.state.question.value;
      this.setState({score: totalScore});
    }
    event.target.answer.value  =''
    this.getNewQuestion();
    
    //event.preventDefault();
  }


  render() {
    if (this.state.question.category && this.state.question.category.title) {
      this.category = this.state.question.category.title
    }
    return (
       <form onSubmit={this.handleSubmit}>    
      <div>
        <h2> Question : {this.state.question.question} </h2>
        <h2>category: {this.category}</h2>
        <h2> Value : {this.state.question.value} </h2>
        <h2> Score: {this.state.score} </h2>
        <input type="text" name="answer"/>
        <button >Submit</button>
      </div></form> 
    );
  }
}

export default App;
