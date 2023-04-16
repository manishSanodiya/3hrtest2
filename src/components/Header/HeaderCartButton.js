import React from 'react'

const HeaderCartButton = (props) => {
  return (
    <div>
      <button onClick={props.onShow}>Cart</button>
    </div>
  )
}

export default HeaderCartButton
