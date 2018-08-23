const express = require('express');
const app = express();

/* Es una instruccion o callback que se ejecuta siempre.*/

app.use( express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});