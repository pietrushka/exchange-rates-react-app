import {
  addCurrencyToFollowed,
  removeCurrencyFromFollowed,
  ITEM_NAME,
  getStoredData,
  storeFollowed,
  addCurrencyToFollowedData,
  removeCurrencyFromFollowedData
} from './followedUtils'

describe('followed', () => {
  it('adds currency to followed', () => {
    const newFollowed = addCurrencyToFollowed(['AUD', 'CAD'], 'USD')
    expect(newFollowed).toEqual(['USD', 'AUD', 'CAD'])
  })

  it('removes currency from followed', () => {
    const newFollowed = removeCurrencyFromFollowed(['USD', 'AUD', 'CAD'], 'AUD')
    expect(newFollowed).toEqual(['USD', 'CAD'])
  })

  it('adds currencyData to followedData', () => {
    const newFollowed = addCurrencyToFollowedData([{ code: 'AUD' }, { code: 'CAD' }], { code: 'USD' })
    expect(newFollowed).toEqual([{ code: 'USD' }, { code: 'AUD' }, { code: 'CAD' }])
  })

  it('removes currencyData from followedData', () => {
    const newFollowed = removeCurrencyFromFollowedData([{ code: 'AUD' }, { code: 'CAD' }, { code: 'USD' }], 'AUD' )
    expect(newFollowed).toEqual([{ code: 'CAD' }, { code: 'USD' }])
  })
})

describe('followed storage', () => {
  test('stores followed', () => {
    storeFollowed([])
    expect(window.localStorage.getItem(ITEM_NAME)).toBe('{"followed":[]}')
  })

  test('reads board', () => {
    window.localStorage.setItem(ITEM_NAME, '{"followed":[]}')
    expect(getStoredData()).toMatchObject({ followed: [] })
  })

  test('discards invalid board data', () => {
    window.localStorage.setItem(ITEM_NAME, '{"followed":"wrong"}')
    expect(getStoredData()).toMatchObject({})
  })
})
