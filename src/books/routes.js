const { Router } = require("express");
const bookRouter = Router();
const { deleteOne } = require("./model");
const Book = require("./model");

const { getAllBooks, addBook, updateGenre, 
    deleteBook, deleteAllByGenre, deleteAll, 
    dynamicUpdate, getBookParam } = require("./controller");

// const { get } = require("mongoose");

bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/book", getBookParam)
bookRouter.post("/books/addbook", addBook);
bookRouter.put("/books/updatebookgenre", updateGenre);
bookRouter.delete("/books/deletebook", deleteBook);
bookRouter.delete("/books/deletebooks", deleteAllByGenre);
bookRouter.delete("/books/deleteAllBooks", deleteAll);
bookRouter.put("/books", dynamicUpdate);

module.exports = bookRouter;


