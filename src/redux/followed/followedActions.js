export const addFollowed = code => ({
  type: 'ADD_FOLLOWED',
  payload: {
    code
  }
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
