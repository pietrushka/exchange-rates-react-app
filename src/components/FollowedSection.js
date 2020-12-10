import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFollowed } from '../redux/followed/followedActions'
import SectionHeading from './SectionHeading'
import CurrenciesList from './CurrenciesList'

function FollowedSection () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.followed)

  useEffect(() => {
    dispatch(getFollowed())
  }, [dispatch])

  return (
    <>
      <SectionHeading text='Obserwowane waluty' />
      <CurrenciesList currencies={state.followedData} />
    </>
  )
}

export default FollowedSection
