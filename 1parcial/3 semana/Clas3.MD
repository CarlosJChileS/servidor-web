# Introducción a JSON (JavaScript Object Notation (Notación de Objetos JavaScript)
Formato ligero para intercambio rápido y legible de datos
Usado ampliamente entre servidores y aplicaciones web
Formatos semiestructurados , son mas loviadno
•	JSON
•	XML
•	YAML
Historia y evolución de JSON
Dougs crockford en 2000  , alternativa simple y eficiente a XML, Sintaxis basada en JavaScript, Estándar oficial desde 2013 (RFC 7159)
Estructura básica de JSON
## Componentes 
•	Pares clave valor
•	Clave en comillas dobles
•	Valores simples o anidados
## Elementos
•	Objetos {}
•	Arays []
##  Tipos de datos soportados
•	String 
•	Number
•	Boolean
Null
Array
Object
## Ventajas
•	Formato ligero
•	Fácil lectura
•	Compatibilidad con muchos lenguajes 
•	Ideal para apps web y móviles
## Limitaciones de JSON
•	No permie comentarios 
•	Sin funciones ni métodos
•	Solo datos, sin lógica
•	Menos control de validación
## Usos comunes de JSON
•	APIs RESTful
•	Archivo de configuración 
•	Bases NoSQL (MongoDB, Firebase)
•	Comunicación front-backend

 
# ORMs en Nodje.js y Python
Prisma, Sequelize,TypeORM, SQLAlchemy y Peewee
## Que es un ORM?
    Object relational mappin
        un Mapeo de objeto relacional, traduce objtos a registros de BD
    Ahorra codigo
        Evita escribir SQL manual
    Orientado a Objetos
        Trabaja con BD desde codigo OOP
## Ventajas de los ORMS
    Abstraccion
        no necesitas escribir SQL
    Portabilidad
        cambia de BD sin modificar codigo
    Productividad
        Desarrollo mas rapido y mantenible
    Seguridad
        Proteccion contra inyecciones SQL
## Cuando evitar un ORM?
    Alto rendimiento
        Proyectos que requieren optimizacion extrema
    Consultas Completas
        SQL muy personalizado
    BD heredadas
        Estructuras desorganizadas
    Control total
     Operaciones SQL
## ORMs en Node.js
    Node.js Backend
        Javascript y typescript populares
    Acesso simplificado
        ORMs facilitan operaciones con BD
    Principales Opciones
        Prisma, Sequelize, TypeORM    
## Prisma(Node.js)
    Enfoque TypeScript
        ORM moderno y bien tipado
    Arquivo .prisma
        Define esquema de datos
    Cliente Automatico
        Gemera codigo para consultas
# Prisma 3 instalaion y modelo
    Instalacion
        npm install prisma --save-dev
        npx prisma init
    Modelo User 
        Campos: id,name,email
    Configuracion
        .env gestiona conexion a BD

## Prisma 3 CRUD BASICO
    Crear
        prisma.user.create()
    leer
        prisma.user.findMany
    actualizar

    eliminar
## Sequelize(Node.js)
    ORM clasico
        Ampliamente usado
    Modelo JS/TS
        Define mediante funciones
    Multiple relaciones
        Soporta validaciones
    Comunidad activa
        Buena integracion con Express

## Sequelize instalcion y modelo
    instalacion
    npm install squelize mysql2
    definicion de modelo
    campos name, email en objeto
    base ded datos
    mysql, postgresql, sqlite

## Sequelize 3 crud basico

## TypeORM(Node.js)
    ORM para typeScript
        usa decoradores para definir entidades
    Multiples BD
         Compatible con varias base de datos
    Configracion
        Requiere ormconfig.json

## typeORM 3 modelo y crud
    Crear
    repo.save()
    leer
    repo.find
    modelo
    clase con @entity,@column
    actualizar/eliminar
    repo.update(id,{..}) / repo.delete(id)

## ORMS en Python
    SQL Alchemy
    Peeewee
    facilitan acceso a base de datos
    Frameworks
        Flask
        FastAPI
        Django (ORM propio)
## SQLALCHEMY (Python)
    ORM robusto
        ampliamente utilizado en python
    modelo con clases 
        mapeo a tablas de bd
    session
        gestiona operaciones de BD
    Proyectos grandes
        Ideal para apliaciones complejas
## SQLAlchemy 3 crud basico

## Peewee(python)
    ORM ligero y minimalista
    Ideal para proyectos pequenos
    facil de aprender y usar
    compatible con SQL,postgre

##
