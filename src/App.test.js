import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Exchange-rates', () => {
  render(<App />)
  const textElement = screen.getByText('Exchange-rates')
  expect(textElement).toBeInTheDocument()
})
