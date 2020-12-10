import styled from '@emotion/styled'

import CurrenciesSection from './components/CurrenciesSection'
import FollowedSection from './components/FollowedSection'

function App () {
  return (
    <PageContainer>
      <AppContainer>
        <FollowedSection />
        <CurrenciesSection />
      </AppContainer>
    </PageContainer>
  )
}

export default App

const PageContainer = styled.div`
  font-size: 1rem;
  padding: .5em;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`

const AppContainer = styled.div`
  box-sizing: border-box;
  min-height: calc(100vh - 1em);
  font-size: inherit;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  max-width: 512px;

  @media (min-width: 1024px) {
    max-width: 1024px;
    grid-template-columns: 1fr 1fr;
  }
`
