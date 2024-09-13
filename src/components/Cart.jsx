import React from 'react';

function Cart(props) {
  const { cartItems, onRemove } = props;

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.name}
              <button className="btn btn-danger btn-sm float-end" onClick={() => onRemove(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
