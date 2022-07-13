const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}; // Objeto literal


function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso)
    // }
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }

const juanita = new Student(
    "Juanita", 
    19, 
    ["Curso de Introducción a la Producción de Videojuegos", 
    "Curso de Creacion de personajes"]);
// Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");

