// ===========create promise ======

const myPromise = new Promise((resolve, reject) => {

    let promiseComplete = true;

    if (promiseComplete) {
        resolve(`yes, promise completed successfully`);
    } else {
        reject(new Error(`sorry, promise doesn't complete yet`))
    }
});

// -------- console.log(myPromise) 
// my promise return a promise which is carry some prototypes(catch,finally,then). we use this to show our results.
// than -------> if promise show
// catch -------> if promise don't show
// finally -------> if we want to show something default when the some is not work

myPromise.then((res) => {
    console.log(res)
})

    .catch((err) => {
        console.log(err.message)
    })



const myPromise2 = new Promise((resolve, reject) => {
    const promiseComplete2 = true;
    resolve("this is promise 2")
})

//========== work with multiple promise =========
// ------ Promise.all() --------
// we received promise with an array

// Promise.all([myPromise, myPromise2])   
//     .then((res) => {
//         console.log(res)
//     })


//---------- work with multiple promise with destructuring
//---------- we can use single promise 
Promise.all([myPromise, myPromise2])
    .then(([res, res2]) => {
        console.log(`promise : ${res} promise2 : ${res2}`)
    })


//========== promise.race =========
//========== no need to destructure .... it will return a single promise, which is first completed.

const myPromise3 = new Promise((resolve) => {
    const promiseComplete2 = true;
    setTimeout(() => {
        resolve("this is promise 3 with race")
    }, 4000)
})
const myPromise4 = new Promise((resolve) => {
    const promiseComplete2 = true;
    setTimeout(() => {
        resolve("this is promise 4 with race")
    }, 2000)
})

Promise.race([myPromise3, myPromise4])
    .then((res) => {
        console.log(res)
    })

// ============= promise chaining for promise handling ==========
//------------ catch use only one time in promise chain. when it will get a rejection that time it will stop and not to continue another promise

const myPromise5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is promise five`)
        }, 7000)
    })
}
const myPromise6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`promise six which is not working`)
        }, 5000)
    })
}
const myPromise7 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is promise seven`)
        }, 6000)
    })
}
//-------- promise chain
myPromise5()
    .then((res) => { console.log(res) })
    .then(myPromise6)
    .then((res) => { console.log(res) })
    .then(myPromise7)
    .then((res) => { console.log(res) })
    .catch((err) => {
        console.log(err)
    })
