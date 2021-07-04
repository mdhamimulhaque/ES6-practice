const myObject = {
    name : "Haque",
    fullName :function(){
        console.log(this); //---------- it define whole object
        return "Mr Hamimul " + this.name; //---------- it define inside object specific property
    }
}
console.log(myObject.fullName());


const anotherObject ={
    name :"Tamal" 
}

anotherObject.fullName = myObject.fullName;//------set anotherObject fullName from myObject ----------------//
console.log(anotherObject.fullName());



//====================================>>>=======================================================
function add(num1,num2){
    console.log(this); //---------- it define whole function
    return num1 + num2;
}

// add(20,30);--------------window because no declaration before

anotherObject.sum = add; //--------------set anotherObject with sum property from add function
anotherObject.sum();

myObject.sum = add; //--------------set myObject with sum property from add function
myObject.sum();