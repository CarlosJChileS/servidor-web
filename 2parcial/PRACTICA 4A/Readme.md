# Proyecto de Microservicios con NestJS
Este repositorio contiene una serie de microservicios implementados con el framework **NestJS**. Los servicios se comunican mediante **NATS** y cada uno se encuentra en su propia carpeta dentro de `semana 6 practica`.
## Estructura del repositorio

- `gate`: puerta de entrada tipo REST que expone las rutas HTTP y comunica con el resto de microservicios mediante NATS.
- `micro`: servicio base que agrupa los casos de uso principales.
- `calificacion`: microservicio encargado de las operaciones de calificaciones.
- `feedback`: microservicio responsable de la gestión de feedbacks.
- `practicas`: microservicio para el manejo de prácticas.

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Docker](https://www.docker.com/) para ejecutar el servidor de NATS



# Pasos
cd gate 
npm i
npm run start:Dev
cd micro
npm i
npm run stat
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
