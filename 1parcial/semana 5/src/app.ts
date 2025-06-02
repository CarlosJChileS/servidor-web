import express,{Request,Response} from 'express';



const app = express();
app.use(express.json());
const port = 3000;

interface Iusuario {
    id: number;
    nombre: string;
    }
const usuarios: Iusuario[] = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Pedro' },
    { id: 3, nombre: 'Maria' }
];

app.get('/usuarios', (req: Request, res: Response) => {
    res.json(usuarios);
});

app.get('/usuarios/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    const usuarioencontrado = usuarios.find((ele) => ele.id === parseInt(id));
    if (!usuarioencontrado) {
        res.status(404).json({mensaje : 'Usuario no encontrado'})
    }
    res.status(200).json(usuarioencontrado);
});


app.post('/usuarios', (req: Request, res: Response) => {
    const {body} = req;
    usuarios.push(body);
    res.status(201).json(body);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.put('/usuarios/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    const {nombre} = req.body;
    const usuarioencontrado = usuarios.find((ele) => ele.id === parseInt(id));
    if (!usuarioencontrado) {
        res.status(404).json({
            mensaje : 'Usuario no encontrado'})
        return;
    }
    usuarioencontrado.nombre = nombre;
    res.status(200).json(usuarioencontrado);
});

app.delete('/usuarios/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    const usuarioencontrado = usuarios.find((ele) => ele.id === parseInt(id));
    if (!usuarioencontrado) {
        res.status(404).json({
            mensaje : 'Usuario no encontrado'})
        return;
    }
    // Eliminar el usuario encontrado
    //porque usar slplice
    // porque splice elimina el elemento del array y devuelve el elemento eliminado
    // y indexof devuelve el indice del elemento
    // y no elimina el elemento del array
    usuarios.splice(usuarios.indexOf(usuarioencontrado), 1);
    res.status(200).json(usuarioencontrado);
});