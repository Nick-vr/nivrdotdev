import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Projects from '../components/projects'

// styles
const SSection = styled.section`
  div {
    margin-bottom: 15vh;
  }
`

const STextWrap = styled.div`
  h1 {
    @media (max-width: 502px) {
      font-size: 2rem;
    }
  }
  h2 {
    color: #373737;
    margin-top: -10px;
  }
`

const SSkewY = styled.div`
  position: absolute;
  background-color: #fff;
  height: 1vh;
  width: 100%;
  transform: skewY(-5deg);
`
// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <SSection>
        <STextWrap>
          <h1>
            SOFTWARE
            <br />
            DEVELOPER AT
          </h1>
          <h2>YOU?</h2>
        </STextWrap>
        <STextWrap>
          <h1>LIVING IN</h1>
          <h2>BELSELE</h2>
        </STextWrap>
      </SSection>
      <SSkewY />
      <Projects />
    </Layout>
  )
}

export default IndexPage
