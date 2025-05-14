import { AppDataSource } from "./data-source";
import { initDatabase } from "./database";
import { 
    insertarGrabacion, obtenerGrabaciones, obtenerGrabacion, actualizarGrabacion, eliminarGrabacion 
} from "./cruds/Grabacion";
import { 
    insertarEvaluador, obtenerEvaluadores, obtenerEvaluador, actualizarEvaluador, eliminarEvaluador 
} from "./cruds/Evaluador";
import { 
    insertarCalificacion, obtenerCalificaciones, obtenerCalificacion, eliminarCalificacion 
} from "./cruds/Calificacion";
import { 
    insertarCriterioEvaluacion, obtenerCriterioEvaluacion 
} from "./cruds/CriterioEvaluacion";
import { 
    insertarDetalleCalificacion, obtenerDetallesCalificacion 
} from "./cruds/DetalleCalificacion";

// Función principal para ejecutar operaciones CRUD
async function main() {
    try {
        await initDatabase();
        console.log("La base de datos está conectada exitosamente.");

        // 1. Subida de Presentación
        const nuevaGrabacion = await insertarGrabacion(
            "Impacto de la Inteligencia Artificial en la Educación",
            "Presentación sobre cómo la IA transforma la enseñanza y el aprendizaje.",
            new Date(),
            "presentacion_ia.pdf"
        );
        console.log("Presentación subida:", nuevaGrabacion);

        // 2. Obtener todas las grabaciones
        const grabaciones = await obtenerGrabaciones();
        console.log("Lista de grabaciones:", grabaciones);

        // 3. Insertar un nuevo evaluador
        const nuevoEvaluador = await insertarEvaluador(
            "Carlos Mendoza",
            "carlos.mendoza@example.com",
            "Especialista en comunicación"
        );
        console.log("Evaluador insertado:", nuevoEvaluador);

        // 4. Obtener todos los evaluadores
        const evaluadores = await obtenerEvaluadores();
        console.log("Lista de evaluadores:", evaluadores);

        // 5. Insertar una calificación
        const nuevaCalificacion = await insertarCalificacion(
            9.0,
            nuevaGrabacion.id,
            nuevoEvaluador.id
        );
        console.log("Calificación insertada:", nuevaCalificacion);

        // 6. Insertar un criterio de evaluación
        const nuevoCriterio = await insertarCriterioEvaluacion(
            "Claridad",
            "Evaluación de la claridad del discurso."
        );
        console.log("Criterio insertado:", nuevoCriterio);

        // 7. Obtener un criterio de evaluación específico
        const criterioObtenido = await obtenerCriterioEvaluacion(nuevoCriterio.id);
        console.log("Criterio obtenido:", criterioObtenido);

        // 8. Insertar un detalle de calificación
        const nuevoDetalleCalificacion = await insertarDetalleCalificacion(
            8.5,
            nuevaCalificacion.id,
            nuevoCriterio.id
        );
        console.log("Detalle de calificación insertado:", nuevoDetalleCalificacion);

        // 9. Obtener todos los detalles de calificación
        const detallesCalificacion = await obtenerDetallesCalificacion();
        console.log("Lista de detalles de calificación:", detallesCalificacion);

        // 10. Eliminar una grabación
        const grabacionEliminada = await eliminarGrabacion(nuevaGrabacion.id);
        console.log("Grabación eliminada:", grabacionEliminada);

        // 11. Eliminar una calificación
        const calificacionEliminada = await eliminarCalificacion(nuevaCalificacion.id);
        console.log("Calificación eliminada:", calificacionEliminada);

        // 12. Eliminar un evaluador
        const evaluadorEliminado = await eliminarEvaluador(nuevoEvaluador.id);
        console.log("Evaluador eliminado:", evaluadorEliminado);

    } catch (error) {
        console.error("Error al ejecutar la aplicación:", error);
    }
}

// Ejecutar la función principal
main();
