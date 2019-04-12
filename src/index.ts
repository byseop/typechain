// interface Human {
//     // interface는 js로 변환되지 않고 ts에서만 작동한다.
//     name: string;
//     age: number;
//     gender: string;
// }

class Human {
    // js에 넣고싶으면 class를 사용한다.
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name: 'baeyoungseop',
//     gender: 'male',
//     age: 27
// }
const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return (`Hello ${person.name}, you are ${person.age}, your are a ${person.gender}`);
}

console.log(sayHi(lynn));

export {};