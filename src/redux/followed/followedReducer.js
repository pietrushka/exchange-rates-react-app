import {
  addCurrencyToFollowed,
  removeCurrencyFromFollowed
} from './followedUtils'

const INITIAL_STATE = {
  loading: false,
  followed: []
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

  return newState
}

export default followedReducer
