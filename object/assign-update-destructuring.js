const studentInfo = {};  //-------->empty object;

studentInfo.studentName = 'Md Hamimul Haque';  //----------> data assign
studentInfo.age = 23;

//console.log(studentInfo)

studentInfo.studentName = "Himel";  //--------------> update value
//console.log(studentInfo)


//===========>>> object destructuring
const studentInfo2 = {
    studentName: "Tamal",
    age: 22,
    address: "Narail",
    phone: 0133247,
    parentsInfo: {
        mothersName: "Mrs.Muslima",
        fathersName: "Md Hemaetul Haque",
    }
}
let { studentName, address: myAddress, parentsInfo } = studentInfo2;  //----------> rename the key name ,when destructuring (here address is an example)
console.log(studentName, myAddress, parentsInfo);
console.log(studentInfo2['age'], studentInfo2.parentsInfo['mothersName'], studentInfo2['parentsInfo']['fathersName']) //---------------> data access/read 2nd way
let x = "address"
console.log(studentInfo2[x]) // access/read


//=========> object inside another object destructuring
//console.log(studentName, address, parentsInfo.fathersName); //-----> 1 way
const { fathersName, mothersName } = studentInfo2.parentsInfo;//-----> 2nd way
console.log(mothersName, fathersName); 