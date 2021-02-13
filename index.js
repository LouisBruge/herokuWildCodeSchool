require("dotenv").config();
const express = require("express");

const { Item } = require("./dataLayer/models");

const PORT = process.env.PORT ?? 8080;

const app = express();

app.get("/", (req, res) => {
  res.send({mesage: "Hello World!"});
});

app.get("/api/items", (req, res) => {
  Item.findAll()
    .then(items => res.send({items}))
    .catch(e => res.send(e.message || e));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
