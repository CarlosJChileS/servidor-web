# API de Gestión de Feedback

Este proyecto es una aplicación sencilla desarrollada con **NestJS**, **GraphQL** y **TypeORM**. Permite gestionar tres entidades principales:

* **Grabacion**: grabaciones de audio.
* **Metrica**: métricas que pueden ser evaluadas en una grabación.
* **Feedback**: calificaciones y comentarios para una grabación y una métrica específica.

La aplicación expone una API GraphQL para realizar operaciones CRUD sobre estas entidades y almacena la información en una base de datos SQLite.

---

## Arquitectura

* **Framework:** NestJS
* **Base de datos:** SQLite
* **ORM:** TypeORM
* **API:** GraphQL con Apollo Server
* **Validación:** class-validator (y class-transformer)

---

## Ejecución del Proyecto

### Instalación de dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run start:dev
```

### Acceder a GraphQL Playground

Abrir en el navegador: [http://localhost:3000/graphql](http://localhost:3000/graphql)

---

## Tecnologías utilizadas

* **NestJS**: Framework de Node.js para construir aplicaciones eficientes y escalables.
* **GraphQL**: Lenguaje de consulta de APIs.
* **Apollo Server**: Servidor GraphQL para Node.js.
* **TypeORM**: ORM para trabajar con bases de datos en TypeScript.
* **SQLite**: Base de datos relacional ligera.
* **class-validator**: Biblioteca para validar datos.
* **class-transformer**: Biblioteca para transformar y serializar objetos.

## Ejemplos de Queries y Mutations

A continuación se muestran todas las operaciones disponibles que puedes
probar en el Playground de GraphQL.

### Consultas (Queries)

```graphql
# Obtener todas las grabaciones
query {
  grabaciones {
    id
    archivoAudio
    fechaGrabacion
  }
}

# Obtener una grabación por ID
query {
  grabacion(id: "<ID-grabacion>") {
    id
    archivoAudio
  }
}

# Obtener todas las métricas
query {
  metricas {
    id
    nombre
  }
}

# Obtener una métrica por ID
query {
  metrica(id: "<ID-metrica>") {
    id
    nombre
  }
}

# Obtener todo el feedback
query {
  feedbacks {
    id
    score
    comentario
  }
}

# Obtener un feedback por ID
query {
  feedback(id: "<ID-feedback>") {
    id
    score
    comentario
  }
}
```

### Mutaciones (Mutations)

```graphql
# Crear una nueva grabación
mutation {
  createGrabacion(createGrabacionInput: {
    archivoAudio: "audio.mp3",
    fechaGrabacion: "2023-09-01T10:00:00.000Z"
  }) {
    id
    archivoAudio
  }
}

# Actualizar una grabación
mutation {
  updateGrabacion(updateGrabacionInput: {
    id: "<ID-grabacion>",
    archivoAudio: "audio-actualizado.mp3"
  }) {
    id
    archivoAudio
  }
}

# Eliminar una grabación
mutation {
  removeGrabacion(id: "<ID-grabacion>") {
    id
  }
}

# Crear una métrica
mutation {
  createMetrica(createMetricaInput: {
    nombre: "Claridad",
    descripcion: "Nivel de claridad",
    tipoMetricaId: 1
  }) {
    id
    nombre
  }
}

# Actualizar una métrica
mutation {
  updateMetrica(updateMetricaInput: {
    id: "<ID-metrica>",
    nombre: "Claridad actualizada"
  }) {
    id
    nombre
  }
}

# Eliminar una métrica
mutation {
  removeMetrica(id: "<ID-metrica>") {
    id
  }
}

# Crear un feedback
mutation {
  createFeedback(createFeedbackInput: {
    grabacionId: "<ID-grabacion>",
    metricaId: "<ID-metrica>",
    score: 5,
    comentario: "Buen trabajo",
    esManual: true
  }) {
    id
    score
    comentario
  }
}

# Actualizar un feedback
mutation {
  updateFeedback(updateFeedbackInput: {
    id: "<ID-feedback>",
    score: 4
  }) {
    id
    score
  }
}

# Eliminar un feedback
mutation {
  removeFeedback(id: "<ID-feedback>") {
    id
  }
}

> Reemplaza `<ID-grabacion>`, `<ID-metrica>` y `<ID-feedback>` por los UUID reales que obtuviste al crear las entidades correspondientes. Si envías valores inválidos obtendrás un error de validación.
```