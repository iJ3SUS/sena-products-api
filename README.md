# SENA Products API

API REST para gestión de productos desarrollada con Fastify y SQLite.

## Requisitos

- Node.js (versión 20 o superior)
- npm

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/iJ3SUS/sena-products-api.git
cd sena-products-api
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el seed para crear la base de datos y datos de prueba:
```bash
npm run seed
```

4. Inicia el servidor:
```bash
npm start
```

## Configuración

El servidor se ejecuta en el puerto 3000 por defecto.
URL base: `http://localhost:3000`

## Endpoints

### Productos
- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto por ID
- `POST /products` - Crear un nuevo producto
- `PUT /products/:id` - Actualizar un producto
- `DELETE /products/:id` - Eliminar un producto

### Usuarios
- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por ID
- `POST /users` - Crear un nuevo usuario
- `PUT /users/:id` - Actualizar un usuario
- `DELETE /users/:id` - Eliminar un usuario

### Autenticación
- `POST /login` - Iniciar sesión

## Postman Collection

Se incluye una colección de Postman con todos los endpoints configurados para facilitar las pruebas de la API.

### Configuración del Entorno en Postman

1. Importa la colección de Postman `sena-products-api.postman_collection.json` incluida en el proyecto
2. Configura las siguientes variables de entorno:
   - `baseUrl`: `http://localhost:3000`
   - `token`: (se configurará automáticamente después del login)

### Datos de Ejemplo para Autenticación

Para probar los endpoints protegidos, utiliza las siguientes credenciales de ejemplo:

```json
{
  "email": "jesus.rueda.04@gmail.com",
  "password": "123456"
}
```

**Importante**: Después de hacer login, el token JWT se configurará automáticamente en las variables de entorno de Postman para ser usado en las siguientes peticiones.

