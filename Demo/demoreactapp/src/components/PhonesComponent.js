import React, { PureComponent } from 'react'
import './PhonesComponent.css';
import phoneData from './phones.json';

export class PhonesComponent extends PureComponent {
  render() {  
    return (
      <div className='mainContainer'>
        {phoneData.products.map((products,index) =>(
          <div className='container'>
            <img src={products.thumbnail} className='imgContainer'></img>
            <div className='textContainer'>
                <div className='productInfo'> 
                    <h1 className='productName'>{products.title}</h1>
                    <p className='productBrand'>({products.brand})</p>
                </div>
              <p className='productDescription'>{products.description}</p>
            </div>

            <div className='priceInfo'>
                <div>Price: {products.price}$</div>
                <div>Discount: {products.discountPercentage}%</div>
                <div>Rating: {products.rating}/5</div>
          </div>

          <div>
            {(() => {
              if (products.stock < 20){
                let lowStock = document.createElement("paragraph");
                lowStock.appendChild("Almost Sold Out! Only {products.stock} units left.");
              }
              else {
                let stockParagraph = document.createElement("div");
                stockParagraph.appendChild("Stock Remaining: {products.stock}");
              }
            })}
          </div>
          {/* <div>
            <img src={products.images[0]} className='galleryImage'></img>
            <img src={products.images[1]} className='galleryImage'></img>
            <img src={products.images[2]} className='galleryImage'></img>
            <img src={products.images[3]} className='galleryImage'></img>
            <img src={products.images[4]} className='galleryImage'></img>
          </div> */}
        </div>
          ))
          }
      </div>
    )
  }
}


export default PhonesComponent