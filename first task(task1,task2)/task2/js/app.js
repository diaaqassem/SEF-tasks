// important note install npm module ==> npm init

const yargs = require("yargs"); //to parsing data in terminal

const data = require("./data");

// yargs command add
yargs.command({
  command: "add",
  describe: "Add a new person to file persons.json",
  builder: {
    id: {
      describe: "person's id",
      demandOption: true,
      type: "number",
    },
    fName: {
      describe: "Person's firstname",
      demandOption: true,
      type: "string",
    },
    lName: {
      describe: "Person's lastname",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "Person's Age",
      demandOption: true,
      type: "number",
    },
    city: {
      describe: "city of the person",
      demandOption: false,
      type: "string",
    },
  },
  handler(obj) {
    data.addPerson(obj.id, obj.fName, obj.lName, obj.age, obj.city);
  },
});

// yargs command remove
yargs.command({
  command: "delete",
  describe: "Remove a person from file persons.json",
  builder: {
    id: {
      describe: "person's id",
      demandOption: true,
      type: "number",
    },
  },
  handler(obj) {
    data.delPerson(obj.id);
  },
});

// yargs command list
yargs.command({
  command: "list",
  describe: "List all people in the database",
  handler() {
    console.log("all persons");
    data.listPersons();
  },
});

// get the 5th person
yargs.command({
  command: "get",
  describe: "Get info about only the 5th person",
  handler() {
    console.log("info the 5th person");
    console.log(data.getFifthPerson());
  },
});

yargs.parse();
