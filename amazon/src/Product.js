import React from 'react';
import "./Product.css";

function Product({id,title,rating,price,image}) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {
                    Array(rating)
                        .fill()
                        .map( (_) => (
                                <p>star</p> 
                                )
                        )
                }
            </div>
        </div>
        <img src={image} alt='Product' />
        <button>Add To Cart</button>
    </div>
  )
}

export default Product