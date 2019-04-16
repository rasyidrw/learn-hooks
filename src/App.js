import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 20 },
      { name: 'Jali', age: 18 }
    ],
    otherStateMisal: 'inimah cobain aja'
  });
  
    return (
      <div className="App">
        <h1> Hello there!! </h1>
        <p> Whis is working </p>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> My hobbies: watching </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'))
  }

export default app;

switchNameHandler = () => {
  // console.log('was clicked!');
  //DONT DO THIS: this.state.persons[0].name = "Maxain";
  this.setState({
    persons: [
    { name: 'Maxain', age: 26 },
    { name: 'Manu', age: 20 },
    { name: 'Jali', age: 18 }      
  ]});
};