import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('Footer', () => {
  test('muestra la información institucional', () => {
    render(<Footer />)

    expect(screen.getByText(/Universidad de las Fuerzas Armadas ESPE/i)).toBeInTheDocument()
  })

  test('muestra el año actual dinámicamente', () => {
    render(<Footer />)

    const anioActual = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(anioActual))).toBeInTheDocument()
  })
})
