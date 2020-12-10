import axios from 'axios'

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

export const addCurrencyToFollowedData = (followedData, currencyDataToAdd) => {
  const existingFollowed = followedData.find(
    followedCurrency => followedCurrency === currencyDataToAdd
  )

  if (existingFollowed) return followedData

  return [currencyDataToAdd, ...followedData]
}

export const removeCurrencyFromFollowedData = (followedData, currencyToRemove) => {
  return followedData.filter(followedCurrencyData => followedCurrencyData.code !== currencyToRemove)
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

export async function getFollowedData (followed) {
  let data = []

  const getCurrencyData = async (code) => {
    const res = await axios.get(`https://api.nbp.pl/api/exchangerates/rates/A/${code}`)

    return {
      code,
      currency: res.data.currency,
      mid: res.data.rates[0].mid
    }
  }

  const requests = followed.map(code => getCurrencyData(code))

  await Promise.all(requests).then((values) => {
    data = values
  })

  return data
}
