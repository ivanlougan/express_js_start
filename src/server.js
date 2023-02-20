// import express from "../node_modules"
const express = require("express")

const app = express();

app.use(express.json())

app.get("/home", (request, response) => {
    // console.log(request);
    // response.send("hello from the home page");
    const book = {
        title: "lotr",
        author: "tolkien",
        genre: "fantasy"
    };

    const successResponse = {
        message: "response sent successfully",
        book: book,
    };

    response.send(successResponse);


});

app.get("/movie", (request, response) => {
    response.send("hello from the movie page");
});

app.use("/home", express.static("home"));
app.use("/movies", express.static("movies"));
app.use("/bikes", express.static("bikes"));
app.use("/guitars", express.static("guitars"));

app.listen(5001, () => console.log("server is listening on port 5001"));