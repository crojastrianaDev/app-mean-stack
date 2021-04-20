# api-rest

Ejemplo de Api Rest con el stack MEAN

Para correr el servidor usa npm run dev, en el que se implementa nodemon para la el reinicio del servidor en cada cambio.

# Requerimientos

-Node.js
-Angular.js

# Servidor Backend

En el servidor implementa el MVC.

-Controllers: Controlador de cada ruta, con la lógica de cada función.

-Models: Tiene el modelo de datos del Employee.

-Routes: Contiene las rutas que acepta la api.

El archivo index.js arranca la aplicación y requiere database.js y app.js

-app.js : Requiere express y morgan, define las URLS de la Api Rest con /api/employees

-database.js requiere moogose para usar mongodb y crea una base de datos en la URI mongodb://localhost/mean-crud

# Frontend
