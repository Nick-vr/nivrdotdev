import React from 'react'
import styled from 'styled-components'

const currentYear = new Date().getFullYear()

// styles
const SFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: #373737;
  text-align: center;
  font-size: 0.5rem;
  letter-spacing: 0.2rem;

  span {
    margin-bottom: 10px;
  }

  a {
    text-transform: uppercase;
    text-text-decoration: none;
    color: #373737;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: #fff;
    }
  }
`

// markup
const Footer = () => {
  return (
    <SFooter>
      <span>&copy;{currentYear}</span>
      <a href="mailto:hello@nivr.dev">hello@nivr.dev</a>
    </SFooter>
  )
}

export default Footer
