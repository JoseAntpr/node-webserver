const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

// Helpers
require('./hbs/helpers');

/* Es una instruccion o callback que se ejecuta siempre.*/
app.use( express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jose antonio'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});