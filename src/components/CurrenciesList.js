import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import CurrencyItem from './CurrencyItem'

function CurrenciesList ({ currencies, displayClearBtn }) {
  const state = useSelector(state => state.followed)

  return (
    <ListContainer>
      <ListHead>
        <NameTag>Nazwa:</NameTag>
        <PriceTag>Cena:</PriceTag>
        <Block />
      </ListHead>
      <StyledList>
        <AnimatePresence>
          {
            currencies.map(currencyData => (
              <CurrencyItem
                key={currencyData.code}
                currencyData={currencyData}
                isFollowed={state.followed.includes(currencyData.code)}
              />
            ))
          }
        </AnimatePresence>
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
  margin-top: 1em;;
  font-size: .9em;
  color: var(--grey);
`

const NameTag = styled.span`
  font-size: inherit;
  width: 40%;
`

const PriceTag = styled.span`
  font-size: inherit;
  width: 25%;
  text-align: center;
`

const Block = styled.div`
  width: 10%;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: inherit;  
`
