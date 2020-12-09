import { useDispatch, useSelector } from 'react-redux'

import { getCurrencies } from './redux/currencies/currienciesActions'

function App () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.currencies)

  const fetchData = () => {
    dispatch(getCurrencies('A'))
  }

  return (
    <>
      <button onClick={fetchData}>Fetch table</button>
      {
        state.currencies.map(({ currency, code }) => (
          <p key={code}>{currency}</p>
        ))
      }
    </>
  )
}

export default App
