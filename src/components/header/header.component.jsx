import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg' // This is special syntax in React for importing SVG.

import './header.styles.scss'

const Header = () => (
   <div className='header'>
      <Link clasName='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link clasName='option' to='/shop'>Shop</Link>
         <Link clasName='option' to='/shop'>Contact</Link>
      </div>
   </div>
)

export default Header;