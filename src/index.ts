interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: 'baeyoungseop',
    gender: 'male',
    age: 27
}

const sayHi = (person: Human): string => {
    return (`Hello ${person.name}, you are ${person.age}, your are a ${person.gender}`);
}

console.log(sayHi(person));

export {};