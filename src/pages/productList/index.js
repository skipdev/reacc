import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [
            {  key: 0, name: 'first product' },
            {  key: 1, name: 'second product' }
        ]
    }
  }

  render() {
      const { products } = this.state;

      return (
          <div className='main'>
              <p>hi</p>
              <header className='header pb__header'>
                  {products.map(product => (
                      <div id={product.key}>
                          {product.key}
                          {product.name}
                      </div>
                  ))}
              </header>
          </div>
      );
  }
}

export default ProductList;