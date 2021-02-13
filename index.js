require("dotenv").config();
const express = require("express");
const path = require("path");

const { Item } = require("./dataLayer/models");

const PORT = process.env.PORT ?? 8080;
const WEB_APP_BUILD_PATH = "web-app/build";

const app = express();

app.use(express.static(path.join(__dirname, WEB_APP_BUILD_PATH)));

app.get("/api/items", (req, res) => {
  Item.findAll()
    .then(items => res.send({items}))
    .catch(e => res.send(e.message || e));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, WEB_APP_BUILD_PATH, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
