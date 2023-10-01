# Tareas API

Un proyecto de API para administrar tareas.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejecución de Pruebas](#ejecución-de-pruebas)

## Descripción

"Tareas API" es una API desarrollada en Node.js para gestionar tareas. Puedes utilizar esta API para crear, actualizar, obtener y eliminar tareas de una manera sencilla y eficiente.

## Características

- Creación de nuevas tareas con nombre y descripción.
- Actualización de tareas existentes.
- Obtención de todas las tareas o una tarea específica por ID.
- Eliminación de tareas.
- Pruebas unitarias integradas para garantizar la calidad del código.

## Instalación

Para empezar, clona este repositorio y sigue estos pasos:

# Clona el repositorio
```bash
git clone https://github.com/tu-usuario/tareas-api.git
```
# Entra al directorio del proyecto
cd tareas-api

# Instala las dependencias
npm install  

## Uso

Para utilizar la API, asegúrate de haberla instalado y configurado correctamente. Puedes realizar solicitudes HTTP a las rutas proporcionadas para interactuar con las tareas. Aquí hay algunos ejemplos:

- Crear una nueva tarea:

POST /api/tareas
{
"nombre": "Tarea importante",
"descripcion": "Realizar una tarea importante"
}

- Obtener todas las tareas:
GET /api/tareas

- Obtener una tarea por ID:
GET /api/tareas/:id

- Actualizar una tarea existente:
PUT /api/tareas/:id
{
"nombre": "Nueva tarea",
"descripcion": "Descripción actualizada",
"completada": true
}

- Eliminar una tarea:
DELETE /api/tareas/:id

## Ejecución de Pruebas

Puedes ejecutar las pruebas unitarias para asegurarte de que la API funcione correctamente. Usa el siguiente comando:

```bash
npm test
```
