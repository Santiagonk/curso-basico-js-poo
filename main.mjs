function videoPlay (id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url: "+ urlSecreta);
}

function videoStop (id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url: "+ urlSecreta);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    
    pausar () {
        videoStop(this.videoID);
    }

}



// class Course {
//     constructor({
//       name,
//       lessons = [],
//     }) {
//       this._name = name;
//       this.lessons = lessons;
//     }
    
//     get name () {
//         return this._name;
//     }

//     set name (nuevoNombre){
//         if (nuevoNombre === "Curso Malito de Programación Básica")
//         {
//             console.error("Web... no");
//         } else {
//             this._name = nuevoNombre;
//         }        
//     }
// }

// class LearningPath {
//     constructor ({
//             name,
//             courses = [],
//         }) {
//         this.name = name;
//         this.courses = courses;
//     }

//     // changeName(nuevoNombre) {
//     //     this._name = nuevoNombre;
//     // }
// }


// class Student {
//     constructor ({
//         name, 
//         email,
//         username,
//         twitter = undefined,
//         instagram = undefined,
//         facebook = undefined,
//         approvedCourses = [],
//         learningPaths = []
//     }) {
//         this.name = name;
//         this.email = email;
//         this.socialMedia = {
//             twitter,
//             instagram,
//             facebook
//         };
//         this.username = username;
//         this.approvedCourses = approvedCourses;
//         this.learningPaths = learningPaths;
//     }
// }

// const cursoProgBasica = new Course ({
//     name: "Curso de Programación Básica"
// });

// const definitivoHtml = new Course ({
//     name: "Curso de Programación Básica"
// });

// const practicoHtml = new Course ({
//     name: "Curso Práctico de HTML y CSS"
// });

// const businessIntelligence = new Course ({
//     name: "Curso BI"
// });

// const dataViz = new Course ({
//     name: "Curso DataViz"
// });

// const unity = new Course ({
//     name: "Curso de Unity"
// });

// const unreal = new Course ({
//     name: "Curso de Unreal"
// });

// const escuelaWeb = new LearningPath({
//     name: "Escuela de Desarrolo Web",
//     courses: [
//         cursoProgBasica,
//         definitivoHtml,
//         practicoHtml
//     ]
// });

// const escuelaData = new LearningPath({
//     name: "Escuela de Data Science",
//     courses: [
//         businessIntelligence,
//         dataViz
//     ]
// });

// const escuelaVgs = new LearningPath({
//     name: "Escuela de Videojuegos",
//     courses: [
//         unity,
//         unreal
//     ]
// });




// const juan2 = new Student({
//     name: "juanDc",
//     username:"JuanDE",
//     email:"juan@email.com",
//     twitter: "JuanDC",
//     learningPaths: [
//         escuelaVgs,
//         escuelaWeb
//     ]
// });

// const miguelito1 = new Student({
//     name: "miguelitofeliz",
//     username:"miguelitofeliz",
//     email:"miguelitofeliz@email.com",
//     twitter: "miguelitofeliz",
//     learningPaths: [
//         escuelaData
//     ]
// });

// cursoProgBasica.name;
// cursoProgBasica.name = "Nuevo curso de programacion";
// // cursoProgBasica.changeName("Nuevo curso de programacion");
