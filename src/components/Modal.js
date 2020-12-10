import { forwardRef, useState, useImperativeHandle } from 'react'
import styled from '@emotion/styled'

const Modal = forwardRef(({ modalText, acceptFunction }, ref) => {
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  const acceptRemoving = () => {
    acceptFunction()
    setOpen(false)
  }

  return (
    <>
      {open && (
        <>
          <ModalBackground onClick={() => setOpen(false)} />
          <ModalWrapper>
            <ModalText>{modalText}</ModalText>
            <BtnsContainer>
              <AcceptBtn onClick={acceptRemoving}>Tak, usuń</AcceptBtn>
              <CancelBtn onClick={() => setOpen(false)}>Ups, to pomyłka</CancelBtn>
            </BtnsContainer>
          </ModalWrapper>
        </>
      )}
    </>
  )
})

export default Modal

const ModalBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
`

const ModalWrapper = styled.div`
  font-size: 1rem;
  position: fixed;
  box-sizing: border-box;
  width: 75vw;
  height: fit-content;
  background: var(--white);
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1em;
  border-radius: 1em;
`

const ModalText = styled.p`
  text-align: center;
`

const BtnsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
`

const AcceptBtn = styled.button`
  margin: 0;
  padding: .5em .75em;
  border-radius: .25em;
  background: var(--black);
  border: 2px solid var(--black);
  color: var(--white);
  cursor: pointer;
`

const CancelBtn = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--black);
  font-weight: 600;
  cursor: pointer;
`
