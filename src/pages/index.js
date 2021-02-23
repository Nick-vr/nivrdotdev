import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

// styles
const Main = styled.main`
  display: flex;
`
// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1>SOFTWARE</h1>
      <h1>DEVELOPER AT</h1>
    </Layout>
  )
}

export default IndexPage
