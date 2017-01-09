const
    express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./routes/carroRoute.js')(app);
// require('./routes/clienteRoute.js')(app);
// require('./routes/financeiroRoute.js')(app);

app.get('/', function (req, res, next) {
    res.status(200);
    res.setHeader("Content-Type", "text/html");

    fs.readFile('./html/index.html', "utf8", function (err, data) {
        if (err)
            throw err;
        res.write(data);
        res.end();
    });
});


app.listen(3000, () => {
    console.log('Server Localhost:3000');
});
