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

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
// console.log('Hello to the console');