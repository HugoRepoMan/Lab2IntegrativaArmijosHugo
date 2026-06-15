import { render, screen } from '@testing-library/react'
import { PersonajeCard } from './personaje-card'

describe('PersonajeCard', () => {
  test('muestra correctamente el nombre del personaje', () => {
    render(
      <PersonajeCard
        nombre="Rick Sanchez"
        especie="Humano"
        imagen="rick.png"
      />
    )

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
  })

  test('muestra la especie y la imagen del personaje', () => {
    render(
      <PersonajeCard
        nombre="Morty Smith"
        especie="Human"
        imagen="morty.png"
      />
    )

    expect(screen.getByText('Human')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Morty Smith' })).toHaveAttribute('src', 'morty.png')
  })
})
