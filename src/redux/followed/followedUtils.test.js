import {
  addCurrencyToFollowed,
  removeCurrencyFromFollowed
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
