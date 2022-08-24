function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){

    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject){
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};


function requiredParam(param){
    throw new Error(param + " es obligatorio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;    
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {})
{
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }


    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(Student.prototype, "learningPaths",{
        get(){
            return private["_learningPaths"];
        },
        set(newLp){        
                if(newLp instanceof LearningPath){
                    private["_learningPaths"].push(newLp);
                } else {
                    console.warn("Alguno de los Lps no es una instancia del protoypo learning path");
                }
            },  
    });

    for (learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex];
      }
};

const escuelaWeb = new LearningPath(
    {
        name: "Escuela de Desarrollo Web", 
        courses: []
});

const escuelaDS = new LearningPath(
    {
        name: "Escuela de Data Science", 
        courses: []
});

const juan = new Student(
    {
        name: "Juanito",
        email: "correitodejuanito@email",
        age: 18,    
        twitter: "juanito",
        learningPaths: [
            escuelaWeb,
            escuelaDS,
        ]    
    }
);
