# Creación de una API REST con NestJS, TypeORM y SQLite
 
 Esta aplicación es una API REST construida con **NestJS**, que gestiona tres entidades: `calificacion`, `evaluador` y `grabacion`. Los datos se almacenan en **SQLite** usando **TypeORM**.
 
 ---
 
 ## Instalación y ejecución
 
 1. Instala las dependencias:
    ```bash
    npm install
 ````
 
 2. Inicia la aplicación en modo desarrollo:
 
    ```bash
    npm run start:dev
    ```
 
 ---
 
 ## Endpoints de la API
+Cada entidad expone los siguientes endpoints bajo el prefijo `/api/v1`:
 
+| POST   | `/api/v1/<entidad>`     | Crea un nuevo registro                    |
+| GET    | `/api/v1/<entidad>`     | Obtiene todos los registros               |
+| GET    | `/api/v1/<entidad>/:id` | Obtiene un registro por su ID             |
+| PATCH  | `/api/v1/<entidad>/:id` | Actualiza parcialmente un registro por ID |
+| DELETE | `/api/v1/<entidad>/:id` | Elimina un registro por ID                |
 
 > Reemplaza `<entidad>` por: `calificacion`, `evaluador` o `grabacion`.
 
 ### Ejemplo de rutas para cada entidad
 
 #### Calificacion

+* `POST /api/v1/calificacion`
+* `GET /api/v1/calificacion`
+* `GET /api/v1/calificacion/:id`
+* `PATCH /api/v1/calificacion/:id`
+* `DELETE /api/v1/calificacion/:id`
 
 #### Evaluador
 
+* `POST /api/v1/evaluador`
+* `GET /api/v1/evaluador`
+* `GET /api/v1/evaluador/:id`
+* `PATCH /api/v1/evaluador/:id`
+* `DELETE /api/v1/evaluador/:id`
 
 #### Grabacion
 
+* `POST /api/v1/grabacion`
+* `GET /api/v1/grabacion`
+* `GET /api/v1/grabacion/:id`
+* `PATCH /api/v1/grabacion/:id`
+* `DELETE /api/v1/grabacion/:id`
 
 ---
 
 ### Calificacion
 
 1. **Crear una calificación**
 
    * **Método:** `POST`
+   * **URL:** `http://localhost:3000/api/v1/calificacion`
    * **Body:** (Selecciona "raw" y tipo "JSON" en Postman)
 
      ```json
      {
        "puntaje": 5,
        "fecha": "2024-01-01"
      }
      ```
 
 2. **Obtener todas las calificaciones**
 
    * **Método:** `GET`
+   * **URL:** `http://localhost:3000/api/v1/calificacion`
 
 3. **Obtener una calificación por ID**
 
    * **Método:** `GET`
+   * **URL:** `http://localhost:3000/api/v1/calificacion/1`
 
 4. **Actualizar una calificación por ID**
 
    * **Método:** `PATCH`
+   * **URL:** `http://localhost:3000/api/v1/calificacion/1`
    * **Body:** (Selecciona "raw" y tipo "JSON")
 
      ```json
      {
        "observacion": "bien"
      }
      ```
 
 5. **Eliminar una calificación por ID**
 
    * **Método:** `DELETE`
+   * **URL:** `http://localhost:3000/api/v1/calificacion/1`
 
 ---
 
 ### Evaluador
 
 1. **Crear un evaluador**
 
    * **Método:** `POST`
+   * **URL:** `http://localhost:3000/api/v1/evaluador`
    * **Body:** (Selecciona "raw" y tipo "JSON")
 
      ```json
      {
        "nombre": "Ana",
        "area": "QA"
      }
      ```
 
 2. **Obtener todos los evaluadores**
 
    * **Método:** `GET`
+   * **URL:** `http://localhost:3000/api/v1/evaluador`
 
 3. **Obtener un evaluador por ID**
 
    * **Método:** `GET`
+   * **URL:** `http://localhost:3000/api/v1/evaluador/1`
 
 4. **Actualizar un evaluador por ID**
 
    * **Método:** `PATCH`
+   * **URL:** `http://localhost:3000/api/v1/evaluador/1`
    * **Body:** (Selecciona "raw" y tipo "JSON")
 
      ```json
      {
        "correo": "ana@example.com"
      }
      ```
 
 5. **Eliminar un evaluador por ID**
 
    * **Método:** `DELETE`
+   * **URL:** `http://localhost:3000/api/v1/evaluador/1`
 
 ---
 
 ### Grabacion
 
 1. **Crear una grabación**
 
    * **Método:** `POST`
+   * **URL:** `http://localhost:3000/api/v1/grabacion`
    * **Body:** (Selecciona "raw" y tipo "JSON")
 
      ```json
      {
        "titulo": "demo",
        "url": "http://foo",
        "duracion": 60,
        "fecha": "2024-01-01"
      }
      ```
 
 2. **Obtener todas las grabaciones**
 
    * **Método:** `GET`
+   * **URL:** `http://localhost:3000/api/v1/grabacion`
 
 3. **Obtener una grabación por ID**
 
    * **Método:** `GET`
+   * **URL:** `http://localhost:3000/api/v1/grabacion/1`
 
 4. **Actualizar una grabación por ID**
 
    * **Método:** `PATCH`
+   * **URL:** `http://localhost:3000/api/v1/grabacion/1`
    * **Body:** (Selecciona "raw" y tipo "JSON")
 
      ```json
      {
        "titulo": "editado"
      }
      ```
 
 5. **Eliminar una grabación por ID**
 
    * **Método:** `DELETE`
+   * **URL:** `http://localhost:3000/api/v1/grabacion/1`
 
 ---
 
 
 ## Resumen de la arquitectura de rutas
+* **POST /api/v1/<entidad>** → Llama a `create` en el servicio correspondiente.
+* **GET /api/v1/<entidad>** → Llama a `findAll`.
+* **GET /api/v1/<entidad>/\:id** → Llama a `findOne`.
+* **PATCH /api/v1/<entidad>/\:id** → Llama a `update`.
+* **DELETE /api/v1/<entidad>/\:id** → Llama a `remove`.
