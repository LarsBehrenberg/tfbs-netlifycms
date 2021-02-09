import React from 'react'
import Img from 'gatsby-image'
import { SingleCardContainer } from './components'
import { Header } from '../NeuigkeitenPage/components'
import { BackButton } from 'components'

const SingleEmployee = ({ employee }) => {
  const { name, subtitle, description, profile_image } = employee
  return (
    <>
      <Header>
        <div
          className="wrapper"
          style={{ padding: '2rem 1rem', height: '150px' }}
        >
          <BackButton to="/ueber-uns" />
        </div>
      </Header>

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
