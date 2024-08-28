const express = require("express");
const morgan=require("morgan");
const app = express();

// Sin json-parser, la propiedad body no estaría definida.
app.use(express.json()); //de json a obj
app.use(morgan('tiny'));
let people = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
app.get("/", (request, response) => {
  response.send("<h2>Phonebook API RestFull</h2>");
});

app.get("/info", async (req, res) => {
  const date = new Date();
  res.send(
    `<p>Phonebook has info for ${people.length} people</p></br><p>Date: ${date}</p>`
  );
});

app.get("/api/persons", (req, res) => {
  res.json(people);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.find((p) => p.id === id);
  if (!person) {
    res.statusMessage = "Resource not found";
    res.status(400).end();
  }
  res.json({ person });
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.filter((person) => person.id !== id);
  res.statusMessage = "Resource deleted";
  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const maxId = people.length > 0 ? Math.max(...people.map((p) => p.id)) : 0;

  const person = req.body;
  const existingPerson = people.find((p) => p.name === person.name);
  console.log("body name: ", person.name);
  console.log("body number: ", person.number);
  console.log("existingPerson: ", existingPerson);

  if (!existingPerson && person.name && person.number) {
    person.id = maxId + 1;
    people = people.concat(person);
    res.json(person);
  } else {
    res
      .status(400)
      .json({ error: "name must be unique and all fields must be filled" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
