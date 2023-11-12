const fs = require("fs");

// 1) create obj
let person = {
  fName: "ahmed",
  lName: "hossam",
  age: 20,
  city: "alex",
};

// 2) change obj to json
let personJson = JSON.stringify(person);

// 3) store in file
fs.writeFileSync("data.txt", personJson);

// 4) read file
fs.readFileSync("data.txt").toString();

// 5) convert to obj
let personObj = JSON.parse(fs.readFileSync("data.txt"));

// 6) update
personObj.fName = "adel";
personObj.lName = "ahmed";
personObj.age = 30;
personObj.city = "cairo";

// 7) convert obj to json
let updatedPersonJson = JSON.stringify(personObj);

// 8) store in file
fs.writeFileSync("updatedData.txt", updatedPersonJson);
