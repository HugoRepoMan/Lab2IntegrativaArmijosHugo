import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { PersonajesPage } from './personajes'

describe('PersonajesPage', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: [
              {
                id: 1,
                name: 'Rick Sanchez',
                species: 'Human',
                image: 'rick.png'
              }
            ]
          })
      })
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('muestra el mensaje de carga inicialmente', () => {
    render(<PersonajesPage />)

    expect(screen.getByText('Cargando personajes...')).toBeInTheDocument()
  })

  test('carga personajes desde la API y los muestra en pantalla', async () => {
    render(<PersonajesPage />)

    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Human')).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character')
  })

  test('muestra un mensaje de error si falla la consulta', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false
      })
    )

    render(<PersonajesPage />)

    await waitFor(() => {
      expect(screen.getByText('No se pudo obtener la información de los personajes')).toBeInTheDocument()
    })
  })
})
