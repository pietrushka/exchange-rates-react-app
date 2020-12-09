const INITIAL_STATE = {
  loading: false,
  currencies: []
}

const currenciesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_CURRENCIES_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CURRENCIES_SUCCESS':
      return {
        ...state,
        loading: false,
        currencies: payload.currencies
      }
    case 'FETCH_CURRENCIES_FAILURE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default currenciesReducer
