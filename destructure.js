const studentInfo = {
    name : "himel",
    age : 22,
    address : "Narail",
    phone :0133247
}
// console.log(studentInfo.age);

const {name,address} = studentInfo;
console.log(name,address);

// use Array
const friends = ["emon","karim","salam","jobbar","anisul","arif"];
const [bestFriend,closeFriend,...allFriend] = friends;
console.log(allFriend);
