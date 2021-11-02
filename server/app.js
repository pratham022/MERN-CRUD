const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

require('./db/conn');
app.use(express.json());
const User = require('./models/userSchema');

app.use(require('./routes/auth'));


// middleware
const middleware = (req, res, next) => {
    console.log('Hello my middleware');
    next();
}



app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
// console.log('Hello to the console');