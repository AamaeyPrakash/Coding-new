import React, { useState, createContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (productName) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.name === productName);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { name: productName, quantity: 1 }];
            }
        });
    };

    return (
        <MyContext.Provider value={{ cart, addToCart }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
export { MyContext };