import React from 'react'
import ProductCard from '../Cart/ProductCard'
import MyProvider from '../Cart/MyProvider'
import ProductCard from '../Cart/ProductCard'

function Home() {
  return (
    <div>
      <MyProvider>
        <ProductCard/>
      </MyProvider>
    </div>  
  )
}

export default Home