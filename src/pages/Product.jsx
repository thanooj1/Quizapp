import React from 'react';


const Product = () => {
  // Product data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$30' },
  ];

  // Handle click function
  const handleProductClick = (product) => {
    alert(`You clicked on ${product.name}, priced at ${product.price}`);
  };

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <p>Explore our range of amazing products:</p>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => handleProductClick(product)}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
