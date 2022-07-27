import React from 'react'
import './Checkout.css'
function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/July/PC_3000._CB632136477_.jpg"
            alt="ad"/>
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {/*BaskketItem */}
            </div>
        </div>
        <div className="checkout__right">
            {/*Subtotal*/}
            <h2>The subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout