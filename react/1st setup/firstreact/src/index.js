import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
function buildGreeting(animal) {
    return animal.firstname + ' ' + animal.lastname;
};

const animal = {
    firstname: 'Mister',
    lastname: 'Hamster'
};

const greeting = 
    < h1 >
    Hello, {buildGreeting(animal)}! 
    </h1>
*/


/*componentDidMount() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Vienna&APPID=bf85999076e821bfa78ac3229d2f8d7d&units=metric')
    .then(function (response) {
        return response.json();
    })
    .then((responseJSON) => {
        this.weather({responseJSON.weather.main});
        return weather;
    }*/

//ReactDOM.render(greeting, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();