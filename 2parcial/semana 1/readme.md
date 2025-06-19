# Fine-tuning

## What is NetsJS?

- Node.js framework
- Server-side framework built with TypeScript

## Key Features

- Modular, scalable architecture using decorators and classes

## Inspiration

- Angular-inspired patterns for Node.js

## Compatible

- Works with Express and Fastify under the hood

Why Choose NestJS?

### Maintainable Structure 
Clear architectural patterns
### TypeScript Support
First-class TypeScript integration
### Testing and Integration
Built-in testing and easy DB integration
### SOLID Principles
Dependency injection and modern patterns

## Nets Vs Express
### NestJS
Organized structure
Module-based architecture
Decorators and DI
Built-in validation
### Express
Minimal framework
Manual architecture
Function-based middleware
Add-on validation
## NestJS Ecosystem
### Nest CLI
Powerful code generator and project scaffolding
### Database Support
TypeORM, Prisma, Mongoose integrations
### Documentation
Swagger/OpenAPI automatic generation
### Testing
Jest integration with testing utilities

## Creating a NestJS project
Install CLI 
npm i -g @nestjs/cli

Choose Package manager
Select npm o yarn
Create project 
nest new my-project
Explore src/FoLDER
Review generated files
## Project Structure
### main.ts
Bootstrap application with NestFactory
### app.module.ts
Root module tat imports all other modules
### app.controller.ts
Define routes and request handlers
### app.service.ts
Business logic implementation

## Resqust Flow in NetJS
## Client
Makes HTTPS request
## Controller 
Routes the request
## Service 
Processes bussiness logic
## Response 
Returns data to client

## Controllers in NestJS
### Purporse 
Defione routs and hamdle requests
### Decorators
@Cntroller () defines prefix for all routes
### HTTP Metods
@Get,@Post,@Put(),@Delete()
###Para,etrers
@Params, @Body
## Services in Nestjs
## Purpose 
Contain business logic
## Injectable
Use @injectable() decorator
## Reusable
Shared across multiple controllers

## Geearing Componets with CLI
## Generate Controller
nest generate controller tasks
## Generate Service
nest generate service tasks
## Files Created 
Controller,service, and test files
## Module Updated
Automtic registration in module