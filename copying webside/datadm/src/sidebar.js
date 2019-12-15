import React from 'react';
import Button from './button';

class Sidebar extends React.Component{
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
            <div className="App-sidebar">
                sidebar
                <br />
                Counter: {this.state.counter}
                <br />
                <Button click={this.handleClick} name='sidebar' />
            </div>
        );
    }
}

export default Sidebar; 