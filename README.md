# Laboratorio React - Pruebas Unitarias y CI/CD

Proyecto desarrollado para la práctica de laboratorio de Programación Integrativa de Componentes Web.

## Descripción

Este proyecto toma como base la aplicación React desarrollada en el laboratorio anterior e incorpora pruebas unitarias con Vitest, React Testing Library y Jest DOM. También incluye configuración para generar reportes de cobertura, construir la versión de producción y ejecutar un flujo básico de CI con GitHub Actions.

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Ejecutar pruebas

```bash
npm run test:run
```

## Ejecutar pruebas en modo observación

```bash
npm test
```

## Generar cobertura

```bash
npm run coverage
```

## Generar build de producción

```bash
npm run build
```

## Dependencias principales

- React
- Vite
- React Router DOM
- PropTypes
- React Icons
- Vitest
- React Testing Library
- Jest DOM
- Coverage V8

## Funcionalidades evaluadas

- Renderizado de componentes reutilizables.
- Validación de información recibida mediante Props.
- Componentes de estructura: Header, Footer y Layout.
- Página Personajes con consumo simulado de API REST.
- Pruebas automatizadas y reporte de cobertura.
- Configuración CI para pruebas y build en GitHub Actions.
