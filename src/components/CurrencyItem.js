import styled from '@emotion/styled'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

function CurrencyItem ({ currencyData: { currency, code, mid }, isFavorite }) {
  return (
    <ListItem>
      <NameGroup>
        <CurrencyCode>{code}</CurrencyCode>
        <CurrencyName>{currency}</CurrencyName>
      </NameGroup>
      <PriceSpan>{mid}</PriceSpan>
      <StarContainer>
        {
          isFavorite ? <AiFillStar /> : <AiOutlineStar />
        }
      </StarContainer>
    </ListItem>
  )
}

export default CurrencyItem

const ListItem = styled.li`
  font-size: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;
`

const NameGroup = styled.div`
  width: 40%;
  font-size: inherit;
`

const CurrencyCode = styled.span`
  display: block;
  font-size: inherit;
  font-weight: 600;
`

const CurrencyName = styled.span`
  display: block;
  color: var(--grey);
  font-size: .75em;
`

const PriceSpan = styled.span`
  width: 25%;
  text-align: center;
`

const StarContainer = styled.div`
  width: 10%;
  svg {
    width: 100%;
    height: 100%;
  }
`
