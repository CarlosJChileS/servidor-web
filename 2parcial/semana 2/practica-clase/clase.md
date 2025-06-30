> npm i -g @nestjs/cli   
nest new project-name 
## se elimina controller, service y .spec se deja:
app.module.ts
main.ts
nest g resource clientes
## instalacion de typeorm con sqlite3 
npm install --save @nestjs/typeorm typeorm sqlite3
## se configura la conexion con  sqlite3 en app.module

## se instala el class-validator
npm i --save class-validator class-transformer 
## se anade el validatoe en main.ts
## comenzar a definir entidad, modificar ,atributos
una vez definida la entidad con los atributos con validaccion de typeORm
Se va al dto, al create para exportat la clase con los mismos atributos

# iniciar al proyecto y detectar problemas
 npm run start:dev
ahora se va al service
Se importa la entidad con el repositoryS
SE anade el inyecta el inyectable
se actualiza los metodos