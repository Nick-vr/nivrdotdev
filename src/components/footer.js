import React from 'react'

const currentYear = new Date().getFullYear()

// markup
const Footer = () => {
  return (
    <>
      <p>&copy; {currentYear}</p>
      <p>email</p>
    </>
  )
}

export default Footer
