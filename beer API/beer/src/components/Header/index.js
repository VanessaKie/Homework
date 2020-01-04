import React from 'react';
import './index.css';
import Example from './Navigation'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchInput: ""
      };
    }
  
    handleSearch = e => {
      this.setState({
        searchInput: e.target.value
      });
    };
  
    render() {
      return (
        <header className="App-header">
        <Example />
        <input
            type="text"
            onChange={this.handleSearch}
            placeholder="Search..."
            value={this.state.searchInput}
          />
          <button onClick={() => this.props.handleButtonSearch(this.state.searchInput)}>
            Click
          </button>
          <button onClick={ () => this.handleButtonAll()}>
            all
          </button>
       {/*  <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={this.handleSearch} value={this.state.searchInput}/>
          <Button type="submit" onClick={() => this.props.handleButtonSearch(this.state.searchInput)}>Search</Button>
          {console.log('search:', this.state.searchInput)}
          <Button type="submit" onClick={this.props.handleButtonAll}>All</Button>
        </Form> */}
        </header>
      );
    }
  }
  
  export default Header;