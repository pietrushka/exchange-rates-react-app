export const ITEM_NAME = 'NBP_EXCHANGE_RATES_DATA'

export const addCurrencyToFollowed = (followed, currencyToAdd) => {
  const existingFollowed = followed.find(
    followedCurrency => followedCurrency === currencyToAdd
  )

  if (existingFollowed) return followed

  return [currencyToAdd, ...followed]
}

export const removeCurrencyFromFollowed = (followed, currencyToRemove) => {
  return followed.filter(followedCurrency => followedCurrency !== currencyToRemove)
}

export const getStoredData = () => {
  if (!window.localStorage.getItem(ITEM_NAME)) {
    return {}
  }

  const storedData = {}

  try {
    const rawData = JSON.parse(window.localStorage.getItem(ITEM_NAME))

    if (Object.hasOwnProperty.call(rawData, 'followed')) {
      if (Array.isArray(rawData.followed)) {
        for (const currency of rawData.followed) {
          if (typeof currency !== 'string') {
            throw new Error('Invalid stored data')
          }
        }

        storedData.followed = rawData.followed
      } else {
        throw new Error('Invalid stored data')
      }
    }
  } catch (error) {
    console.error(`Error occured: ${error.message}. Stored data will be deleted.`)
    window.localStorage.removeItem(ITEM_NAME)
  }

  return storedData
}

export function storeFollowed (followed) {
  window.localStorage.setItem(
    ITEM_NAME,
    JSON.stringify({
      followed
    })
  )
}
