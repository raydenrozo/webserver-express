const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;


app.use( express.static(__dirname + '/public' ) );

//express hbs engine

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');
 


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'jonathan josé'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});
 
app.listen(port, () => {
    console.log(`listening port ${port}`);
})
