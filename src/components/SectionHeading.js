import styled from '@emotion/styled'

function SectionHeading ({ text }) {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default SectionHeading

const StyledHeading = styled.h2`
  margin: 0;
`
