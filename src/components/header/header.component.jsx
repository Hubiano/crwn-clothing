import React from 'react'
import { connect } from 'react-redux' // connect is a higher order function
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import {useAuthState} from 'react-firebase-hooks/auth'
import { ReactComponent as Logo } from '../../assets/crown.svg' // This is special syntax in React for importing SVG.
import {
   HeaderContainer,
   LogoContainer,
   OptionsContainer,
   OptionLink,
   HeaderAvatar
 } from './header.styles';
    
const Header = ({ currentUser, hidden }) => {
   const [user] = useAuthState(auth)
   
   return (
   
   <HeaderContainer>
      <LogoContainer to='/'>
         <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
         <OptionLink to='/shop'>SHOP</OptionLink>
         <OptionLink to='/contact'>CONTACT</OptionLink>
            <CartIcon />
            <HeaderAvatar alt={user?.displayName} src={user?.photoURL} />
            {currentUser ? <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT
         </OptionLink> : <OptionLink to='/signin'>SIGN IN </OptionLink>}
      </OptionsContainer>
      {
         hidden ? null : <CartDropdown />
      }
      
   </HeaderContainer>
   )
}


const mapStateToProps = createStructuredSelector({
   currentUser:selectCurrentUser,
   hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)