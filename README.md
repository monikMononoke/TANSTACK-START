# LABORATORIO TANSTACK START - LISTADO DE CASAS

## Descripción

Aplicación web desarrollada con **TanStack Start** + **TanStack Router** que muestra una lista de casas en alquiler y permite navegar al detalle de cada casa. Consume un **API mock** para la obtención de datos e imágenes.

## Características

- **Routing file-based** - Rutas de listado y detalle gestionadas por TanStack Router.
- **Server Functions** - Carga de datos en el servidor mediante TanStack Start.
- **Client Components** - Componentes React para renderizado de listado y detalle.
- **TypeScript** - Tipado estático en todo el proyecto.
- **Tailwind CSS** - Estilos responsivos.
- **API Server** - Mock server con Hono para simular backend.

## Estructura del Proyecto

- `src/routes`: rutas file-based (inicio, listado de casas, detalle).
- `src/pods/house-list`: módulo de listado, componentes, mappers y llamadas a la API.
- `src/pods/house`: módulo de detalle de cada casa.
- `src/core/constants`: constantes.
- `api-server`: servidor mock que contiene datos e imágenes.

## Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/monikMononoke/TANSTACK-START.git
cd TANSTACK-START
```

2. **Instalar dependencias**

```bash
npm install
```

Esto instala dependencias de la app y del API mock (postinstall).

## 🚀 Ejecución

### Modo Desarrollo

Ejecuta tanto la app como el API mock simultáneamente:

```bash
npm start
```

Esto inicia:

- **Vite dev server**: http://localhost:3000
- **API server**: http://localhost:3001

### Solo App (Vite)

```bash
npm run start:dev
```

### Solo API Mock

```bash
npm run start:api-server
```

## Configuración

### Variables de Entorno

Las URLs de la API se leen desde [src/core/constants/env.constants.ts](src/core/constants/env.constants.ts):

```typescript
export const ENV = {
  BASE_API_URL: process.env.BASE_API_URL || '',
  BASE_PICTURES_URL:
    process.env.BASE_PICTURES_URL ||
    import.meta.env.PUBLIC_BASE_PICTURES_URL ||
    '',
};
```

### El archivo `.env.local`

Crea un archivo `.env` en la raíz del proyecto para definir las variables:

```env
BASE_API_URL=http://localhost:3001/api
PUBLIC_BASE_PICTURES_URL=http://localhost:3001
```

### Aliases de Importación

El proyecto usa path aliases para imports más limpios, configurado en [package.json](package.json):

```json
"imports": {
	"#*": "./src/*"
}
```
