import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/link">teste</LinkWrapper>)

    const children = screen.getByText(/teste/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/link')
  })
})
