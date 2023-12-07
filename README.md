# Checklist para Aplicación SPA en React

## Páginas y Rutas
### Públicas
- [ ] `/login`: LoginPage

### Protegidas
- [ ] `/`: Redirecciona a `/adverts`
- [ ] `/adverts`: AdvertsPage
- [ ] `/adverts/:id`: AdvertPage
- [ ] `/adverts/new`: NewAdvertPage
- [ ] *Para cualquier otra URL*: NotFoundPage (404)

## Funcionalidad de cada Página-Componente
### LoginPage
- [ ] Formulario para email y password
- [ ] Checkbox “Recordar contraseña” para guardar sesión en localStorage

### AdvertsPage
- [ ] Listado de anuncios (nombre, precio, tipo, tags)
- [ ] Manejo de estado para "sin anuncios"
- [ ] Enlace a detalle de anuncio (`/adverts/:id`)
- [ ] Zona de filtros (nombre, tipo, precio, tags)
- [ ] Opción de filtrado dinámico o filtrado con botón
- [ ] Implementar mínimo 2 filtros (nombre, tipo, precio, tags)

### AdvertPage
- [ ] Detalle de anuncio según ID
- [ ] Mostrar foto del anuncio o placeholder
- [ ] Redireccionar a NotFoundPage si el anuncio no existe
- [ ] Botón para borrar anuncio con confirmación

### NewAdvertPage
- [ ] Formulario para crear anuncio (nombre, tipo, tags, precio, foto)
- [ ] Validaciones de formulario (todos los campos excepto foto requeridos)
- [ ] Redireccionar a la página del anuncio tras creación

## Componentes Adicionales
- [ ] Componente de Logout visible cuando el usuario está logueado
- [ ] Enlaces de navegación para `/adverts` y `/adverts/new`

## Notas Adicionales
- Considerar la reutilización de componentes (por ejemplo, para confirmaciones)
- Priorizar la práctica con el estado de React
