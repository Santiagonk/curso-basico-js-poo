// const juan1 = {
//     name: "JuanDC",
//     username: "juandc",
//     points: 100,
//     socialMedia: {
//         twitter: "fjuandc",
//         instagram: "fjuandc",
//         facebook: undefined
//     },
//     approvedCourses: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctico de HTML y CSS"
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Practico de HTML y CSS"
//             ]
//         },
//         {
//             name: "Escuela de Videojuegos",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Practico de HTML y CSS"
//             ]
//         },
//     ],
// };

// const miguelito1 = {
//     name: "Miguelito1",
//     username: "miguelitofeliz",
//     points: 1000,
//     socialMedia: {
//         twitter: "miguelitofeliz",
//         instagram: "miguelito_feliz",
//         facebook: undefined
//     },
//     approvedCourses: [
//         "Curso DataBusiness",
//         "Curso DataViz"
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de Desarrollo Web",
//             courses: [
//                 "Curso Definitivo de HTML y CSS",
//                 "Curso Practico de HTML y CSS"
//             ]
//         },
//         {
//             name: "Escuela de Data Science",
//             courses: [
//                 "Curso DataBusiness",
//                 "Curso DataViz"
//             ]
//         },
//     ],
// };


class Course {
    constructor({
      id,
      name,
      teacher,
      lessons = [],
    }) {
      this.id = id;
      this.name = name;
      this.teacher = teacher;
      this.lessons = lessons;
    }
}

class learningPath {
    constructor ({
            name,
            courses = [],
        }) {
        this.name = name;
        this.courses = courses;
    }
}

class Student {
    constructor ({
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.username = username;
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "juanDc",
    username:"JuanDE",
    email:"juan@email.com",
    twitter: "JuanDC"
});

const miguelito1 = new Student({
    name: "miguelitofeliz",
    username:"miguelitofeliz",
    email:"miguelitofeliz@email.com",
    twitter: "miguelitofeliz"
});