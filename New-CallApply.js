class Document{
     constructor(firstName,lastName,salary){
         this.firstName = firstName;
         this.lastName = lastName;
         this.salary = salary;
     }
}

const myDocument = new Document("Md Hamimul","Haque", 50000);
console.log(myDocument);





///================old methods>>> 'this' used with function

function Person1(firstName,lastName,salary){
   this.firstName = firstName;
   this.lastName = lastName;
   this.salary = salary;
}
const result = new Person1("Md Rafaetul", "Haque", 2000000);
console.log(result);




