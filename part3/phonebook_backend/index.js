const express = require("express");
const app = express();

// Sin json-parser, la propiedad body no estaría definida.
app.use(express.json()); //de json a obj

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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
