// logical operator
// && (and), || (or), ! (not)

let num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12;

//------------- and operator (if one condition false == false // both condition must be true)
num1 = true && true; //--->true
num2 = true && false; //--->false
num3 = false && true; //--->false
num4 = false && false; //--->false
console.log(num1,num2,num3,num4);

//------------- or operator (one condition true == true)
num5 = true || true; //--->true
num6 = true || false; //--->true
num7 = false || true; //--->true
num8 = false || false; //--->false
console.log(num5,num6,num7,num8);

// compare
let num13,num14,num15;
num13 = 13;
num14 = 12;
num15 = 5;

const result = (num13 > num14) && (num14 < num15);
console.log(result); //----------- false (one condition false here )
const result1 = (num13 > num14) || (num14 < num15);//----------- true (one condition true here)
console.log(result1); //----------- false (not operator use )
console.log(!result1); //----------- false (not operator use )



