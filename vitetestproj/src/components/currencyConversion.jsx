import React, { useState, useEffect } from 'react';

const currencyConversion = () => {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyData, setCurrencyData] = useState({
    USD: 1,
    EUR: 0.84,
    INR: 73.56,
  });
  const apiKey = 'YOUR_API_KEY'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
        const result = await response.json();
        setCurrencyData(result.conversion_rates);
      } catch (error) {
        console.error('Error fetching the currency data', error);
      }
    };
    fetchData();
  }, [from, apiKey]);

  const options = Object.keys(currencyData);

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
  };

  

  return (
  <div className="bg-gray-800 min-h-screen flex items-center justify-center">
    <div className='bg-white'>
      <form onSubmit= { (e) => {convert();}}>
        <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>From</label>
        <input 
        type='number' 
        value={amount} 
        onChange = { (e) => setAmount(Number(e.target.value))} 
        placeholder='Amount'
        className='rounded w-full mt-1 p-2 border'/>
        </div>
        <select 
          value={from}
          onChange = { (e) => setFrom(e.target.value)}
          className='mt-2 p-2 border ronded w-full'
          >
            {options.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
            <button type="submit" className='
            p-2 text-white bg-green-500 rounded'>Convert</button>
      </form>
    </div>
  </div>
  );
};


export default currencyConversion;
