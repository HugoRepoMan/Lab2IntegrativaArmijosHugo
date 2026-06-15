import { render, screen } from '@testing-library/react'
import { FaCode } from 'react-icons/fa'
import { MateriaItem } from './materia-item'

describe('MateriaItem', () => {
  test('muestra correctamente la asignatura', () => {
    render(
      <MateriaItem
        icono={<FaCode data-testid="icono-materia" />}
        nombre="Programación Web"
        descripcion="Desarrollo Frontend"
      />
    )

    expect(screen.getByText('Programación Web')).toBeInTheDocument()
  })

  test('muestra la descripción y el icono recibido', () => {
    render(
      <MateriaItem
        icono={<FaCode data-testid="icono-materia" />}
        nombre="React"
        descripcion="Componentes reutilizables"
      />
    )

    expect(screen.getByText('Componentes reutilizables')).toBeInTheDocument()
    expect(screen.getByTestId('icono-materia')).toBeInTheDocument()
  })
})
