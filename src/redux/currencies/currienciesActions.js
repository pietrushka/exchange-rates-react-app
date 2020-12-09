import axios from 'axios'

export const getCurrencies = (tableType) => async dispatch => {
  try {
    dispatch({
      type: 'FETCH_CURRENCIES_START'
    })

    const response = await axios.get(`http://api.nbp.pl/api/exchangerates/tables/${tableType}`)
    const currencies = response.data[0].rates

    dispatch({
      type: 'FETCH_CURRENCIES_SUCCESS',
      payload: {
        currencies
      }
    })
  } catch (error) {
    dispatch({
      type: 'FETCH_CURRENCIES_FAILURE'
    })
  }
}
