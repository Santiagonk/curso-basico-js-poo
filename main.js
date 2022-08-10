const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: "d",
        e: "e"
    },
    editA(){
        this.a ="AAAAAAAAAAAAAAAAAA"
    }
};

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);

const numeritos = [0,1,3,4,5,6,7,3,1,3,5,7,6,7];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index]
//     console.log({index, numerito});
// }

function recursiva(numbersArray, index) {
    if (numbersArray.length != 0) {
        const number = numbersArray[0];
        numbersArray.shift()
        console.log({index, number});
        index++;
        return recursiva(numbersArray, index);
    } 
}

recursiva(numeritos, 0);