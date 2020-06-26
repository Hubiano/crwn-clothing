import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg' // This is special syntax in React for importing SVG.

import './header.styles.scss'

const Header = ({ currentUser }) => (
   <div className='header'>
      <Link clasName='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link clasName='option' to='/shop'>SHOP</Link>
         <Link clasName='option' to='/shop'>CONTACT</Link>
         {currentUser ? <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div> : <Link className="option" to='/signin'>SIGN IN </Link>}
      </div>
   </div>
)

export default Header;