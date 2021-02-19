import React from 'react';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row'
//import { data } from '../../../data'
import styles from './Product.module.scss';

const ProductShop = ({product}) => (


  <Col xs={12} md={6} lg={3} key={product.id} > 
    <Card style={{ width: '18rem'}}>      
      <Card.Img  variant="top" src={product.image} style={{height: 250 , objectFit:'cover'}}/>
      <Card.Body>
        <Card.Title style={{height: 40}}>{product.title}</Card.Title>
        <Button variant="outline-secondary">Add to cart</Button>
        <Button variant="outline-secondary">Add to favs</Button>
      </Card.Body>
    </Card> 
  </Col>

)

export default ProductShop;