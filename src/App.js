import React from 'react';
import logo from './logo.svg';
import ProductList from './pages/productBrowse/index.js'
import './App.css';

function App() {
    return (
        <div className="main">
            <header className="header home-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Hey everyone and welcome to sock mania
                </p>
                <a
                    className="link"
                    rel="noopener noreferrer"
                >
                    Product
                </a>
                <ProductList name="Sock1"/>
            </header>
        </div>
    );
}

export default App;
