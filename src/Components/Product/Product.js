import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    // const {handleAddToCart}=props;

    const {name,img,seller,price,ratings}=props.product;
    // console.log(props)
    return (
        <div className='product' >
            <img src={img} alt="" />
            <div className='product-info' >
            <h4>Name:{name}</h4>
            <h4>Seller:{seller}</h4>
            <h4>Price:${price}</h4>
            <h4>Ratings: {ratings}</h4>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart' >
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;