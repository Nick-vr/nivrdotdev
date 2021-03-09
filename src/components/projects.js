import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

// styles
const SContainer = styled.section`
  margin: 50vh 0 30vh;
`

const SKetelfixer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    margin-left: 50px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const SInfoWrap = styled.div`
  flex-direction: row;
  h4 {
    margin: 20px 0;
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
`
// markup
const Projects = () => {
  return (
    <SContainer>
      <SKetelfixer>
        <SInfoWrap>
          <h3>
            KETELFIXER <span>/WEB</span>
          </h3>
          <a
            href="https://www.ketelfixer.be"
            rel="noreferrer noopener"
            target="_blank"
          >
            <h4>ketelfixer.be</h4>
          </a>
        </SInfoWrap>
        <StaticImage
          src="../images/ketelfixer.png"
          alt="Ketelfixer preview"
          placeholder="blurred"
          layout="constrained"
          width={250}
        />
      </SKetelfixer>
    </SContainer>
  )
}
export default Projects
