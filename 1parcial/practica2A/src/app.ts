import { AppDataSource } from "./data-source";
import { Calificacion } from "./models/Calificacion";
import { CriterioEvaluacion } from "./models/CriterioEvaluacion";
import { DetalleCalificacion } from "./models/DetalleCalificacion";
import { Evaluador } from "./models/Evaluador";
import { Grabacion } from "./models/Grabacion";

async function main() {
  // Configurar conexión
  await AppDataSource.initialize();
  
  // Crear evaluador
  const evaluador = new Evaluador();
  evaluador.nombre = "Sistema IA";
  evaluador.correo = "ia@exposia.com";
  await AppDataSource.manager.save(evaluador);

  // Crear criterios
  const criterio1 = new CriterioEvaluacion();
  criterio1.nombre = "Claridad";
  criterio1.descripcion = "Rango ideal: 7.0 - 10.0";
  await AppDataSource.manager.save(criterio1);

  // Crear grabación
  const grabacion = new Grabacion();
  grabacion.titulo = "Presentación sobre IA";
  grabacion.descripcion = "Práctica de Ana";
  grabacion.fecha = new Date();
  grabacion.url = "grabacion.mp3";
  await AppDataSource.manager.save(grabacion);

  // Crear calificación
  const calificacion = new Calificacion();
  calificacion.notaFinal = 9.0;
  calificacion.grabacion = grabacion;
  calificacion.evaluador = evaluador;
  await AppDataSource.manager.save(calificacion);

  // Crear detalle
  const detalle = new DetalleCalificacion();
  detalle.puntuacion = 8.5;
  detalle.calificacion = calificacion;
  detalle.criterio = criterio1;
  await AppDataSource.manager.save(detalle);

  // Mostrar resultados
  console.log("✅ Evaluador creado:", evaluador);
  console.log("🎙️ Grabación registrada:", grabacion);
  console.log("⭐ Calificación:", calificacion);
  console.log("🔍 Detalle:", detalle);
}

main().catch(error => console.error(error));