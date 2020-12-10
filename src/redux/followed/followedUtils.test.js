import {
  addCurrencyToFollowed,
  removeCurrencyFromFollowed,
  ITEM_NAME,
  getStoredData,
  storeFollowed,
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
})

describe('followed storage', () => {
  test('stores followed', () => {
    storeFollowed([]);
    expect(localStorage.getItem(ITEM_NAME)).toBe('{"followed":[]}');
  });

  test('reads board', () => {
    localStorage.setItem(ITEM_NAME, '{"followed":[]}')
    expect(getStoredData()).toMatchObject({followed: []});
  });

  test('discards invalid board data', () => {
    localStorage.setItem(ITEM_NAME, '{"followed":"wrong"}');
    expect(getStoredData()).toMatchObject({});
  });
});