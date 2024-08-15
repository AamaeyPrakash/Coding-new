import React, { useState } from 'react';

const CardBasedAccounts = () => {
  const [products, setProducts] = useState([
    { name: 'Brownies', price: 100, quantity: 0 },
    { name: 'Bracelets', price: 100, quantity: 0 },
    { name: 'Bookmarks', price: 50, quantity: 0 },
    { name: 'Face Painting', price: 150, quantity: 0 },
    { name: 'Ice Tea', price: 50, quantity: 0 },
    { name: 'Muffins', price: 100, quantity: 0 },
  ]);

  const [total, setTotal] = useState(0);

  const handleIncrement = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
    setTotal(total + updatedProducts[index].price);
  };

  const handleDecrement = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
      setTotal(total - updatedProducts[index].price);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">15th August CAS Stall Accounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <div className="flex justify-between mb-2">
              <span>Quantity:</span>
              <div className="flex items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <span>Price:</span>
              <span>₹{product.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>₹{product.price * product.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mt-4">Total: ₹{total}</h2>
    </div>
  );
};

export default CardBasedAccounts;