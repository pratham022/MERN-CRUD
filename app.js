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

// // ... other imports 
// const path = require("path")

// // ... other app.use middleware 
// app.use(express.static(path.join(__dirname, "client", "build")))

// // ...
// // Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
// console.log('Hello to the console');