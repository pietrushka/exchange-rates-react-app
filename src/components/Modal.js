import { forwardRef, useState, useImperativeHandle } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = forwardRef(({ modalText, acceptFunction }, ref) => {
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  const acceptRemoving = () => {
    setOpen(false)
    setTimeout(() => {
      acceptFunction()
    }, 200)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <ModalBackground
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2
              }
            }}
            onClick={() => setOpen(false)}
          />
          <ModalWrapper
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              scale: 0,
              transition: {
                duration: 0.2
              }
            }}
          >
            <ModalText>{modalText}</ModalText>
            <BtnsContainer>
              <AcceptBtn onClick={acceptRemoving}>Tak, usuń</AcceptBtn>
              <CancelBtn onClick={() => setOpen(false)}>Ups, to pomyłka</CancelBtn>
            </BtnsContainer>
          </ModalWrapper>
        </>
      )}
    </AnimatePresence>
  )
})

export default Modal

const ModalBackground = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
`

const ModalWrapper = styled(motion.div)`
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
  max-width: 400px;

  @media (min-width: 1024px) {
    font-size: 1.25rem
  }
`

const ModalText = styled.p`
  font-size: inherit;
  text-align: center;
`

const BtnsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
`

const AcceptBtn = styled.button`
  font-size: inherit;
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
  font-size: inherit;
`
