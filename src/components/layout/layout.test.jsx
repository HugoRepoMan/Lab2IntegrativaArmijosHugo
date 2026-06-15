import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './layout'

describe('Layout', () => {
  test('renderiza el contenido hijo dentro del área principal', () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>Contenido de prueba</h1>
        </Layout>
      </BrowserRouter>
    )

    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument()
  })

  test('incluye Header y Footer en la estructura general', () => {
    render(
      <BrowserRouter>
        <Layout>
          <p>Aplicación de prueba</p>
        </Layout>
      </BrowserRouter>
    )

    expect(screen.getByText('Laboratorio React')).toBeInTheDocument()
    expect(screen.getByText(/ESPE/i)).toBeInTheDocument()
  })
})
