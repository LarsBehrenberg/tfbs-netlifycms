import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.button};
  padding: 10px 16px;
  background: #ffffff;
  border-radius: 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  > div {
    display: inline-block;
    width: 22px;
    height: 22px;
    padding-left: 8px;
    margin-right: 10px;
    border-radius: 50%;
    /* transform: translateY(-3px); */
    background: ${props => props.theme.colors.primaryDark};

    svg {
      margin-top: 4px;
    }
  }

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blackLight};
  }

  &:hover {
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
  }
`

const StyledWebLink = styled.a`
  color: ${({ theme }) => theme.colors.button};
  padding: 10px 16px;
  background: #ffffff;
  border-radius: 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);

  > div {
    display: inline-block;
    width: 22px;
    height: 22px;
    padding-left: 8px;
    margin-right: 10px;
    border-radius: 50%;
    /* transform: translateY(-3px); */
    background: ${props => props.theme.colors.primaryDark};

    svg {
      margin-top: 4px;
    }
  }

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blackLight};
  }

  &:hover {
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3);
  }
`

const Button = ({ to = '/', weblink = false, children = 'Unser Angebot' }) => {
  return weblink === false ? (
    <StyledLink to={to}>
      <div>
        <svg
          width="8"
          height="12"
          viewBox="0 0 13 19"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 9.5L0 19L0 0L13 9.5Z"
            fill="white"
          />
        </svg>
      </div>
      <span>{children}</span>
    </StyledLink>
  ) : (
    <StyledWebLink href={to} target="_blank" rel="noopener noreferrer">
      <div>
        <svg
          width="8"
          height="12"
          viewBox="0 0 13 19"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 9.5L0 19L0 0L13 9.5Z"
            fill="white"
          />
        </svg>
      </div>
      <span>{children}</span>
    </StyledWebLink>
  )
}

export default Button
