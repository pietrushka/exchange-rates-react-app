import styled from '@emotion/styled'

import CurrenciesSection from './components/CurrenciesSection'

function App () {
  return (
    <PageContainer>
      <AppContainer>
        <CurrenciesSection />
      </AppContainer>
    </PageContainer>
  )
}

export default App

const PageContainer = styled.div`
  font-size: 1rem;
  padding: .5em;
`

const AppContainer = styled.div`
  box-sizing: border-box;
  background-color: var(--white);
  min-height: calc(100vh - 1em);
  border-radius: 1em;
  font-size: inherit;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em;

`
