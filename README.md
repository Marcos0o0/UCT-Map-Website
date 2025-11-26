# Mapa UCT - Campus Virtual

Proyecto de mapa interactivo y tour virtual 360° del Campus San Francisco de la Universidad Católica de Temuco.

## Descripción

Aplicación web que permite a estudiantes y visitantes explorar el campus UCT de manera virtual mediante:
- Mapa interactivo 2D con ubicaciones clave
- Tour virtual 360° con navegación entre espacios
- Sistema de búsqueda de edificios y servicios
- Sistema de reseñas para feedback de usuarios

## Tecnologías Utilizadas

- **Astro 5.14.1** - Framework web estático
- **Tailwind CSS 4.1.14** - Framework de estilos
- **Leaflet** - Librería de mapas 2D
- **Pannellum 2.5.6** - Visor de panoramas 360°
- **TypeScript** - Tipado estático

## Requisitos Previos

- Node.js 18.20.8 o superior
- npm 9.6.5 o superior

## Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]

# Instalar dependencias
npm install
```

## Comandos Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## Estructura del Proyecto

```
/
├── public/              # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/      # Componentes Astro reutilizables
│   ├── layouts/         # Plantillas base
│   ├── pages/           # Páginas del sitio
│   ├── styles/          # Estilos globales
│   └── lib/            # Utilidades y funciones
└── astro.config.mjs    # Configuración de Astro
```

## Configuración

El proyecto está configurado para desplegarse en:
- **Site**: http://teclab.uct.cl
- **Base Path**: /~mgodoy2025/

Para modificar estas configuraciones, editar `astro.config.mjs`.

## Características Principales

### Mapa Interactivo 2D
- Navegación por el campus con marcadores interactivos
- Búsqueda de ubicaciones
- Información detallada de cada edificio

### Tour Virtual 360°
- Recorrido panorámico por espacios del campus
- Navegación entre escenas con hotspots
- Controles intuitivos y menú lateral

### Sistema de Reseñas
- Calificación con estrellas
- Comentarios de usuarios
- Panel de administración para moderación

### Secciones
- Inicio con buscador y acceso rápido
- Información institucional
- Contactos de servicios
- Sistema de reseñas

## API de Reseñas

El proyecto se conecta a una API PHP para gestionar reseñas:
- `GET /listar-resenas.php` - Lista reseñas aprobadas
- `GET /estadisticas-resenas.php` - Estadísticas de calificaciones
- `POST /crear-resena.php` - Crear nueva reseña
- Panel admin en `/admin` para moderar

## Equipo de Desarrollo

- **Marcos Godoy** - Diseñador UX/UI y Fullstack Developer
- **Martin Valdebenito** - Backend Developer
- **Vicente Ortiz** - Frontend Developer
- **Alvaro Sandoval** - Fotografía 360° y Documentación

## Licencia

Este proyecto es desarrollado por estudiantes de la UCT para uso interno de la universidad.

## Contacto

Para sugerencias o consultas: mgodoy2025@alu.uct.cl
