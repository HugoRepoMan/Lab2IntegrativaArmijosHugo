import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './header'

describe('Header', () => {
  test('muestra el título de la aplicación', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByText('Laboratorio React')).toBeInTheDocument()
  })

  test('muestra los enlaces del menú principal', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Nosotros' })).toHaveAttribute('href', '/nosotros')
    expect(screen.getByRole('link', { name: 'Contactos' })).toHaveAttribute('href', '/contactos')
    expect(screen.getByRole('link', { name: 'Personajes' })).toHaveAttribute('href', '/personajes')
  })
})
