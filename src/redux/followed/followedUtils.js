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
