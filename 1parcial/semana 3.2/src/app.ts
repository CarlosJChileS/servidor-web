import {insertarUser} from './crud';
import {initDatabase} from './database';

// Importar la función initDatabase desde el archivo database.ts
async function main() {
    await initDatabase()
    const walter = await insertarUser("walter"," walterG@gmail.com")
    console.log(walter)
}

main()