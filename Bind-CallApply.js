const myObject = {
    firstName :"Hamim",
    lastName: "Himel",
    age : 21,
    sealery: 20000,

    getFullName:function(){
        console.log(this.firstName, this.lastName)
    },

    billCharge:function(bill){
        console.log(this);
       this.salary = this.salary - bill;
       
    }
}

const schoolDocument ={
    FirstName: "Rafaetul",
    lastName: "Tamal",
    salary : 30000
}
const familyDocu ={
    FirstName: "Muslima",
    lastName: "Khatun",
    salary : 20000,
}

//-----billCharge work with familyDocu because of Bind &----> Bind return a function
const applyBind = myObject.billCharge.bind(familyDocu);
applyBind(3000);
applyBind(5000);
console.log(familyDocu.salary);




