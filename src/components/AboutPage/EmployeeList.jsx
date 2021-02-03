import React from 'react'
import { Header, CardContainer, Card } from './components'
import Img from 'gatsby-image'

const EmployeeList = ({ employees }) => {
  return (
    <>
      <Header />
      <CardContainer>
        {employees.map((employee, index) => {
          const {
            name,
            subtitle,
            description,
            page_link,
            profile_image,
          } = employee

          return (
            <Card key={name.text} to={page_link.text}>
              <div className="image">
                <Img
                  fluid={profile_image.localFile.childImageSharp.fluid}
                  alt={name.text}
                />
              </div>
              <p className="subtitle">{subtitle.text}</p>
              <h5 className="name">{name.text}</h5>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: description.html }}
              ></div>
              <div className="page_link_container">
                <span>&#8594;</span>
              </div>
            </Card>
          )
        })}
      </CardContainer>
    </>
  )
}

export default EmployeeList
