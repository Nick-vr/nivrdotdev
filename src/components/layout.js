import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Header from './header'
import Footer from './footer'

// styles
const GlobalStyle = createGlobalStyle`
${reset}
html,
body {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  background-color: #151515;
  color: #fff;
}
html {
  font-size: 17px;
}
body {
  padding: 50px;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 2rem;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #fff;
  outline: none;
}
input, textarea, button {
  font-family: inherit;
  font-size: 100%;
}
`

// markup
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
