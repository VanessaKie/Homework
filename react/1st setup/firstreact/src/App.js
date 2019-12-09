import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

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

export default App;
