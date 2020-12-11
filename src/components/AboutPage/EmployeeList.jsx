import React from 'react'
import { Header, CardContainer, Card } from './components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

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
            <Card key={name.text}>
              <div className="image">
                <Img
                  fluid={profile_image.localFile.childImageSharp.fluid}
                  alt={name.text}
                />
              </div>
              <h4 className="subtitle">{subtitle.text}</h4>
              <h2 className="name">{name.text}</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: description.html }}
              ></div>
              <div className="page_link_container">
                <Link to={page_link.text} className="page_link">
                  &#8594;
                </Link>
              </div>
            </Card>
          )
        })}
      </CardContainer>
    </>
  )
}

export default EmployeeList
