const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
const PORT = process.env.PORT || 8000;

require('./db/conn');
app.use(express.json());
const User = require('./models/userSchema');

app.use(require('./routes/auth'));


// middleware
const middleware = (req, res, next) => {
    console.log('Hello my middleware');
    next();
}

// Step 3
if (process.env.NODE_ENV === 'production') {
    // console.log saple hshshshshsh
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
// console.log('Hello to the console');