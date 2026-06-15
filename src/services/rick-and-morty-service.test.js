import { afterEach, describe, expect, test, vi } from 'vitest'
import { obtenerPersonajes } from './rick-and-morty-service'

describe('obtenerPersonajes', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('retorna la colección de personajes cuando la respuesta es correcta', async () => {
    const personajes = [{ id: 1, name: 'Rick Sanchez', species: 'Human', image: 'rick.png' }]

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: personajes })
      })
    )

    await expect(obtenerPersonajes()).resolves.toEqual(personajes)
  })

  test('lanza un error cuando la API responde incorrectamente', async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false }))

    await expect(obtenerPersonajes()).rejects.toThrow('No se pudo obtener la información de los personajes')
  })
})
