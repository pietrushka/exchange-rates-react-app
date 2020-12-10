import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { AiOutlineClear } from 'react-icons/ai'

import { getFollowed, clearFollowed } from '../redux/followed/followedActions'
import SectionHeading from './SectionHeading'
import CurrenciesList from './CurrenciesList'
import Modal from './Modal'

function FollowedSection () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.followed)
  const modalRef = useRef()

  useEffect(() => {
    dispatch(getFollowed())
  }, [dispatch])

  return (
    <FollowedSectionContainer>
      <SectionHeading text='Obserwowane waluty' />
      {
        state.loading ? (
          <StyledParagraph>Ładuję ...</StyledParagraph>
        ) : (
          <>
            {
              state.followedData.length > 0 ? (
                <>
                  <ClearBtn onClick={() => modalRef.current.open()}>
                    Wyczyść obserwowane <AiOutlineClear />
                  </ClearBtn>
                  <CurrenciesList currencies={state.followedData} />
                  <Modal
                    ref={modalRef}
                    acceptFunction={() => dispatch(clearFollowed())}
                    modalText='Na pewno chcesz usunąć wszystkie waluty z obserwowanych?'
                  />
                </>
              ) : (
                <StyledParagraph>Dodaj waluty do obserwowanych</StyledParagraph>
              )
            }
          </>
        )
      }
    </FollowedSectionContainer>
  )
}

export default FollowedSection

const FollowedSectionContainer = styled.section`
  background-color: var(--white);
  border-radius: 1em;
  padding: 1em;
  overflow-y: auto;
  height: fit-content;
  box-sizing:border-box;
  
  @media (min-width: 1024px) {
    max-height: calc(100vh - 1em);

    &::-webkit-scrollbar { /*Chrome and Opera */
      display: none;
    }
    
    &::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`

const ClearBtn = styled.button`
  font-size: .7em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--black);
  color: var(--white);
  border: 2px solid var(--black);
  margin-top: 1em;
  padding: .25em .5em;
  border-radius: .25em;
  background: var(--black);
  border: 2px solid var(--black);
  color: var(--white);
  cursor: pointer;

  svg {
    font-size: inherit;
    height: 1em;
    width: 1em;
    margin-left: .25em;
  }
`

const StyledParagraph = styled.p`
  margin-bottom: 0;
`
