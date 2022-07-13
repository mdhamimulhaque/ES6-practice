//  ========== synchronous =========
// Javascript by default Synchronous language. That means it will finish his first work than another task maintain his serial. That's why JavaScript has a behavior which is called "blocking code behavior"

const task1 = () => {
    console.log("task 1 done")
}
const task2 = () => {
    console.log("task 2 done")
}
const task3 = () => {
    console.log("task 3 done")
}

task1();
task2();
task3();

// ========== asynchronous ==========

// setTimeout() --------- is a asynchronous function. 
// we use asynchronous for giving some time to our task . so that, our another task can continue their task and load our asynchronous task

const task4 = () => {
    console.log("task 4 done")
}
const task5 = () => {
    setTimeout(() => {
        console.log("task 5 done")
    }, 5000);
}
const task6 = () => {
    console.log("task 6 done")
}

task4();
task5();
task6();
