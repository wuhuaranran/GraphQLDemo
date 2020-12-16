// server.js
const express = require("express");
const expressGraphql = require("express-graphql");
const app = express();

app.use(express.static(__dirname + "/pages/" + "index.js"));

app.get("/index", function (req, res) {
  res.sendFile(__dirname + "/pages/" + "index.html");
});

const schema = require("./sehema");

app.use(
  "/graphql",
  expressGraphql({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.end("hello graphql~"));

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("--- server started ---");
  console.log("at http://localhost:3000");
});
