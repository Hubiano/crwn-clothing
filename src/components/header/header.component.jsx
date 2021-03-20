import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // connect is a higher order function
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import {useAuthState} from 'react-firebase-hooks/auth'
import { ReactComponent as Logo } from '../../assets/crown.svg' // This is special syntax in React for importing SVG.

import './header.styles.scss'
    
const Header = ({ currentUser, hidden }) => {
   const [user] = useAuthState(auth)
   
   return (
   
   <div className='header'>
      <Link className='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link className='option' to='/shop'>SHOP</Link>
         <Link className='option' to='/contact'>CONTACT</Link>
            <CartIcon />
            <HeaderAvatar alt={user?.displayName} src={user?.photoURL} />
            {currentUser ? <div className="option" onClick={() => auth.signOut()}> SIGN OUT
            
         </div> : <Link className="option" to='/signin'>SIGN IN </Link>}
      </div>
      {
         hidden ? null : <CartDropdown />
      }
      
   </div>
   )
}

const HeaderAvatar = styled(Avatar)`
   cursor: pointer;
   margin-left:20px;
   :hover {
      opacity:0.8;
   }
`

const mapStateToProps = createStructuredSelector({
   currentUser:selectCurrentUser,
   hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)