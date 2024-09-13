import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', image: 'https://via.placeholder.com/150' },
  // Add more products as needed
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addToCart = (product) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, product]
    }));
  };

  removeFromCart = (product) => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(item => item.id !== product.id)
    }));
  };

  getCartItemCount = () => {
    return this.state.cartItems.length;
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>Shop in Style</h1>
          <p>With this shop homepage template</p>
          <div className="cart-count">
            Cart: {this.getCartItemCount()}
          </div>
        </header>
        <main>
          <ProductList
            products={products}
            onAdd={this.addToCart}
            onRemove={this.removeFromCart}
            cartItems={this.state.cartItems}
          />
          <Cart
            cartItems={this.state.cartItems}
            onRemove={this.removeFromCart}
          />
        </main>
      </div>
    );
  }
}

export default App;
