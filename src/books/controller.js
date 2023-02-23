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

const getBookParam = async (req, res) => {

    // res.send("you have requested to see book with id: " + req.params.id);

    return res.json({
        message: "yo yo what r u",
        title: req.query.title,
        author: req.query.author,
        genre: req.query.genre
    });

    // json response when uri = http://localhost:5001/book?title=Adziabadzia&author=Roberto&genre=super
    // {
    //     "message": "yo yo what r u",
    //     "title": "Adziabadzia",
    //     "author": "Roberto",
    //     "genre": "super"
    //   }
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

const dynamicUpdate = async (request, response) => {
    // const filterObj = {songName: request.body.songName}
    // const updateObj = {artist: request.body.newArtist}



    const filterObj = { title: request.body.title}
    const updateObj = { [request.body.updateKey]: request.body.updateValue}


    const updatedBook = await Book.updateOne(filterObj, updateObj);

    const successResponse = {
        message: "success",
        updatedBook: updatedBook,   
    }

    response.send(successResponse);
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
    getBookParam,
    addBook,
    updateGenre,
    dynamicUpdate,
    deleteBook,
    deleteAllByGenre,
    deleteAll,
    
};