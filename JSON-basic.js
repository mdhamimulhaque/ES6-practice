//JSON = JavaScript Object Notation

const studentDocument = {
    id:21,
    name:"Himel",
    friends:["Emon","Anik","Minhaz","Nuralom"],
    friendsInfo:{
        school: "Narail Govt. High School",
        teachers: 43
    }
}

const result = studentDocument;
console.log(result," ", "Normal format"); //--------------normal format

const convertJSON =JSON.stringify(result);
console.log(convertJSON," ", "Normal toJSON format"); //------------------Normal to JSON format (object to Stringify)

const JSONtoNormal =JSON.parse(convertJSON);
console.log(JSONtoNormal, " ", "JSON to Normal format"); //------------------JSON to normal format (stringify to object)