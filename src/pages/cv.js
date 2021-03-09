import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import cv from '../images/cv.pdf'

// styles

// markup
const CvPage = () => {
  return (
    <Layout>
      <SEO title="CV" />
      <h1>CV</h1>
    </Layout>
  )
}

export default CvPage
