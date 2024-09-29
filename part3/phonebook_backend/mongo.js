const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}
//* Conection
const password = process.argv[2];

const url = `mongodb+srv://davidvela306edu:${password}@cluster0.n1jcd.mongodb.net/phoneBook?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

//* Schema is stored in personSchema
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

//mongoose.model(nombre singular del modelo , schema)
const Person = mongoose.model("Person", personSchema);

//* new data object generated: executed on the command line:
// node mongo.js yourpassword "Arto Vihavainen" 045-1232456

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

person.save().then((result) => {
  console.log(`added ${person.name} number ${person.number} to phonebook`);
  mongoose.connection.close();
});

//* Obtaining objects from the database, execute on the command line:
// node mongo.js yourpassword

// Person.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
