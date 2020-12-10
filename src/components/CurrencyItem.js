import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { addFollowed, removeFollowed } from '../redux/followed/followedActions'

function CurrencyItem ({ currencyData: { currency, code, mid }, isFollowed }) {
  const dispatch = useDispatch()

  return (
    <ListItem>
      <NameGroup>
        <CurrencyCode>{code}</CurrencyCode>
        <CurrencyName>{currency}</CurrencyName>
      </NameGroup>
      <PriceSpan>{mid}</PriceSpan>
      {
        isFollowed ? (
          <StarBtn onClick={() => dispatch(removeFollowed(code))}>
            <AiFillStar />
          </StarBtn>
        ) : (
          <StarBtn onClick={() => dispatch(addFollowed(code))}>
            <AiOutlineStar />
          </StarBtn>
        )
      }
    </ListItem>
  )
}

export default CurrencyItem

const ListItem = styled.li`
  font-size: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;
`

const NameGroup = styled.div`
  width: 40%;
  font-size: inherit;
`

const CurrencyCode = styled.span`
  display: block;
  font-size: inherit;
  font-weight: 600;
`

const CurrencyName = styled.span`
  display: block;
  color: var(--grey);
  font-size: .75em;
`

const PriceSpan = styled.span`
  width: 25%;
  text-align: center;
`

const StarBtn = styled.button`
  width: 10%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;


  svg {
    width: 100%;
    height: 100%;
  }
`
