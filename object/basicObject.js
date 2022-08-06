const student = {
    name: "Md Hamimul Haque",
    age: 22,
    district: "Narail",
    printName: function () {
        console.log("My name is : " + this.name);
    }
}


console.log(student.age);
console.log(student.printName());