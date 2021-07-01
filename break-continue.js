//==================break===============
const num1=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<num1.length;i++){
    if(num1[i]>5){
        break;
    }
    console.log(num1[i]);
}

//=====================continue====================

const num2=[1,-2,-3,4,-5,6,-7,8,9];

for(let i=0;i<num2.length;i++){
    if(num2[i]>0){
        continue;
    }
    console.log(num2[i]);
}