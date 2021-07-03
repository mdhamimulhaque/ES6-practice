const myObject = {
    firstName :"Hamim",
    lastName: "Himel",
    age : 21,
    sealery: 20000,

    getFullName:function(){
        console.log(this.firstName, this.lastName)
    },

    billCharge:function(bill){
       this.sealery = this.sealery - bill;
    }
}


    console.log(myObject)

    myObject.billCharge(5000);//---------access object property
    console.log(myObject.sealery);
