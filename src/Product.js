import React from 'react'
import './Product.css'

/*Product info consists of 3 things:
1. Name
2. Description
3. Reviews*/

//inside product thr argument are called props
function Product({title,image,price,rating}) {
  return (
    <div className="product">
    <div className="product__info">
      <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating)
        .fill()
        .map((_, i)=>(
             <p>🌟</p>
        ))}
       
        </div>

    </div>
      <img src={image}
      alt="lean"
      />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product