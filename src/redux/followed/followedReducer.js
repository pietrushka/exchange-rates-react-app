import {
  addCurrencyToFollowed,
  removeCurrencyFromFollowed,
  addCurrencyToFollowedData,
  removeCurrencyFromFollowedData,
  getStoredData,
  storeFollowed
} from './followedUtils'

const storedFollowed = getStoredData().followed

const INITIAL_STATE = {
  loading: false,
  followed: storedFollowed || [],
  followedData: []
}

const followedReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  const newState = { ...state }

  switch (type) {
    case 'FETCH_FOLLOWED_START':
      newState.loading = true
      break

    case 'FETCH_FOLLOWED_SUCCESS':
      newState.followedData = payload.followedData
      newState.loading = false
      break

    case 'FETCH_FOLLOWED_FAILURE':
      newState.loading = false
      break

    case 'ADD_FOLLOWED':
      newState.followed = addCurrencyToFollowed(state.followed, payload.code)
      newState.followedData = addCurrencyToFollowedData(state.followedData, payload)
      break

    case 'REMOVE_FOLLOWED':
      newState.followed = removeCurrencyFromFollowed(state.followed, payload.code)
      newState.followedData = removeCurrencyFromFollowedData(state.followedData, payload.code)
      break

    case 'CLEAR_FOLLOWED':
      newState.followed = []
      newState.followedData = []
      break

    default:
      return state
  }

  storeFollowed(newState.followed)
  return newState
}

export default followedReducer
