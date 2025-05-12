

creacion del modelo
npm install typeorm reflect-metadata sqlite3

@Entity()
@Column()
@PrimaryGeneratedColumn()

en src crear carpeta models y de ahi user.ts
## en tsconfig.json
    /* Language and Environment */
    "target": "ES2020",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["ES2020"],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "libReplacement": true,                           /* Enable lib replacement. */
    "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    "emitDecoratorMetadata": true, 


### se crea data-source.ts en src
### de ahi se crea database.ts 
### en src se crea crud.ts
## se aplica las importaciones y ejecuta en app.ts
## continuacion del crud
