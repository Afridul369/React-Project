import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={` max-w-maxcontainer m-auto  ${className}`}>{children}</div>
  )
}

export default Container