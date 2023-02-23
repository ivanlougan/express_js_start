require("dotenv").config();
require("./db/connection");
// import express from "../node_modules"
const { response } = require("express");
const express = require("express");
const { request } = require("http");

const Book = require("./books/model");

const app = express();

app.use(express.json())

app.get("/books/getallbooks", async (request, response) => {
    
    const allBooks = await Book.find({});

    console.log(allBooks);

    const successResponse = {
        message: "response sent successfully",
        book: allBooks,
    };

    response.send(successResponse);
});


app.post("/books/addbook", async (request, response) => {
    
    const newBook = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });


    const successResponse = {
        message: "response sent successfully",
        newBook: newBook,
    };

    response.send(successResponse);
});

app.put("/books/updatebookgenre", async (request, response) => {
    // console.log(request.body);

    const updatedBook = await Book.updateOne({
        title: "matilda",        
    }, {        
        genre: request.body.genre,
    });

    // updatedBook["genre"] = request.body.newGenre

    
    const successPutResponse = {
        message: "very new book genre",
        updatedBook: updatedBook,
        
    }
    response.send(successPutResponse);

});

app.delete("/books/deletebook", async (request, response) => {

    const deleteBook = await Book.deleteOne({
        title: request.body.title,
    })

    const successDeleteResponse = {
        message: "record deleted",
        deleteBook: deleteBook,
    }

    response.send(successDeleteResponse);
});

app.delete("/books/deletebooks", async (request, response) => {

    const deleteBooks = await Book.deleteMany({
        genre: request.body.genre,
    });

    const successDeleteResponse = {
        message: "records deleted",
        deleteBooks: deleteBooks,
    }

    response.send(successDeleteResponse);
});

app.use("/home", express.static("home"));
app.use("/movies", express.static("movies"));
app.use("/bikes", express.static("bikes"));
app.use("/guitars", express.static("guitars"));

app.listen(5001, () => console.log("server is listening on port 5001"));