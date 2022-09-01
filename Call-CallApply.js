const myObject = {
    firstName :"Hamim",
    lastName: "Himel",
    age : 21,
    sealery: 20000,

    getFullName:function(){
        console.log(this.firstName, this.lastName)
    },

    billCharge:function(bill,text){
       this.salary = this.salary - bill - text;
       
    }
}

const schoolDocument ={
    FirstName: "Rafaetul",
    lastName: "Tamal",
    salary : 30000
}
const familyDocument ={
    FirstName: "Muslima",
    lastName: "Khatun",
    salary : 20000,
}

myObject.billCharge.call(familyDocument,500,700);
console.log(familyDocument.salary)
