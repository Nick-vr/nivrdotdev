import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

// styles
const SContainer = styled.section`
  background-color: red;
  margin-top: 50vh;
  height: 800px;
`

const Sketelfixer = styled.div`
  display: flex;
  span {
    margin-left: 50px;
  }
`

const SInfoWrap = styled.div`
  flex-direction: row;
`
// markup
const Projects = () => {
  return (
    <SContainer>
      <Sketelfixer>
        <SInfoWrap>
          <h1>
            KETELFIXER <span>//WEB</span>
          </h1>
          <h2>
            <a href="https://www.ketelfixer.be">ketelfixer.be</a>
          </h2>
        </SInfoWrap>
        <StaticImage
          src="../../images/ketelfixer.png"
          alt="Ketelfixer preview"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </Sketelfixer>
    </SContainer>
  )
}
export default Projects
