import React from 'react'

import '../style/Header.scss'
import Logo from './Logo'
import TopNav from './TopNav'


const Header = () => {
  return (
    <header>
      <Logo />
      <TopNav />
    </header>
  )
}

export default Header