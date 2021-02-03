import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

// Icons
import { FaMedkit, FaHandshake, FaGraduationCap, FaMale } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'
import { HiUserGroup } from 'react-icons/hi'

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.media.sm}) {
    margin: 0 2rem;
  }
`

const SkillList = () => {
  return (
    <Container>
      <Link to="apocoaching">
        <div className="logo">
          <FaMedkit size="30px" color="#939393" />
        </div>
        <h5 className="skill-title">apoCoaching</h5>
      </Link>
      <Link to="/leistungen">
        <div className="logo">
          <FiRefreshCw size="27px" color="#939393" />
        </div>
        <h5>Supervision / Coaching</h5>
      </Link>
      <Link to="/leistungen">
        <div className="logo">
          <FaHandshake size="30px" color="#939393" />
        </div>
        <h5 className="skill-title">Beratung</h5>
      </Link>
      <Link to="/leistungen">
        <div className="logo">
          <FaGraduationCap size="30px" color="#939393" />
        </div>
        <h5 className="skill-title">Fortbildung</h5>
      </Link>
      <Link to="/leistungen">
        <div className="logo">
          <HiUserGroup size="30px" color="#939393" />
        </div>
        <h5 className="skill-title">Training</h5>
      </Link>
      <Link to="/leistungen">
        <div className="logo">
          <FaMale size="30px" color="#939393" />
        </div>
        <h5 className="skill-title">Psychotherapie</h5>
      </Link>
    </Container>
  )
}

export default SkillList
