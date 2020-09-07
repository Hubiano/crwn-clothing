import CartActionTypes from './cart.types'

const INTITAL_STATE = {
   hidden: true
}

const cartReducer = (state = INTITAL_STATE, action) => {
   switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN: 
         return {
            ...state,
            hidden: !state.hidden
         }
      default:
         return state
   }
}

export default cartReducer