import { combineReducers } from 'redux'

import currenciesReducer from './currencies/currenciesReducer'

const rootReducer = combineReducers({
  currencies: currenciesReducer
})

export default rootReducer
