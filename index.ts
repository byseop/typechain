const name = "baeyoungseop",
    age = 27,
    gender = "male";


// const sayHi = (name, age, gender?) => {  parameter 에 ? 를 붙이면 선택형이 됨
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, your are a ${gender}`);
}

// sayHi(name, age); 함수 선언시 parameter가 선택형이 아니면 모두 사용하여야 함 (error)
sayHi(name, age, gender);

export {};