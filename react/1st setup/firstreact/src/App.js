import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


function App(){
  
  const animal = {
      firstname: 'Mister',
      lastname: 'Hamster'
  };
  
  const greeting = 
      < h1 >
      Hello, {buildGreeting(animal)}! 
      </h1>
  
  function buildGreeting(animal) {
    return animal.firstname + ' ' + animal.lastname;
}
return(greeting);
}
/*
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <Lander></Lander>
      </>
    )
  }
}

class Lander extends Component{
  render(){
    return(
      <> 
      <div>Lander</div>
      </>
    )
  }
}
*/
export default App;
