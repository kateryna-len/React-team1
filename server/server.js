const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs');
const cors= require('cors');
const compression = require('compression');
app.use(cors({ origin: '*' }));
app.use(compression());

app.get("/api", (req, res) => {
    fs.readFile(__dirname + '/' + 'static/books.json', 'utf-8', (error, data) => {
        error ? console.log(error) : (res.end(data));
    });
});


app.listen(5000, 'localhost', (error) => {
    error ? console.log(error) : console.log(`App listening at http://localhost:${PORT}/api`);
});
