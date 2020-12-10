import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

import CurrencyItem from './CurrencyItem'

function CurrenciesList ({ currencies, displayClearBtn }) {
  const state = useSelector(state => state.followed)

  console.log({ state })
  return (
    <ListContainer>
      <ListHead>
        <NameTag>Nazwa:</NameTag>
        <PriceTag>Cena:</PriceTag>
        <BtnContainer displayClearBtn={displayClearBtn}>
          {
            displayClearBtn && <ClearBtn>Wyczyść</ClearBtn>
          }
        </BtnContainer>
      </ListHead>
      <StyledList>
        {
          currencies.map(currencyData => (
            <CurrencyItem
              key={currencyData.code}
              currencyData={currencyData}
              isFollowed={state.followed.includes(currencyData.code)}
            />
          ))
        }
      </StyledList>
    </ListContainer>
  )
}

export default CurrenciesList

const ListContainer = styled.div`
  font-size: 1rem;
`

const ListHead = styled.div`
  font-size: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;
`

const NameTag = styled.span`
  width: 40%;
`

const PriceTag = styled.span`
  width: 25%;
  text-align: center;
`

const BtnContainer = styled.div`
  width: 10%;
  ${({ displayClearBtn }) => !displayClearBtn ? 'visibility: hidden;' : ''}
`

const ClearBtn = styled.button``

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
`
