// import express from "../node_modules"
const express = require("express")

const app = express();

app.use("/home", express.static("home"));
app.use("/movies", express.static("movies"));
app.use("/bikes", express.static("bikes"));
app.use("/guitars", express.static("guitars"));

app.listen(5001, () => console.log("server is listening on port 5001"));