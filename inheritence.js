class Parents{
    constructor(){
        this.FatherName = "Hemaet";
    }
}

class child extends Parents{
    constructor(name){
        super();
       this.ChildName = name;
    }
}

var myChild = new child("Himel");
console.log(myChild)

