import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;

  .breadcrumb_title {
    margin: 0;
    font-size: 1.25rem;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .breadcrumbs {
      margin: 0 auto;
      text-align: center;
      line-height: 1.4rem;
    }
  }

  .breadcrumbs a,
  .breadcrumbs span {
    color: #00000060;
    text-shadow: none;
    background: none;
  }

  .breadcrumbs a:hover {
    color: #00000099;
  }
`

const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: absolute;
  background: #f2f2f2;
  z-index: 1;
`

const BreadCrumb = ({ currentPageTitle = 'apoCoaching', skillPage = true }) => (
  <Container>
    <FlexWrapper>
      <span className="breadcrumb_title">{currentPageTitle}</span>
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        {skillPage ? (
          <>
            <Arrow />
            <Link to="/leistungen">Leistungen</Link>
          </>
        ) : null}
        <Arrow />
        <span>{currentPageTitle}</span>
      </div>
    </FlexWrapper>
    <Background />
  </Container>
)

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    fill="none"
    viewBox="0 0 8 8"
    style={{ margin: '0 8px' }}
  >
    <g clipPath="url(#clip0)">
      <path
        fill="#000"
        fillOpacity="0.4"
        d="M6.116 4.396l-3.44 3.44a.56.56 0 11-.792-.792L4.928 4 1.884.956a.56.56 0 01.792-.792l3.44 3.44a.558.558 0 010 .792z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H8V8H0z"></path>
      </clipPath>
    </defs>
  </svg>
)

export default BreadCrumb
