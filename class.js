class Friends {
    constructor(x, y, z) {
        this.Name = x;
        this.Age = y;
        this.address = z;
        this.school = "Narail Govt. High School";
    }
}

const schoolFriend = new Friends("Himel", 21, "Narail");
const schoolFriend1 = new Friends("Tamal", 18, "Narail");
// console.log(schoolFriend);
// console.log(schoolFriend1);

// -----> syntactic sugar <---
class StudentsInfo {
    name;
    address;
    constructor(xName, xAddress) {
        this.name = xName;
        this.address = xAddress;
    }
    class = 'Honours 3rd year'
    classStart(time) {
        console.log(`class will start at ${time}`)
    }
    classEnd(time) {
        console.log(`class will end at ${time}`)
    }
    exam = 'date not fixed yet'

}

const himel = new StudentsInfo('himel', 'narail');
const ragib = new StudentsInfo('ragib', 'jeshore');
console.log(himel);
console.log(ragib);

himel.classStart(`10:00 am`);
himel.classEnd('1:00 pm');



