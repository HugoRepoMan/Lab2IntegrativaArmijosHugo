import { render, screen } from '@testing-library/react'
import { ConceptoCard } from './concepto-card'

describe('ConceptoCard', () => {
  test('muestra correctamente el título recibido por props', () => {
    render(
      <ConceptoCard
        titulo="React"
        descripcion="Biblioteca para construir interfaces"
        imagen="react.png"
      />
    )

    expect(screen.getByText('React')).toBeInTheDocument()
  })

  test('muestra la descripción y la imagen del concepto', () => {
    render(
      <ConceptoCard
        titulo="CSS Modules"
        descripcion="Encapsula estilos por componente"
        imagen="css.png"
      />
    )

    expect(screen.getByText('Encapsula estilos por componente')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'CSS Modules' })).toHaveAttribute('src', 'css.png')
  })
})
