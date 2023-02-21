// import express from "../node_modules"
const { response } = require("express");
const express = require("express");
const { request } = require("http");

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


// {
//     "title": "matilda",
//     "author": "chop jakis"
//   }

app.post("/home", (request, response) => {
    // console.log(request.body);
    // response.send("hello from the post route");

    const newBook = {
        id: Math.floor(Math.random() * 50),
        title: request.body.title,
        author: request.body.author,
    }



    const successResponse = {
        message: "response sent successfully",
        newBook: newBook,
    };

    response.send(successResponse);
});

app.put("/home", (request, response) => {
    // console.log(request.body);

    const updatedBook = {

        id: Math.floor(Math.random() * 50),
        title: "lotr",
        author: "tolkien",
        genre: "fantasy"
        
    };

    updatedBook["author"] = request.body.newAuthor

    
    const successPutResponse = {
        message: "oleole ole",
        updatedBook: updatedBook,
        
    }
    response.send(successPutResponse);

});

app.delete("/home", (request, response) => {

    response.send("delete an element from /home")
})

app.get("/movie", (request, response) => {
    response.send("hello from the movie page");
    
});

app.use("/home", express.static("home"));
app.use("/movies", express.static("movies"));
app.use("/bikes", express.static("bikes"));
app.use("/guitars", express.static("guitars"));

app.listen(5001, () => console.log("server is listening on port 5001"));