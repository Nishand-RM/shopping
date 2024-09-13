import React from 'react';

function Product(props) {
  const { product, onAdd, onRemove, inCart } = props;

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        {inCart ? (
          <button className="btn btn-danger" onClick={() => onRemove(product)}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
