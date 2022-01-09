// ============== nested loop =================

// for(i=0; i<=3; i++){
//   for(j=0; j<=5; j++){
//     console.log("finished 1st inner loop (j)",j);
//   } 
//   console.log("finished outer loop (i)", i) ;
//   console.log("===========================")
// }


// ------------- half pyramid ----------
 // 1     - 1st
 // 12    - 2st
 // 123   - 3st
 // 1234  - 4st
 // 12345 - 5st

 // outer loop decided that how many row will be print and inner loop print the value

 for(i=1; i<=5; i++){
    let num = "";
     for(j=1; j<=i; j++){
        //  console.log(j);
        num += j + " ";
     }
    console.log(num);  
 }