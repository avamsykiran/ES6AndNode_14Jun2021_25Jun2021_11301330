var bs = require("../service/bookService");

/* GET http://localhost:PORT/books */
exports.defaultGetHandler = (req, res) => {
    res.status(200);
    res.send(bs.getAllBooks());
}

/* GET http://localhost:PORT/books/24 */
exports.getByIdHandler = (req, res) => {
    let bookId = req.params.id;

    let book = bs.getBookById(bookId);

    if (book) {
        res.status(200);
        res.send(book);
    } else {
        res.status(404);
        res.send();
    }
}

/* POST http://localhost:8888/books */
exports.createBookHandler = (req, res) => {

    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price
    };

    bs.insertBook(book);
    res.status(200);
    res.send();
}

/* PUT http://localhost:8888/books */
exports.modifyBookHandler = (req, res) => {

    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price
    };

    let isModified = bs.modifyBook(book);

    if(isModified){
        res.status(200);
    }else{
        res.status(500);
    }

    res.send();
}

/* DELETE http://localhost:PORT/books/24 */
exports.deleteByIdHandler = (req, res) => {
    let bookId = req.params.id;

    let isDeleted = bs.deleteBook(bookId);
  
    if (isDeleted) {
        res.status(200);
    } else {
        res.status(404);
    }

    res.send();
}