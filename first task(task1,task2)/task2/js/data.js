const fs = require("fs");

// function to add person
const addPerson = (id, fName, lName, age, city) => {
  let persons = loadPersons();
  // check if the id is already in use
  const dulicatedData = persons.filter((person) => {
    return person.id == id;
  });
  if (dulicatedData.length == 0) {
    persons.push({
      id,
      fName,
      lName,
      age,
      city,
    });
    savePersons(persons);
  } else {
    console.log("This ID is already used");
  }
};

//function to load persons
const loadPersons = () => {
  try {
    return JSON.parse(fs.readFileSync("persons.json"));
  } catch {
    return [];
  }
};

//function to save persons
const savePersons = (persons) => {
  fs.writeFileSync("persons.json", JSON.stringify(persons));
};

// function to delete a person
function delPerson(id) {
  let persons = loadPersons();
  const dataToKeep = persons.filter((person) => {
    return person.id != id;
  });
  savePersons(dataToKeep);
}

// function to list persons
function listPersons() {
  let persons = loadPersons();
  persons.forEach((person) => {
    console.log(
      `firstname: ${person.fName} ,lastname: ${person.lName}, city: ${person.city}`
    );
  });
}

//function to read all data for only the 5th person
function getFifthPerson() {
  let persons = loadPersons();
  return persons[4];
}

// export functions to read in another file
module.exports = { addPerson, delPerson, listPersons, getFifthPerson };
