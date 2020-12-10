import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrencies } from '../redux/currencies/currienciesActions'
import SectionHeading from './SectionHeading'
import CurrenciesList from './CurrenciesList'
import styled from '@emotion/styled'

function CurrenciesSection () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.currencies)

  useEffect(() => {
    dispatch(getCurrencies())
  }, [dispatch])

  return (
    <CurrenciesSectionContainer>
      <SectionHeading text='Wszystkie waluty' />
      {
        state.loading ? (
          <StyledParagraph>Ładuję ...</StyledParagraph>
        ) : (
          <CurrenciesList currencies={state.currencies} />
        )
      }
    </CurrenciesSectionContainer>
  )
}

export default CurrenciesSection

const CurrenciesSectionContainer = styled.section`
  background-color: var(--white);
  border-radius: 1em;
  padding: 1em;
  box-sizing: border-box;
  
  @media (min-width: 1024px) {
    overflow-y: auto;
    max-height: calc(100vh - 1em);
    grid-column-start: 1;
    grid-row-start: 1;

    &::-webkit-scrollbar { /*Chrome and Opera */
      display: none;
    }
    &::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`

const StyledParagraph = styled.p`
  margin-bottom: 0;
`
