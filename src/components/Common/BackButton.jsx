import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledBackButton = styled(Link)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;

  display: grid;
  place-content: center;

  color: ${props => props.theme.colors.primaryDark};

  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.colors.primaryLight};
  }
`

const Backbutton = ({ to = '/' }) => (
  <StyledBackButton to={to}>&#8592;</StyledBackButton>
)

export default Backbutton
