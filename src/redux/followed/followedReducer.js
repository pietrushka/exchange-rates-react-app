import {
  addCurrencyToFollowed,
  removeCurrencyFromFollowed,
  getStoredData,
  storeFollowed,
} from './followedUtils'

const storedFollowed = getStoredData().followed

const INITIAL_STATE = {
  loading: false,
  followed: storedFollowed || []
}

const followedReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  const newState = { ...state }

  switch (type) {
    case 'ADD_FOLLOWED':
      newState.followed = addCurrencyToFollowed(state.followed, payload.code)
      break

    case 'REMOVE_FOLLOWED':
      newState.followed = removeCurrencyFromFollowed(state.followed, payload.code)
      break

    case 'CLEAR_FOLLOWED':
      newState.followed = []
      break

    default:
      return state
  }

  storeFollowed(newState.followed)
  return newState
}

export default followedReducer
