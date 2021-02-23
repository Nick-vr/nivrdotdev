import React from 'react'
import styled from 'styled-components'

import Mail from '../images/mail.svg'
import Cv from '../images/cv.svg'
import Linkedin from '../images/linkedin.svg'

// styles
const SHeader = styled.header`
  margin-bottom: 80px;
  h2 {
    text-transform: uppercase;
    font-weight: 100;
  }
`
const SSocialLinks = styled.div`
  margin-top: 10px;
  img {
    margin-right: 20px;
    color: #373737;
    width: 1.5rem;
    filter: invert(30%);
    transition: filter 0.5s ease-in-out;

    :hover {
      filter: invert(100%);
    }
  }
`

// markup
const Header = () => {
  return (
    <SHeader>
      <h2>nick</h2>
      <h2>van royen</h2>
      <SSocialLinks>
        <img src={Mail} alt="Mail me image" />
        <img src={Cv} alt="My CV image" />
        <img src={Linkedin} alt="Linkedin image" />
      </SSocialLinks>
    </SHeader>
  )
}
export default Header
