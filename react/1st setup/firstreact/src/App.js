import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


function App(){
  
  const animal = {
      firstname: 'Mister',
      lastname: 'Hamster'
  };
  
  function buildGreeting(animal) {
    return animal.firstname + ' ' + animal.lastname;
}
  function clock(){
  const greeting = (
    <div>
      < h1 >
      Hello, {buildGreeting(animal)}! 
      </h1>
      <h2> It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  )  
  return (greeting);
  }
  setInterval(clock, 1000);


return(setInterval);

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
