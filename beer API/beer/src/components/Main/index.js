import React from 'react';
import './index.css';

import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

import List from './List';



class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
        currentPage: 1
        }
        this.beers=this.props.api
    }

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });}

    render(){
        return(
        <div>
        
            <List api={this.beers} />
            {console.log('main', this.beers)}
            <Pagination
            currentPage={this.state.currentPage}
            totalSize={10}
            sizePerPage={5}
            changeCurrentPage={this.changeCurrentPage}
            theme="bootstrap"
            />
        </div>
        )
    }
}

export default Main;

