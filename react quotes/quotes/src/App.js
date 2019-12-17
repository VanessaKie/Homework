import React from 'react';

function Button (props) {
    return <button type="button" onClick={props.click}>{props.text} </button>;
}

class FirstApi extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            quotes: false,
            random: false,
            index: 0
        }
        
  }
 random = () => {
        let numb = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
      //  let arr= this.state.quotes;
    this.setState({random: numb});
    }
index = () =>{
    let index= this.state.index;
    index += 5;
    this.setState({index: index})
    
}

  componentDidMount() {
    
    const url = 'https://programming-quotes-api.herokuapp.com/quotes/lang/en';
  
    fetch(url)
   
        .then (response => response.json())  
        .then (data => this.setState({quotes: data}));
        } 

  render() {
    let a = this.state.random
    let b = this.state.index
    
   if (a === false && b === 0){
   return ( <div>
   
                <Button click={this.random} text='Random' /> 
                <Button click={this.index} text='DONT TOUCH does not work - get me 5' /> 
            </div>);
   } else if (a !== false && b === 0){
    return (
        <div>
        {console.log('blah', a)} 
        { this.state.quotes &&  <ListContainer map='2'quotes={this.state.quotes[a]} />} 
        <Button click={this.random} text='Random' />
        <Button click={this.index} text='DONT TOUCH does not work - get me 5' />
        </div>
      );
    } else if ( b !== 0){ 
        return (
            <div>
            {console.log('imdiv:', this.state.index)}
            { this.state.quotes &&  <ListContainer map='0' quotes={this.state.quotes} index={this.state.index} />} 
            </div>)
    }
  }
}

const Lists = props => {
    const quotes = props.quotes;
    const map = props.map;
    const index = props.index;
    ;
    console.log('entrylist:', props.quotes);
    if (map > 1){
        console.log('lists:', map); 
    const listItems = <ListItem key={quotes.id} author={quotes.author} quote={quotes.en} />;
    
    return <ul>{listItems}</ul>;
    }
    else{
        console.log('listsindex:', index);
        /* const listItems = quotes.filter(quote => (quotes.index<5;
            <ListItem key={quote.id} author={quote.author} quote={quote.en} /> ) */
            let arr = []
            let element =  <ListItem key={quotes.id} author={quotes.author} quote={quotes.en} />
                for(let i; i<= index; i++){
                arr.push(props.quotes[i]) 
                }; 
            return <div>{console.log(arr)}<p>told you. Don't touch... o_O </p> </div>
            //<ListItem key={quotes[i].id} author={quotes[i].author} quote={quotes[i].e}/> 
         
    }
};
  const ListItem = props => {
    const { quote, author } = props;
    console.log('listItem:',props)
    return (
      <li>
        <span>{quote}</span>
        <span>
          {""} - <strong>{author}</strong>
        </span>
      </li>
    );
  };
  const ListContainer = props => {
    return <Lists map={props.map} quotes={props.quotes} index={props.index} />;
  };

  


export default FirstApi;


