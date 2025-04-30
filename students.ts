// 'use strict'
//Modelar los alumnos de una clase (3); nombre, edad, apellidos, asignaturas(3),
//las asignaturas tendran 3 notas
//imprimir el listado de alumnos y la nota media de cada alumno en cada asignatura
//Si está aprobado un Aprobado, si está suspenso Suspenso

// TO RUN 
// npm i -D tsx
//tsc example.ts TO TYPE CHECK CODE
// npx tsx example.ts THIS DOES NOT TYPE CHECK CODE

class Subject {
    name: string;
    grade: number[];
    constructor(name: string ,grade: number[]){
        this.name = name;
        this.grade= grade;
    }
}

class Student {
    name: string;
    lastName : string;
    age: number;
    subjects : Subject[];
    constructor(name: string, lastName:string, age : number, subjects : Subject[]){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.subjects = subjects;
    }
    //static = metodos o variables para la clase, no accesibles a las instancias
    static getAllStudents(): Student [] {
        return instances;
    } 
}

let instances : Student []= [    
    // Student1
    new Student(
        "Manolo",
        "fernandez",
        22,
        [
            new Subject("Matematicas", [10,6,7]),
            new Subject("Fisica", [8,5,4]),
            new Subject("Lengua", [1,8,2])
        ]
    ),
    //Student 2
    new Student("Alberto","fernandez",22,[new Subject("Matematicas", [10,6,7]),new Subject("Fisica", [8,5,4]),new Subject("Lengua", [1,8,2])]),
    //Student 3
    new Student("Juan","fernandez",22,[new Subject("Matematicas", [10,6,7]),new Subject("Fisica", [8,5,4]),new Subject("Lengua", [1,8,2])]),
];

//Set subject avg
function setAVG (subject: Subject) {
    return (subject.grade.reduce((total, grade) => ((total + grade))) / subject.grade.length).toFixed(1);
}

//Pass or Fail subject based on avg
function passFail (avg:number){
    let aprovedFailed = "";
    avg >=5 ? aprovedFailed = "Approved"
        : aprovedFailed = "Failed";
    return aprovedFailed;
}

//Print Students
instances.forEach(student => {
    console.log(student.name)
    student.subjects.forEach(subject=> {
        console.log(subject.name)
        let avg = setAVG(subject);
        console.log(avg);
    })
})










// subjectAndAvgGrade.push(`${subjectName}: ${subjectAverageGrade} ${aprovedFailed}`);
// console.log(`\n${studentName}:`);
// subjectAndAvgGrade.forEach(subject => console.log(subject))
// subjectAndAvgGrade.push(`${subjectName}: ${subjectAverageGrade} ${aprovedFailed}`);
// console.log(`\n${studentName}:`);
// subjectAndAvgGrade.forEach(subject => console.log(subject))


// //Imprimir alumnos y medias
// Student.getAllStudents().forEach(student =>{
//     // let studentName: string = student.name
//     // let subjects = student.subjects
//     // let subjectGrade;
//     // let subjectName;
//     // let subjectAndAvgGrade: [string, number, string]=[];
//     // for(let subject of subjects){
//     //     let subjectName = subject.name;
//     //     let subjectAverageGrade = (subject.grade.reduce((total, grade)=> total + grade )/subject.grade.length).toFixed(1);
//         // subjectAverageGrade = subject.grade;
//         //APROVE / FAILED 
//         // let aprovedFailed = "";
//         // subjectAverageGrade >=5 ? aprovedFailed = "Approved"
//         // : aprovedFailed = "Failed";

//     }


//     }
// )