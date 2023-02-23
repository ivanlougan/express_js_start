const { Router } = require("express");
const bookRouter = Router();
const Book = require("./model");
const { getAllBooks, addBook, updateGenre, deleteBook, deleteAllByGenre, deleteAll } = require("./controller");
const { deleteOne } = require("./model");

// const { get } = require("mongoose");

bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.post("/books/addbook", addBook);
bookRouter.put("/books/updatebookgenre", updateGenre);
bookRouter.delete("/books/deletebook", deleteBook);
bookRouter.delete("/books/deletebooks", deleteAllByGenre);
bookRouter.delete("/books/deleteAllBooks", deleteAll);

module.exports = bookRouter;


