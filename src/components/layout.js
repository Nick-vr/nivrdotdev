import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
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
  padding: 50px 50px 0;
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

const SContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 50px);
`

const SMain = styled.main`
  padding-bottom: 2.5rem;
`

// markup
const Layout = ({ children }) => {
  return (
    <SContainer>
      <GlobalStyle />
      <Header />
      <SMain>{children}</SMain>
      <Footer />
    </SContainer>
  )
}

export default Layout
