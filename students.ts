'use strict'
//Modelar los alumnos de una clase (3); nombre, edad, apellidos, asignaturas(3),
//las asignaturas tendran 3 notas
//imprimir el listado de alumnos y la nota media de cada alumno en cada asignatura
//Si está aprobado un Aprobado, si está suspenso Suspenso


class Subject {
    name: string;
    grade: number;
    constructor(name,grade){
        this.name = name;
        this.grade= grade;
    }
}
//No puedo
let instances : Student [] = [];
class Student {
    //static = metodos o variables para la clase, no accesibles a las instancias
    // static instances = [];
    name: string;
    lastName : string;
    age: number;
    subjects : Subject[];
    constructor(name, lastName, age, subjects){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.subjects = subjects;
        //Podria hacer un array aqui en el constructor y que cada vez que se use se haga un .push de(this) asi se van almacenando y fuera recorrerlas con un bucle
        //Voy pusheando cada instancia que cree en el array de la clase
        instances.push(this);
    }
    static getAllStudents(): Student [] {
       return instances;
    } 
}

// Student1
const manolo = new Student("Manolo","fernandez",22,[new Subject("Matematicas", [10,6,7]),new Subject("Fisica", [8,5,4]),new Subject("Lengua", [1,8,2])]);

//Studen2
const alberto = new Student("Alberto","fernandez",22,[new Subject("Matematicas", [10,6,7]),new Subject("Fisica", [8,5,4]),new Subject("Lengua", [1,8,2])]);

//Student3
const juan = new Student("Juan","fernandez",22,[new Subject("Matematicas", [10,6,7]),new Subject("Fisica", [8,5,4]),new Subject("Lengua", [1,8,2])]);


//Imprimir alumnos y medias
Student.getAllStudents().forEach(student =>{
    let studentName: string = student.name
    let subjects = student.subjects
    let subjectGrade;
    let subjectName;
    let subjectAndAvgGrade=[];
    for(let subject of subjects){
        let subjectName = subject.name;
        let subjectAverageGrade = (subject.grade.reduce((total, grade)=> total + grade )/subject.grade.length).toFixed(1);
        // subjectAverageGrade = subject.grade;
        //APROVE / FAILED 
        let aprovedFailed = "";
        subjectAverageGrade >=5 ? aprovedFailed = "Approved"
        : aprovedFailed = "Failed";

        subjectAndAvgGrade.push(`${subjectName}: ${subjectAverageGrade} ${aprovedFailed}`);
    }

    console.log(`\n${studentName}:`);
    subjectAndAvgGrade.forEach(subject => console.log(subject))

    }
)