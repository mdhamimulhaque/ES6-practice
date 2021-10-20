//=========  we can remove duplicate use =================
const studentInfo = (name,age) =>{
  return {
    //   name : name, 
    //   age : age 
    name,   //---------------ES6 we can use once
    age    //---------------short hand technic
    
  }
}

console.log(studentInfo("Md Hamimul Haque",22))

//====================== concise method =======================

let message = {
    // function declare inside object (without concise method)
    msg1 : function(){
        return ("this is object function (without concise method)") 
    },
    // with concise method
    msg2(){
      return("this is concise method")
    }
}
console.log(message.msg1())
console.log(message.msg2())

//================ we can use space inside function name  with concise method ===========

//----------for this we must use a single quotation(''),when we will use function name & another important thing is that, we you will call those function that use third braked [] .example ---

let useSpaceFunction = {
    'my function'(){
        return ("use space inside function name with concise method")
    }
}

console.log(useSpaceFunction['my function']())