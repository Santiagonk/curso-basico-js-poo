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


Object.defineProperty(juan, "",{
    value:"",
    writable:true,
    enumerable:true,
    configurable:true
});

Object.defineProperty(juan, "PruebaNasa",{
    value:"Estraterrestres",
    writable:false,
    enumerable:false,
    configurable:false
});

Object.defineProperty(juan, "navigator",{
    value:"Chrome",
    writable:true,
    enumerable:false,
    configurable:true
});

Object.defineProperty(juan, "editor",{
    value:"VSCode",
    writable:false,
    enumerable:true,
    configurable:true
});


Object.defineProperty(juan, "terminal",{
    value:"WSL",
    writable:true,
    enumerable:true,
    configurable:false
});

Object.seal(juan);
Object.freeze(juan);
console.log(Object.getOwnPropertyDescriptors(juan));
