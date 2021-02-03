import React from 'react'
import Img from 'gatsby-image'
import { SingleCardContainer, Header, BackButton } from './components'
import { Link } from 'gatsby'

const SingleEmployee = ({ employee }) => {
  const { name, subtitle, description, profile_image } = employee
  return (
    <>
      <Header />
      <BackButton>
        <Link to="/ueber-uns">&#8592;</Link>
      </BackButton>
      <SingleCardContainer>
        <div className="single_card">
          <div className="image">
            <Img
              fluid={profile_image.localFile.childImageSharp.fluid}
              alt={name.text}
            />
          </div>
          <p className="subtitle">{subtitle.text}</p>
          <h1 className="name">{name.text}</h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description.html }}
          />
        </div>
      </SingleCardContainer>
    </>
  )
}

export default SingleEmployee
