var http = require('http');
var fs = require('fs');
var url = require('url');

var myWebServer = http.createServer((request, response) => {
    let url = request.url;

    if ("/" == url || url.endsWith(".htm") || url.endsWith(".html") || url.endsWith(".css")) {
        staticUrlHandler(request, response);
    } else {
        if (url.startsWith("/enquiry")) {
            enquiryHandler(request, response);
        } else if (url.startsWith("/books")) {
            booksHandler(request, response);
        } else {
            response.writeHead(404, { 'content-type': 'text/html' });
            response.end();
        }
    }
});

const staticUrlHandler = (request, response) => {
    let url = request.url;
    let fileName = "./public";

    if ("/" == url) {
        fileName = `${fileName}/index.htm`;
    } else {
        fileName = `${fileName}${url}`;
    }

    if (fileName.length > 0) {
        fs.readFile(fileName, (err, data) => {
            if (!err) {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.end(data);
            } else {
                console.log(err);
                response.writeHead(404, { 'content-type': 'text/html' });
                response.end();
            }
        });
    }
}

const enquiryHandler = (request, response) => {

    let parsedReq = url.parse(request.url,true);

    let userName = parsedReq.query.unm;
    let mobile = parsedReq.query.mob;

    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(`
    <p> Thank you <strong>${userName}</strong> for your query.<br/> 
    We will get back to you soon on <strong>${mobile}</strong></p>`);
}

const booksHandler = (request, response) => {
    fs.readFile('./data/books.json', (err, data) => {
        if (err) {
            response.writeHead(500, { 'content-type': 'application/json' });
            response.end();
        } else {
            response.writeHead(200, { 'content-type': 'application/json' });
            let books = JSON.parse(data).books;
            response.end(JSON.stringify(books));
        }
    });
}

const PORT = 9999;

myWebServer.listen(PORT);

console.log(`Server is ready @ http://localhost:${PORT}`);