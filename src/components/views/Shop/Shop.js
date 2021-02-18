import React from 'react';

import Row from 'react-bootstrap/Row';
import {dataset} from '../../../data.js'

import ProductShop from '../Product/Product';
import Hero from '../../layout/Hero/Hero';
import styles from './Shop.module.scss';


const Shop = () => {

  return (
    <div>
   <Hero />
      <div className={styles.wrapper}>
        <Row>
           {dataset.map(product => (
            <ProductShop key={product.id} product={product} />
          ))}  
        </Row>
      </div>
      </div>
    ) 
  
};

export default Shop;