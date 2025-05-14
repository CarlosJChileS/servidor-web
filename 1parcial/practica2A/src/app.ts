import { AppDataSource } from "./data-source";
import { Calificacion } from "./models/Calificacion";
import { CriterioEvaluacion } from "./models/CriterioEvaluacion";
import { DetalleCalificacion } from "./models/DetalleCalificacion";
import { Evaluador } from "./models/Evaluador";
import { Grabacion } from "./models/Grabacion";

async function main() {
  // Inicializar conexión
  await AppDataSource.initialize();
  
  // Crear evaluador
  const evaluador1 = new Evaluador();
  evaluador1.nombre = "Sistema IA";
  evaluador1.correo = "ia@exposia.com";
  evaluador1.especialidad = "Análisis Automático";
  await AppDataSource.manager.save(evaluador1);

  // Crear criterio
  const criterio1 = new CriterioEvaluacion();
  criterio1.nombre = "Claridad";
  criterio1.descripcion = "Rango ideal: 7.0 - 10.0";
  await AppDataSource.manager.save(criterio1);

  // Crear grabación
  const grabacion1 = new Grabacion();
  grabacion1.titulo = "Presentación sobre IA";
  grabacion1.descripcion = "Práctica de Ana";
  grabacion1.fecha = new Date();
  grabacion1.url = "grabacion.mp3";
  await AppDataSource.manager.save(grabacion1);

  // Crear calificación
  const calificacion1 = new Calificacion();
  calificacion1.notaFinal = 9.0;
  calificacion1.grabacion = grabacion1;
  calificacion1.evaluador = evaluador1;
  await AppDataSource.manager.save(calificacion1);

  // Crear detalle
  const detalle1 = new DetalleCalificacion();
  detalle1.puntuacion = 8.5;
  detalle1.calificacion = calificacion1;
  detalle1.criterio = criterio1;
  await AppDataSource.manager.save(detalle1);

  // Resultados
  console.log(" Evaluador creado:", evaluador1);
  console.log(" Grabación registrada:", grabacion1);
  console.log("Calificación:", calificacion1);
  console.log(" Detalle:", detalle1);
}

main().catch(error => console.error(" Error:", error));