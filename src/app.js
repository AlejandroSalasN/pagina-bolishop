const express = require('express');
const morgan = require('morgan');
const methodOverride = require("method-override");
const path = require('path');
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


//Middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

//routes
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
app.get('/numeros', (req, res) => {
    res.send(
        `<ul>` +
        numeros.map((item) => {
            return `<li>${item}</li>`
        })
            .join('') +
        `</ul>`
    );
});

// index page
app.get('/', (req, res) => {
    res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

// login page
app.get('/signin', (req, res) => {
    res.render('pages/signin');
});

// register page
app.get('/signup', (req, res) => {
    res.render('pages/signup');
});

// users
app.get('/usuarios', (req, res) => {
    res.render('pages/usuarios');
});

// test page
app.get('/pruebas', (req, res) => {
    res.render('pages/pruebas', {greeting: 'Hello World'});
});

app.use('/users', require('./routes/user.route'));
app.use('/marcas', require('./routes/marca.route'));
app.use("/productos", require("./routes/producto.route"));

module.exports = app;