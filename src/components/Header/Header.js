import React from 'react'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <div>
      <h1>Medicine shop Inventory <HeaderCartButton onShow={props.onShow}/></h1>
      
    </div>
  )
}

export default Header
