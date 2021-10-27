//======== calculate time with milliseconds since January 1. ============
const dateNow = Date.now();  //---- Date.new()
console.log(dateNow);

//======== formate ---->>>> 2021-10-27T05:51:52.225Z ===========================
const date = new Date();
console.log(date);

//======== creates a new date object with the specified date and time ============
//---------- January = 0.    //---------- December = 11.
const setDate = new Date(2030,9,27,02,56,30,0); //formate ---->>>> 2030-10-26T20:56:30.000Z 
console.log(setDate);

//============== Get Full Year  ============
const year = new Date().getFullYear();
console.log(year, '(current year)');

//============== Get Month  ============
// to get the current month,must add 1.
//---------- January index = 0.    
//---------- December index = 11.

//const month = new Date().getMonth(); //-------index number shows.
const month = new Date().getMonth() + 1; //-----index number + 1;
console.log(month, '(current month)');

//============== Get Month ============
const monthName = new Date().getMonth(); //---- result = 3,which is index number.
const monthsName =['January','February','March','April','May','June','July','August','September','October','November','December' ];
console.log(monthsName[monthName], '(current month name)'); //---- result = Wednesday. weekday as a number (0-6)

//============== Get Day ============
const day = new Date().getDay(); //---- index number shows.
const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];
console.log(days[day], '(current day)'); //---- weekday as a number (0-6)

//============== Get Hour ============
const hour = new Date().getHours(); 
console.log(hour, '(current hour)');
//============== Get minute ============
const minutes = new Date().getMinutes(); 
console.log(minutes, '(current minute)');


//=============================================================
//========================== Note =============================
//=============================================================
// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.
//=============================================================
//=============================================================
//=============================================================
