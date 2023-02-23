const Book = require("./model");

const getAllBooks = async (request, response) => {
    
    const allBooks = await Book.find({});

    console.log(allBooks);

    const successResponse = {
        message: "response sent successfully",
        book: allBooks,
    };

    response.send(successResponse);
}

const addBook = async (request, response) => {   
    
    
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
    
}

const updateGenre = async (request, response) => {
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

};

const deleteBook = async (request, response) => {

    const deleteBook = await Book.deleteOne({
        title: request.body.title,
    })

    const successDeleteResponse = {
        message: "record deleted",
        deleteBook: deleteBook,
    }

    response.send(successDeleteResponse);
};

const deleteAllByGenre = async (request, response) => {

    const deleteBooks = await Book.deleteMany({
        genre: request.body.genre,
    });

    const successDeleteResponse = {
        message: "records deleted",
        deleteBooks: deleteBooks,
    }

    response.send(successDeleteResponse);
};

const deleteAll = async (req, res) => {

    const deleteAllBooks = await Book.deleteMany({});

    const successDeleteResponse = {
        message: "all records deleted",
        deleteAllBooks: deleteAllBooks
    }

    res.send(successDeleteResponse);
}


module.exports = {
    getAllBooks,
    addBook,
    updateGenre,
    deleteBook,
    deleteAllByGenre,
    deleteAll,
};