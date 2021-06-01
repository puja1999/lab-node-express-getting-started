// Node Server
var http = require('http');

http.createServer((req, res) => {
    res.write("This is Node Server");
    res.end();
  }).listen(3000, () => console.log("Node server started at port 3000"));

// Express Server
const express = require('express');
var app = express();

app.get("/", (req, res) => {
  res.send("This is Express Server");
});

app.get("/sample", (req, res) => {
  res.send("Sample Express Page");
});

app.listen(4000, () => console.log("Express server started at port 4000"));
