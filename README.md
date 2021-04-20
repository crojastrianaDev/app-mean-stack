# api-rest

Ejemplo de Api Rest con el stack MEAN basado en el ejemplo de Fazt Code

Para correr el servidor usa npm run dev, en el que se implementa nodemon para la el reinicio del servidor en cada cambio.

# Requerimientos

-Node.js
-Angular.js
-Editor de texto

# Servidor Backend

En el servidor implementa el MVC.

-Controllers: Controlador de cada ruta, con la lógica de cada función.

-Models: Tiene el modelo de datos del Employee.

-Routes: Contiene las rutas que acepta la api.

El archivo index.js arranca la aplicación y requiere database.js y app.js

-app.js : Requiere express y morgan, define las URLS de la Api Rest con /api/employees

-database.js requiere moogose para usar mongodb y crea una base de datos en la URI mongodb://localhost/mean-crud

-Puedes usar api.rest para probar las peticiones a la aplicación del servidor. (Requiere rest en vscode)

# Frontend

Aplicación en Angular v11 que interactua con la Api de nuestro servidor node.js
