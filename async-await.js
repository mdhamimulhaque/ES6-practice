console.log(`welcome to promise world`)


const task1 = () => {
    return new Promise((resolve, reject) => {
        resolve(`Hii...i am task one`)
    })
}
const task2 = () => {
    return new Promise((resolve, reject) => {
        resolve(`Hii...i am task two`)
    })
}
const task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hii...i am task three`)
        }, 2000)
    })
}
const task4 = () => {
    return new Promise((resolve, reject) => {
        reject(`sorry...task four doesn't work`)
    })
}
const task5 = () => {
    return new Promise((resolve, reject) => {
        resolve(`Hii...i am task five`)
    })
}

//============= async-await with (normal-function or function declaration) ===========
// async function callAllTask() {
//     const p1 = await task1()
//     console.log(p1);
//     const p2 = await task2()
//     console.log(p2);
//     const p3 = await task3()
//     console.log(p3);
//     const p4 = await task4()
//     console.log(p4);
//     const p5 = await task5()
//     console.log(p5);
// }
// callAllTask();

//============= async-await with (es7) ===========
const callAllTask = async () => {
    try {
        const p1 = await task1()
        console.log(p1);
        const p2 = await task2()
        console.log(p2);
        const p3 = await task3()
        console.log(p3);
        const p4 = await task4()
        console.log(p4);
        const p5 = await task5()
        console.log(p5);
    } catch (e) {
        console.log(e)
    }
}
callAllTask();


console.log(`Bye...`)