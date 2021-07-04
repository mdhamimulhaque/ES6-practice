//================ setTimeout ===============
function myFunction(){
    console.log("My Timeout");
}
setTimeout(myFunction);//---default 
setTimeout(myFunction,4000);//----it will be work after 4 seconds

console.log(11111);
console.log(22222);

//================ setInterval ===============
function mySecondFunction(){
    console.log("This is time interval");
}
setInterval(() => {
    mySecondFunction()
}, 3000);
