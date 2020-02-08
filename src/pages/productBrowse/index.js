import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class ProductBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [
            {  id: 0, name: 'first product' },
            {  id: 1, name: 'second product' }
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
                      <div id={product.id}>
                          {product.id}
                          {product.name}
                      </div>
                  ))}
              </header>
          </div>
      );
  }
}

export default ProductBrowse;