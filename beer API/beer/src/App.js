import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import "react-pagination-library/build/css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beers: false,
    };
   /*  this.handleButtonAll = this.handleButtonAll.bind(this) */
  }

  handleButtonAll() {
    
    fetch('https://api.punkapi.com/v2/beers')
      .then (response => response.json())
      .then (resp => {
        const beers = [];
        
        resp.map(beer => {
          beers.push({
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            image_url: beer.image_url
          })
        });

        this.setState({
          beers: beers
        });
        console.log('Json:', resp);
        console.log("arr", beers);
        console.log("mount", this.state.beers); 
      })
  }
  
  handleButtonSearch = searchInputValue => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchInputValue}`)
      .then (response => response.json())
      .then (resp => {
        const beers = [];
        
        resp.map(beer => {
          beers.push({
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            image_url: beer.image_url
          })
        });

        this.setState({
          beers: beers
        });
         console.log('Json:', resp);
        console.log("arr", beers);
        console.log("state", this.state.beers); 
      })
  };

  render() {
    return (
      <div className="App">
        <Router>
        <Header /> 
       <Switch>
          <Route path='/home'>
            {this.state.beers && <Main api={this.state.beers}/>}
          </Route>
        </Switch>
       </Router>
       <Footer />
       {console.log('app this.state api',this.state.beers)}
      </div>
    );
  }
}

export default App;
