import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import cv from '../images/cv.pdf'
import Save from '../images/save.svg'

// styles
const SCVWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 40px;
  margin-bottom: 15vh;

  border-radius: 50px;
  background: #151515;
  box-shadow: 41px 41px 100px #101010, -41px -41px 100px #1a1a1a;

  @media (min-width: 1020px) {
    flex-direction: row;
  }

  @media (max-width: 1020px) {
    div:nth-child(1) {
      margin-bottom: 20vh;
    }
  }
`

const BaseWrapper = styled.div`
  max-width: 60vw;
  font-weight: 100;

  h2 {
    text-transform: uppercase;
    margin-bottom: 10vh;
  }

  h3 {
    margin: 60px 0 10px;
  }

  p {
    color: #aaa7a7;
  }
`

const SIndentedP = styled.p`
  margin: 10px 0 0 20px;
`

const SEducationWrapper = styled(BaseWrapper)`
  /* background-color: salmon; */
`

const SWorkWrapper = styled(BaseWrapper)`
  /* background-color: lightpink; */
`

const SDownloadCV = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

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
const CvPage = () => {
  return (
    <Layout>
      <SEO title="CV" />
      <SDownloadCV>
        <a href={cv}>
          <img src={Save} alt="Download cv" />
        </a>
      </SDownloadCV>
      <SCVWrapper>
        {/* Education */}
        <SEducationWrapper>
          <h2>/Education</h2>

          <h3>_Vdab & Obelisk</h3>
          <p>.Net developer with C# | Currently enrolled</p>
          <SIndentedP>
            SQL, UML, C#, Entity framework, ASP.NET (Core) MVC,REST, Test driven
            development, GUI with WPF, HTML,CSS, Javascript, AngularJS, GIT,
            SCRUM
          </SIndentedP>

          <h3>_Multimedia 3rd degree</h3>
          <p>VISO Gent | 2004 to 2006</p>

          <h3>_Mechanical techniques 2nd degree</h3>
          <p>Sint-Joris Bazel | 2002 to 2004</p>

          <h3>_Industrial sciences 2nd degree</h3>
          <p>VTS2 Sint-Niklaas | 2000 to 2002</p>
        </SEducationWrapper>

        {/* Work experience */}
        <SWorkWrapper>
          <h2>/Work</h2>

          <h3>_Developer</h3>
          <p>Puls | 2020 to 2020</p>
          <SIndentedP>Worked on in-house framework.</SIndentedP>

          <h3>_Technical Draftsman</h3>
          <p>Admibo bvba | 2017 to 2020</p>
          <SIndentedP>
            Drawing surfaces for road works and diversions. Staying incontact
            with the customers to make adjustments.
          </SIndentedP>

          <h3>_3D Printing</h3>
          <p>Materialise | 2015 to 2017</p>
          <SIndentedP>
            Accepting orders and working with 3D printed materialsfrom start to
            finish.
          </SIndentedP>

          <h3>_HVAC Installer</h3>
          <p>T.L. bvba & Borcalor NV | 2007 to 2014</p>
          <SIndentedP>
            Install, repair, replace and maintain HVAC systems for homesand
            businesses in many different types of buildings.
          </SIndentedP>
        </SWorkWrapper>
      </SCVWrapper>
    </Layout>
  )
}

export default CvPage
