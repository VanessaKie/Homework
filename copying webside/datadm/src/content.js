import React from 'react';
import Button from './button';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter: 0
        }
    }
        handleClick = () => {
            this.setState({
                counter: this.state.counter + 1
            });
            console.log(this.state);
        }
    render(){
        return(
            <div className="App-content">
            Content
            <br />
            Counter: {this.state.counter}
            <br />
            <Button click={this.handleClick} name='counter' />
        </div>
        );
    }
}

export default Content;

