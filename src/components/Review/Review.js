import React from 'react';
import { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/shipment')
    }

    const RemoveProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

      const cartProducts = productKeys.map(key => {
          const product = fakeData.find( pd => pd.key === key);
          product.quantity = savedCart[key];
          return product;
      })
        setCart(cartProducts)
    }, []);

    let thankYou;
     if(orderPlace){
         thankYou = <img src={happyImg} alt="" />
     }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h1>Cart Items {cart.length}</h1> */}
                {
                    cart.map(pd => <ReviewItem

                        key={pd.key}
                        RemoveProduct={RemoveProduct}
                        product={pd}>

                    </ReviewItem>)
                }
                { thankYou }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className='main-btn'>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;