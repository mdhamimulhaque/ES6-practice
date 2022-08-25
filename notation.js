const studentInfo = {
    name: 'Md Rafaetul Haque',
    marks: {
        physic: 88,
        math: 42,
        zoology: 90,
        chemistry: 50
    }
}

const physicMark = studentInfo.marks.physic;
const zoologyMark = studentInfo['marks']['zoology'];

const math = "math";
const mathMark = studentInfo.marks['math']
console.log(mathMark)