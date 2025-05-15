import { AppDataSource } from "./data-source";
import { Calificacion } from "./models/Calificacion";
import { CriterioEvaluacion } from "./models/CriterioEvaluacion";
import { DetalleCalificacion } from "./models/DetalleCalificacion";
import { Evaluador } from "./models/Evaluador";
import { Grabacion } from "./models/Grabacion";

async function main() {
    try {
        // 1. Inicializar y limpiar base de datos
        await AppDataSource.initialize();
        // 2. Crear 5 Evaluadores
        const evaluador1 = new Evaluador();
        evaluador1.nombre = "Sistema IA3";
        evaluador1.correo = "ia3@exposia.com";
        evaluador1.especialidad = "Análisis Automático";
        await AppDataSource.manager.save(evaluador1);

        const evaluador2 = new Evaluador();
        evaluador2.nombre = "Sistema IA4";
        evaluador2.correo = "ia4@exposia.com";
        evaluador2.especialidad = "Evaluación Técnica";
        await AppDataSource.manager.save(evaluador2);

        const evaluador3 = new Evaluador();
        evaluador3.nombre = "Sistema IA5";
        evaluador3.correo = "ia5@exposia.com";
        evaluador3.especialidad = "Retroalimentación";
        await AppDataSource.manager.save(evaluador3);

        const evaluador4 = new Evaluador();
        evaluador4.nombre = "Sistema IA6";
        evaluador4.correo = "ia6@exposia.com";
        evaluador4.especialidad = "Metricas Avanzadas";
        await AppDataSource.manager.save(evaluador4);

        const evaluador5 = new Evaluador();
        evaluador5.nombre = "Sistema IA7";
        evaluador5.correo = "ia7@exposia.com";
        evaluador5.especialidad = "Optimización";
        await AppDataSource.manager.save(evaluador5);

        // 3. Crear 5 Criterios
        const criterio1 = new CriterioEvaluacion();
        criterio1.nombre = "Claridad";
        criterio1.descripcion = "Expresión clara de ideas";
        await AppDataSource.manager.save(criterio1);

        const criterio2 = new CriterioEvaluacion();
        criterio2.nombre = "Fluidez";
        criterio2.descripcion = "Flujo continuo del discurso";
        await AppDataSource.manager.save(criterio2);

        const criterio3 = new CriterioEvaluacion();
        criterio3.nombre = "Tiempo";
        criterio3.descripcion = "Manejo del tiempo asignado";
        await AppDataSource.manager.save(criterio3);

        const criterio4 = new CriterioEvaluacion();
        criterio4.nombre = "Creatividad";
        criterio4.descripcion = "Originalidad en la presentación";
        await AppDataSource.manager.save(criterio4);

        const criterio5 = new CriterioEvaluacion();
        criterio5.nombre = "Interacción";
        criterio5.descripcion = "Participación con la audiencia";
        await AppDataSource.manager.save(criterio5);

        // 4. Crear 5 Grabaciones
        const grabacion1 = new Grabacion();
        grabacion1.titulo = "IA en Educación";
        grabacion1.descripcion = "Sesión 1: Fundamentos";
        grabacion1.fecha = new Date();
        grabacion1.url = "grab1.mp4";
        await AppDataSource.manager.save(grabacion1);

        const grabacion2 = new Grabacion();
        grabacion2.titulo = "Machine Learning";
        grabacion2.descripcion = "Sesión 2: Algoritmos";
        grabacion2.fecha = new Date();
        grabacion2.url = "grab2.mp4";
        await AppDataSource.manager.save(grabacion2);

        const grabacion3 = new Grabacion();
        grabacion3.titulo = "Redes Neuronales";
        grabacion3.descripcion = "Sesión 3: Práctica";
        grabacion3.fecha = new Date();
        grabacion3.url = "grab3.mp4";
        await AppDataSource.manager.save(grabacion3);

        const grabacion4 = new Grabacion();
        grabacion4.titulo = "Ética en IA";
        grabacion4.descripcion = "Sesión 4: Debate";
        grabacion4.fecha = new Date();
        grabacion4.url = "grab4.mp4";
        await AppDataSource.manager.save(grabacion4);

        const grabacion5 = new Grabacion();
        grabacion5.titulo = "Chatbots";
        grabacion5.descripcion = "Sesión 5: Implementación";
        grabacion5.fecha = new Date();
        grabacion5.url = "grab5.mp4";
        await AppDataSource.manager.save(grabacion5);

        // 5. Crear 5 Calificaciones
        const calificacion1 = new Calificacion();
        calificacion1.notaFinal = 8.5;
        calificacion1.grabacion = grabacion1;
        calificacion1.evaluador = evaluador1;
        await AppDataSource.manager.save(calificacion1);

        const calificacion2 = new Calificacion();
        calificacion2.notaFinal = 9.0;
        calificacion2.grabacion = grabacion2;
        calificacion2.evaluador = evaluador2;
        await AppDataSource.manager.save(calificacion2);

        const calificacion3 = new Calificacion();
        calificacion3.notaFinal = 7.8;
        calificacion3.grabacion = grabacion3;
        calificacion3.evaluador = evaluador3;
        await AppDataSource.manager.save(calificacion3);

        const calificacion4 = new Calificacion();
        calificacion4.notaFinal = 8.9;
        calificacion4.grabacion = grabacion4;
        calificacion4.evaluador = evaluador4;
        await AppDataSource.manager.save(calificacion4);

        const calificacion5 = new Calificacion();
        calificacion5.notaFinal = 9.4;
        calificacion5.grabacion = grabacion5;
        calificacion5.evaluador = evaluador5;
        await AppDataSource.manager.save(calificacion5);

        // 6. Crear 5 Detalles
        const detalle1 = new DetalleCalificacion();
        detalle1.puntuacion = 8.0;
        detalle1.calificacion = calificacion1;
        detalle1.criterio = criterio1;
        await AppDataSource.manager.save(detalle1);

        const detalle2 = new DetalleCalificacion();
        detalle2.puntuacion = 9.2;
        detalle2.calificacion = calificacion2;
        detalle2.criterio = criterio2;
        await AppDataSource.manager.save(detalle2);

        const detalle3 = new DetalleCalificacion();
        detalle3.puntuacion = 7.5;
        detalle3.calificacion = calificacion3;
        detalle3.criterio = criterio3;
        await AppDataSource.manager.save(detalle3);

        const detalle4 = new DetalleCalificacion();
        detalle4.puntuacion = 8.8;
        detalle4.calificacion = calificacion4;
        detalle4.criterio = criterio4;
        await AppDataSource.manager.save(detalle4);

        const detalle5 = new DetalleCalificacion();
        detalle5.puntuacion = 9.5;
        detalle5.calificacion = calificacion5;
        detalle5.criterio = criterio5;
        await AppDataSource.manager.save(detalle5);

        // 7. Mostrar resultados formateados
        console.log("\n================ REGISTROS CREADOS ================");
        
        console.log("\n------------------ Evaluadores -------------------");
        [evaluador1, evaluador2, evaluador3, evaluador4, evaluador5].forEach(e => {
            console.log(`  ID: ${e.id} | Nombre: ${e.nombre} | Correo: ${e.correo}`);
        });

        console.log("\n------------------ Criterios ---------------------");
        [criterio1, criterio2, criterio3, criterio4, criterio5].forEach(c => {
            console.log(`  ID: ${c.id} | ${c.nombre}: ${c.descripcion}`);
        });

        console.log("\n------------------ Grabaciones -------------------");
        [grabacion1, grabacion2, grabacion3, grabacion4, grabacion5].forEach(g => {
            console.log(`  ID: ${g.id} | ${g.titulo}: ${g.descripcion}`);
        });

        console.log("\n----------------- Calificaciones -----------------");
        [calificacion1, calificacion2, calificacion3, calificacion4, calificacion5].forEach(c => {
            console.log(`  ID: ${c.id} | Nota: ${c.notaFinal} | Grabación: ${c.grabacion.id} | Evaluador: ${c.evaluador.id}`);
        });

        console.log("\n------------------ Detalles ----------------------");
        [detalle1, detalle2, detalle3, detalle4, detalle5].forEach(d => {
            console.log(`  ID: ${d.id} | Puntuación: ${d.puntuacion} | Criterio: ${d.criterio.id} | Calificación: ${d.calificacion.id}`);
        });

        console.log("\n===================================================");

    } catch (error) {
        console.error("\nError:", error);
    } finally {
        await AppDataSource.destroy();
    }
}

main();