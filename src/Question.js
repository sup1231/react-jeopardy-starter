import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

class Question extends Component {

  client;

  
  render() {
    return (
           
      <div>
        <h2> Question : {this.prop.question} </h2>
      </div>
    );
  }
}

export default Question;
