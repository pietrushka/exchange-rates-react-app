import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrencies } from '../redux/currencies/currienciesActions'
import SectionHeading from './SectionHeading'
import CurrenciesList from './CurrenciesList'

function CurrenciesSection () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.currencies)

  useEffect(() => {
    dispatch(getCurrencies('A'))
  }, [])

  return (
    <>
      <SectionHeading text='Wszystkie waluty' />
      <CurrenciesList currencies={state.currencies} />
    </>
  )
}

export default CurrenciesSection
