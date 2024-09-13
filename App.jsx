import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1 description' },
  { id: 2, name: 'Product 2', description: 'This is product 2 description' },
  { id: 3, name: 'Product 3', description: 'This is product 3 description' },
  { id: 4, name: 'Product 4', description: 'This is product 4 description' },
  { id: 5, name: 'Product 5', description: 'This is product 5 description' },
  { id: 6, name: 'Product 6', description: 'This is product 6 description' }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <div className="container">
      <h1 className="header">Shopping Cart</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {isInCart(product.id) ? (
              <button className="btn" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
