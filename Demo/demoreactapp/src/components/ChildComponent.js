import React, { PureComponent } from 'react'
import './ChildComponent.css';

export class ChildComponent extends PureComponent {
  render() {
    const laptopData={
      laptops: [
        {
            "id": "1",
            "name": "Acer Aspire 5",
            "image": "https://m.media-amazon.com/images/I/61vBoUXhwSL._AC_UF1000,1000_QL80_.jpg", 
            "description": "Versatile laptop with Intel Core i5 processor, 8GB RAM, 512GB SSD, and 15.6-inch Full HD display."
        },
        {
            "id": "2",
            "name": "MacBook Pro 14-inch (2023)",
            "image": "https://9to5mac.com/wp-content/uploads/sites/6/2023/10/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large_2x.jpg?quality=82&strip=all&w=1600",
            "description": "Powerful Apple laptop with M2 Pro chip, 16GB RAM, 1TB SSD, and a stunning Liquid Retina XDR display."
        },
        {
            "id": "3",
            "name": "Dell XPS 13 Plus",
            "image": "https://cdn.vox-cdn.com/uploads/chorus_image/image/71190207/mchin_201020_5350_0012.0.jpg",
            "description": "Ultra-sleek and modern laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD, and a beautiful edge-to-edge OLED display."
        },
    ]
    }
    return (
      <div className='mainContainer'>
        {laptopData.laptops.map((laptops,index) =>(
          <div className='container'>
            <img src={laptops.image} className='imgContainer'></img>
            <div className='textContainer'>
              <div className='laptopName'>{laptops.name}</div>
              <p className='laptopDescription'>{laptops.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ChildComponent