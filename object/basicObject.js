// 1) ======> object declare with object literal
const student = {
    name: "Md Hamimul Haque",
    age: 22,
    district: "Narail",
    printName: function () {
        console.log("My name is : " + this.name);
    }
}

// console.log(student.age);
// console.log(student.printName());


//2)======> object declare with object constructor 
const obj = new Object(student);
// console.log(obj)
// console.log(obj.name)

// 3)======> object with create method
//---> default set null if object have no value
const obj1 = Object.create(null)

//---> it will show {}; if we will console it but if we access value it will return the real value because of it's Prototypical chain behavior
const obj2 = Object.create(student)
// console.log(obj1)
// console.log(obj2)
// console.log(obj2.name)

//4)======> object declare with ES6 class
class ClassObject {
    name;
    id;
    age = 23
    address = 'Narail'
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

const newObj = new ClassObject('tamal', 1);
// console.log(newObj)

// 5)======> function constructor(old method before es6 class come)
function Car(name, model) {
    this.name = name;
    this.model = model;
    this.price = 2100000;
}

const myCar = new Car('tesla', 't-3459');
console.log(myCar)

