import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const dotenv = require('dotenv')
dotenv.config()

const StripeCheckoutButton = ({ price, currentUser }) => {
  const priceForStripe = price * 100
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }


  return (
    <StripeCheckout
      name="CROWN CLOTHING" // the pop-in header title
      description={`Your total is $${price}`} // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      label={priceForStripe > 0 ? ' Pay Now ' : ' Nothing to Pay '} // text inside the Stripe button
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      currency="USD"
      stripeKey={publishableKey}
      email=""
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      token={onToken}
    />
  
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
})

export default connect(mapStateToProps)(StripeCheckoutButton)