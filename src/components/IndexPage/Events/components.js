import styled from '@emotion/styled'

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
`

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  .subtitle {
    text-transform: capitalize;
    margin-top: 0;
  }

  .title {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    margin-top: 0;
  }
`

export const EventWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: #93939320;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
