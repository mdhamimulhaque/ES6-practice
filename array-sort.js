//========================== sort method =============
// const num = [1,5,3,8,6,2,4,7,9];
// const sortNumber = num.sort();
// console.log(sortNumber); // --->  [1, 2, 3, 4, 5,6, 7, 8, 9]

const num1 = [1, 5, 545, 3, 8, 45, 6, 2, 4, 7, 9];
// const sortNumber1 = num1.sort(); 
//console.log(sortNumber1); //---> [1,2, 3, 4, 45,5, 545, 6, 7,8,9] (sort check only first item. solve this problem)
// const sortNumber1 = num1.sort((a,b)=> a-b); //---> ascending
// const sortNumber1 = num1.sort((a,b)=> b-a); //---> descending
// console.log(sortNumber1); 

const num2 = [1, 5, 545, 3, 8, 45, 6, 2, 4, 7, 9];


const arrLength = num2.length;
for (let i = 0; i < arrLength; i++) {
    // console.log("i ===",i);
    for (let j = 0; j < i; j++) {
        // console.log("j ===",j);
        if (num2[j] < num2[i]) {
            // console.log("j,i",j,i);
            let temp = num2[i]; //----------->> this is swap
            num2[i] = num2[j];
            num2[j] = temp;
        }
    }

}
console.log(num2) //---> [545, 45,9, 8, 7, 6, 5,  4, 3, 2, 1]