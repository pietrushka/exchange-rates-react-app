import { getFollowedData } from './followedUtils'

export const getFollowed = (followed) => async (dispatch, getState) => {
  const { followed } = getState().followed

  try {
    dispatch({
      type: 'FETCH_FOLLOWED_START'
    })

    const followedData = await getFollowedData(followed)

    dispatch({
      type: 'FETCH_FOLLOWED_SUCCESS',
      payload: {
        followedData
      }
    })
  } catch (error) {
    dispatch({
      type: 'FETCH_FOLLOWED_FAILURE'
    })
  }
}

export const addFollowed = currencyData => ({
  type: 'ADD_FOLLOWED',
  payload: currencyData
})

export const removeFollowed = code => ({
  type: 'REMOVE_FOLLOWED',
  payload: {
    code
  }
})

export const clearFollowed = code => ({
  type: 'CLEAR_FOLLOWED'
})
