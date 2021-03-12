import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Mail from '../images/mail.svg'
import Cv from '../images/cv.svg'
import Linkedin from '../images/linkedin.svg'
import Github from '../images/github.svg'

// styles
const SHeader = styled.header`
  margin-bottom: 80px;

  h2 {
    text-transform: uppercase;
    font-weight: 100;

    @media (max-width: 502px) {
      font-size: 1.5rem;
    }
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
      <Link to="/">
        <h2>nick</h2>
        <h2>van royen</h2>
      </Link>
      <SSocialLinks>
        <a href="mailto:hello@nivr.dev">
          <img src={Mail} alt="Mail me" />
        </a>
        <a
          href="https://www.linkedin.com/in/nickvanroyen/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <Link to="/cv">
          <img src={Cv} alt="CV" />
        </Link>
        <a
          href="https://github.com/Nick-vr"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src={Github} alt="GitHub" />
        </a>
      </SSocialLinks>
    </SHeader>
  )
}
export default Header
