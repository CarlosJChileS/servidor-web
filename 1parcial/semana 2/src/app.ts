
// Definir variables
//let greeting: string = "hello";
//const name2: number = 123;
//console.log(greeting);

// Definir un objeto
const student: IStudent = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    address: 'his house',
};

interface IStudent {
    id: number;
    name: string;
    email: string;
    address: string;
    grade?: number; // Propiedad opcional con ?
}

// Definir arreglo
const students: IStudent[] = [
    {
        id: 123,
        name: 'Carlos',
        email: 'carlos@gmail.com',
        address: 'his house',
    },
    {
        id: 3,
        name: 'Junior',
        email: 'junior@gmail.com',
        address: 'junior\'s place'
    },
];

// Agregar elemento después de crear el arreglo
students.push({
    id: 124, 
    name: 'Walter', 
    email: "walter@gmail.com", 
    address: 'bathroom'
});

// Función para agregar estudiantes
function addStudent(studentList: IStudent[], newStudent: IStudent): void {
    studentList.push(newStudent);
}

// Ejemplo de uso de la función addStudent
const newStudent: IStudent = {id: 12345,  name: '', email: '',address: '' };

addStudent(students, newStudent);


//callback funcion para el ultimo parametro , 

function  addStudent2(parm:IStudent, callback: (student: IStudent) => void): void {
    students.push(parm);
    callback(parm);
}

// Ejemplo de uso de la función addStudent2
const studentA2: IStudent = {id: 12345,  name: '', email: '',address: '' };

// Llamar a la función addStudent2 y pasar una función de callback
addStudent2(studentA2, (parm: IStudent) => console.log);


// Ejemplo de uso de la función addStudent2 para agregar un nuevo estudiante y mostrarlo en consola
function addStudent3(parm: IStudent): Promise<IStudent> {
    return new Promise((resolve) => {
        students.push(parm);
        setTimeout(() => {
            resolve(parm);
        }, 10000);
    });
    // podemos agregar un reject para manejar errores
}

// Llamar a la función addStudent3 y manejar la promesa
addStudent3 (student).then((student) => {
    console.log(student);
})



// await es una forma de esperar a que una promesa se resuelva antes de continuar con la ejecución del código.
// ultimas vesiones da error

// await ser invocado dentro de una funcion asincrona async para que funcione correctamente
async function main() {
    await addStudent3(student);
    try
    {
        await addStudent3(student);
    }
    catch(ex){

    }
    finally{

    }
    console.log(student);
}

main(); // Llamar a la función main para ejecutar el código asincrono
