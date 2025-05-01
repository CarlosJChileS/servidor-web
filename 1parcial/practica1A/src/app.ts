// Variables
const sistemaNombre: string = "Asistente ExpoInteligente";
let alertasRegistradas: number = 0;

// Interfaces 
interface ParametroIdeal {
    id_parametro: number;
    tipo: string;
    valor_min: number;
    valor_max: number;
}

interface Alerta {
    id_alerta: number;
    mensaje: string;
    fecha: string;
}

// Objetos Literales
const parametroTiempo: ParametroIdeal = {
    id_parametro: 1,
    tipo: "tiempo_por_slide",
    valor_min: 60,
    valor_max: 120
};

const alertaInicial: Alerta = {
    id_alerta: 1,
    mensaje: "Slide 3: Tiempo excedido (130s)",
    fecha: "2025-05-01"
};

// Arreglos
const parametros: ParametroIdeal[] = [parametroTiempo];
const alertas: Alerta[] = [alertaInicial];

// Funciones Básicas
function crearAlerta(id: number, mensaje: string): Alerta {
    return { id_alerta: id, mensaje, fecha: new Date().toISOString().split('T')[0] };
}

function mostrarAlertas(listaAlertas: Alerta[]): void {
    listaAlertas.forEach(a => console.log(`[${a.fecha}] ${a.mensaje}`));
}

// Spread/Rest
const nuevasAlertas: Alerta[] = [
    ...alertas,
    { id_alerta: 2, mensaje: "Velocidad de habla alta (160ppm)", fecha: "2025-05-01" }
];

function registrarAlertas(...alertasNuevas: Alerta[]): void {
    alertas.push(...alertasNuevas);
    alertasRegistradas += alertasNuevas.length;
}

// Callbacks
function procesarAlerta(alerta: Alerta, callback: (a: Alerta) => void): void {
    callback(alerta);
}

procesarAlerta(alertaInicial, (a) => {
    console.log(`Procesada: ${a.mensaje}`);
});

// Promises
function guardarAlerta(alerta: Alerta): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Alerta #${alerta.id_alerta} guardada`);
        }, 1000);
    });
}

// Async/Await 
async function flujoPrincipal(): Promise<void> {
    const nuevaAlerta = crearAlerta(3, "Baja interacción en Slide 5");
    const resultado = await guardarAlerta(nuevaAlerta);
    console.log(resultado);
}

