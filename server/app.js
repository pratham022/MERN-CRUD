const express = require('express');
const app = express();

// middleware
const middleware = (req, res, next) => {
    console.log('Hello my middleware');
    next();
}

app.get('/', (req, res)  => {
    res.send('Hello world from server');
});

app.get('/about', middleware, (req, res)  => {
    res.send('Hello world ABOUT from server');
});

app.get('/contact', (req, res)  => {
    res.send('Hello world CONTACT from server');
});

app.get('/signin', (req, res)  => {
    res.send('Hello world SIGN IN from server');
});

app.get('/signup', (req, res)  => {
    res.send('Hello world SIGN UP from server');
});

app.listen(3000, () => {
    console.log('Server is running at PORT 3000');
})
// console.log('Hello to the console');