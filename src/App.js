import styled from '@emotion/styled'

import CurrenciesSection from './components/CurrenciesSection'

function App () {
  return (
    <AppContainer>
      <CurrenciesSection />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  font-size: 1rem;
  max-width: 1024px;
  box-sizing: border-box;
  margin: .25em;
  padding: 1em;
  background-color: var(--white);
  border-radius: 1em;
  min-height: calc(100vh - .5em);
`
