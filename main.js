const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log(" This", this);
        console.log(" This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// Propiedades Estaticas Objeto Object
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

console.log(Object.entries(juan)[3]);
console.log(Object.entries(juan)[3][0]);
console.log(Object.entries(juan)[3][1]);
// console.log(Object.entries(juan)[3][1]("Curso 1"));

juan.addCourse("Curso 2");
// console.log(Object.entries(juan)[3][1]("Curso 3"));


console.log(Object.getOwnPropertyDescriptors(juan));
Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    enumerable: true,
    writable: true,
    configurable: true
});

console.log(juan);