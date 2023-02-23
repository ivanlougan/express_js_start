require("dotenv").config();
require("./db/connection");
// import express from "../node_modules"
const { response } = require("express");
const express = require("express");
const { request } = require("http");

const Book = require("./books/model");

const bookRouter = require("./books/routes")

const app = express();

app.use(express.json());

app.use(bookRouter);


app.use("/home", express.static("home"));
app.use("/movies", express.static("movies"));
app.use("/bikes", express.static("bikes"));
app.use("/guitars", express.static("guitars"));

app.listen(5001, () => console.log("server is listening on port 5001"));