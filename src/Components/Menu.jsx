import React from 'react'

const Menu = ({navMenu,className}) => {
  return (
   <ul>
    <li className={`${className}`}>{navMenu}</li>
   </ul>
  )
}

export default Menu