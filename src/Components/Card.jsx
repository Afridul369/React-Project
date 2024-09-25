import React from 'react'

const Card = ({children,className}) => {
  return (
    <div className={`w-[350px]   rounded-[20px]  ${className}`}>{children}</div>
  )
}

export default Card