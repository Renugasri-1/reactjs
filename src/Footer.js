import React from 'react'

const Footer = ({length}) => {
   const year=new Date();
  return (
    <footer>copyright &copy;{year.getFullYear()}</footer>
  )
}

export default Footer