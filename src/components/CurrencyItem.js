import { useRef } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { addFollowed, removeFollowed } from '../redux/followed/followedActions'
import Modal from './Modal'

function CurrencyItem ({ currencyData: { currency, code, mid }, isFollowed }) {
  const dispatch = useDispatch()
  const modalRef = useRef()

  return (
    <>
      <ListItem
        initial={{
          y: 50,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3
          }
        }}
        exit={{
          y: 50,
          opacity: 0,
          transition: {
            duration: 0.2
          }
        }}
      >
        <NameGroup>
          <CurrencyCode>{code}</CurrencyCode>
          <CurrencyName>{currency}</CurrencyName>
        </NameGroup>
        <PriceSpan>{mid} pln</PriceSpan>
        {
          isFollowed ? (
            <StarBtn onClick={() => modalRef.current.open()}>
              <AiFillStar />
            </StarBtn>
          ) : (
            <StarBtn onClick={() => dispatch(addFollowed({ currency, code, mid }))}>
              <AiOutlineStar />
            </StarBtn>
          )
        }
      </ListItem>
      <Modal
        ref={modalRef}
        acceptFunction={() => dispatch(removeFollowed(code))}
        modalText={`Na pewno chcesz usunąć ${code} z obserwowanych?`}
      />
    </>
  )
}

export default CurrencyItem

const ListItem = styled(motion.li)`
  font-size: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;
  margin-bottom: 0;

  :first-of-type {
    margin-top: .25em;
  }
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
  outline: 0;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    max-width: 40px;
    max-height: 40px;
  }
`
