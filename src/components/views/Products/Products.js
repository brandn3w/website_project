import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import {Container} from 'react-bootstrap';

class Products extends React.Component {
   
render(){

    return(
<Container>
<Card style={{ width: '18rem' }}>
<Card.Header>Featured</Card.Header>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
   Product
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
    <Button>Add to favs</Button>
  </Card.Body>
</Card>
</Container>
    )
}
};
Homepage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

export default Homepage;