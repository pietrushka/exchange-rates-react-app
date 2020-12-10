import { combineReducers } from 'redux'

import currenciesReducer from './currencies/currenciesReducer'
import followedReducer from './followed/followedReducer'

const rootReducer = combineReducers({
  currencies: currenciesReducer,
  followed: followedReducer
})

export default rootReducer
