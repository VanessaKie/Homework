import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function List(props){
    const beers = props.api
    const ListContainer = props => {
        return <Lists api={props.api} />;
      };

    const Lists = props => {
        const beers = props.api;
        const listItems = beers.map(beer => (
          <ListItem key={beer.id} name={beer.name} description={beer.description} />
        ));
        return <div className="beerWrapper">{listItems}</div>;
      };

      const ListItem = props => {
        const { name, description } = props;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
      };
     
    
        return(
            <main className="App-main">
                <ListContainer api={beers} />
            </main>
        )
}

export default List;