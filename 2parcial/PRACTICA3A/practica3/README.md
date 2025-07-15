Práctica de CRUD en tiempo real con WebSockets (Socket.IO) y NestJS + TypeORM + SQLite.

## Descripción

Esta práctica implementa tres recursos (`Feedback`, `Grabacion`, `Metrica`) expuestos como Gateways de WebSocket usando **Socket.IO**

Se utiliza SQLite para almacenamiento y TypeORM para el mapeo objeto-relacional. Ideal para demostrar comunicaciones en tiempo real y arquitecturas event-driven.

## Estructura del proyecto

```
practica3/
├── src/
│   ├── app.module.ts        # Configuración principal (TypeORM + Gateways)
│   ├── main.ts              # Bootstrap de NestJS
│   ├── feedback/           # Módulo, entidad, servicio y gateway de Feedback
│   ├── grabacion/          # Módulo, entidad, servicio y gateway de Grabacion
│   └── metrica/            # Módulo, entidad, servicio y gateway de Metrica
├── app.db                   # Base de datos SQLite (autogenerada)
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
└── practica3.postman_collection.json  # Colección de Postman para pruebas Socket.IO
```

## Rubrica / Requisitos

1. **Inicialización del proyecto**
2. **Dependencias**: instalación de WebSockets, TypeORM, SQLite, mapped-types, class-validator, class-transformer.
3. **Configuración de TypeORM**: `synchronize: true` para desarrollo.
4. **Entidades**: definición de `Feedback`, `Grabacion` y `Metrica` con sus columnas y tipos.
5. **Servicios CRUD**: métodos `create`, `findAll`, `findOne`, `update`, `remove` en cada servicio.
6. **Gateways WebSocket**: implementación de `@WebSocketGateway` con métodos `@SubscribeMessage(...)`, emisión de eventos.
7. **Pruebas**: colección de Postman con peticiones Socket.IO para cada evento.
8. **Documentación**: README detallado con instrucciones completas.

## Requisitos previos

- Node.js >= 16
- npm
- Postman (para pruebas Socket.IO) o ejecutar el script `test-sockets.js`.

## Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone <TU_REPO_URL>
   cd practica3
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```
   Escuchará en `http://localhost:3000`.

## Uso con Postman (Socket.IO)

**Link público de la colección :**

<https://sad222-2664.postman.co/workspace/My-Workspace~e00fef93-f77d-4335-8af3-4b47eff03c3a/collection/687573cd08f5e6c8537d9648?action=share&creator=44971682>

 - Verás la colección **Practica3WS** con tres carpetas: `Feedback`, `Grabacion` y `Metrica`.
2. Conectar a un namespace:
   - En cada petición Socket.IO, la URL debe ser:
     ```
     http://localhost:3000/feedback
     http://localhost:3000/grabacion
     http://localhost:3000/metrica
     ```
3. Probar eventos (`create`, `list`, `update`, `delete`) según el nombre de la carpeta.

## Ejemplos de eventos

A continuacion se muestran algunos ejemplos de eventos para cada recurso. Los namespaces siguen el patron `create...`, `list...`, `update...` y `delete...`.

### Feedback
```ts
const socket = io("http://localhost:3000/feedback");

socket.emit("createFeedback", { score: 5, comentario: "Genial", esManual: false });
// el servidor emitira `feedbackCreated` con la lista completa

socket.emit("listFeedbacks", null, (items) => {
  console.log("Feedbacks", items);
});

socket.emit("updateFeedback", { id: "UUID", comentario: "Actualizado" });
// se emitira `feedbackUpdated`

socket.emit("deleteFeedback", "UUID");
```

### Grabacion
```ts
const socket = io("http://localhost:3000/grabacion");

socket.emit("createGrabacion", { archivoAudio: "audio.mp3" });
// => `grabacionCreated`

socket.emit("listGrabaciones", null, (items) => console.log(items));
```

### Metrica
```ts
const socket = io("http://localhost:3000/metrica");

socket.emit("createMetrica", { nombre: "Duracion" });
// => `metricaCreated`
socket.emit("listMetricas", null, items => console.log(items));

socket.emit("updateMetrica", { id: "UUID", descripcion: "Nueva" });
// => `metricaUpdated`

socket.emit("deleteMetrica", "UUID");
// => `metricaDeleted`
```